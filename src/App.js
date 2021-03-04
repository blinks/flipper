import './App.css';

import React, { useState } from 'react';
import ReactMarkdown from 'react-markdown';

// Bootstrap components.
import Button from 'react-bootstrap/Button';
import ButtonToolbar from 'react-bootstrap/ButtonToolbar';
import Card from 'react-bootstrap/Card';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

// Possible responses to a dialog question, for cards.
const RESPONSES = {
  yes: 'outline-success',
  no: 'outline-danger',
  ok: 'outline-secondary',
};

// Bytecode for what to do after a response. See interpreter at App.click.
// any positive integer => increments the box by that much.
const NEXT_CARD = -1;
const STOP = -2;
const humanize = (bytecode) => {
  switch (bytecode) {
  case NEXT_CARD: return 'next card';
  case STOP: return 'stop';
  default:
    return `down ${bytecode} box(es)`;
  }
};

// Fisher-Yates shuffle in-place implementation.
function shuffle(es) {
  for (var i = es.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1));
    [es[i], es[j]] = [es[j], es[i]];
  }
  return es;
};

// Encapsulated COIN bot interpreter.
function App() {
  let [history, setHistory] = useState([]);
  const log = (text) => {
    console.log(text);
    history.push(text);
    setHistory(history);
  };
  const renderHistory = () => {
    return history.map((entry, index) => (<li key={index}>{entry}</li>));
  };

  let [factionKey, setFactionKey] = useState(null); // top-level faction key
  let [deckState, setDeckState] = useState({}); // card index by faction.
  let [card, setCard] = useState(null); // current card index
  let [index, setIndex] = useState(0); // current instruction index

  // Start using a faction.
  const _start = (f) => {
    factionKey = f; setFactionKey(f);
    setCard(deckState[f] || DECK[f].length); _nextCard();
  };

  // Draw the next card. (Shuffle and reset when we reach the end.)
  const _nextCard = () => {
    var deck = deckState[factionKey]; // remaining cards in the faction deck.
    if (!deck) { deck = shuffle(Object.keys(DECK[factionKey])); }
    setIndex(0);
    setCard(deck.pop());
    deckState[factionKey] = deck;
    setDeckState(deck);
  };

  // Increment the current instruction.
  // Throw if this takes us past the end of the card.
  const _inc = (inc) => {
    setIndex(index + inc);
    if (index >= DECK[factionKey][card].length) {
      throw new Error(
        `Card ${factionKey}/${card} doesn't have ${index} boxes.`);
    }
  };

  // Stop using a faction.
  const _stop = () => {
    setFactionKey(null); setCard(0); setIndex(0);
  };

  // Evaluate a bytecode instruction in-context.
  const evaluate = (inst, choice) => {
    const bytecode = inst[choice];
    log(`${factionKey}/${card}[${index}] ` +
        `-> ${choice} (${humanize(bytecode)})`);

    switch (bytecode) {
    case NEXT_CARD: _nextCard(); break;
    case STOP: _stop(); break;
    default: _inc(bytecode); break;
    }
  };

  // If we have no faction, show faction dialog.
  // Otherwise, show the current instruction's dialog.
  var dialog = null;
  if (!factionKey) {
    const factionBtns = Object.keys(DECK).map(idx => (
      <Button key={idx} onClick={(e) => _start(idx)}>{idx}</Button>
    ));

    dialog = (
      <Dialog type="primary" options={factionBtns}>Faction to act?</Dialog>
    );
  } else {
    const inst = DECK[factionKey][card][index];
    const opts = [];
    for (var k in RESPONSES) {
      const key = k;
      if (inst[key]) {
        opts.push(<Button key={key} variant={RESPONSES[key]}
                  onClick={(e) => evaluate(inst, key)}>{key}</Button>);
      }
    }

    dialog = (
      <Dialog type={opts.length > 1 ? 'primary' : 'secondary'} options={opts}>
        <b>({factionKey}/{card}.{index})</b>
        <ReactMarkdown>{inst.text}</ReactMarkdown>
      </Dialog>
    );
  }

  return (
    <div className="container">
      <Navbar bg="light">
        <Navbar.Brand>Flipper</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="https://github.com/blinks/flipper">Source</Nav.Link>
        </Nav>
      </Navbar>
      {dialog} <hr />
      <ul>{renderHistory()}</ul>
    </div>
  );
};

// Consistent bot dialog box.
function Dialog(props) {
  return (
    <Card border={props.type || 'secondary'}>
      <Card.Body><Card.Text>{props.children}</Card.Text></Card.Body>
      <Card.Footer>
        <ButtonToolbar className="justify-content-between">
          {props.options}
        </ButtonToolbar>
      </Card.Footer>
    </Card>
  );
};

const DECK = {
  MG: {
    A: [
      { text: "Die roll ≤ Available Troops?",
        yes: 1, no: NEXT_CARD },
      { text: "Cubes exceed all Active non-Base adversaries in any spaces?",
        yes: 1, no: 2 },
      { text: "#### Assault\n- Select spaces using **Remove.**", ok: STOP },
      { text: "Train.", ok: STOP },
    ],
    B: [{ text: "Train.", ok: STOP }],
    C: [{ text: "Train.", ok: STOP }],
    D: [{ text: "Secure.", ok: STOP }],
    E: [{ text: "Recon.", ok: STOP }],
    F: [{ text: "Assault.", ok: STOP }],
  },

  CORP: {
    G: [{ text: "Logistics.", ok: STOP }],
    H: [{ text: "Logistics.", ok: STOP }],
    J: [{ text: "Logistics.", ok: STOP }],
    K: [{ text: "Secure.", ok: STOP }],
    L: [{ text: "Recon.", ok: STOP }],
    M: [{ text: "Assault.", ok: STOP }],
  },
  RD: {
    N: [{ text: "Rally.", ok: STOP }],
    P: [{ text: "Rally.", ok: STOP }],
    Q: [{ text: "Rally.", ok: STOP }],
    R: [{ text: "March.", ok: STOP }],
    S: [{ text: "Attack.", ok: STOP }],
    T: [{ text: "Campaign.", ok: STOP }],
  },
  CR: {
    U: [{ text: "Rally.", ok: STOP }],
    V: [{ text: "Rally.", ok: STOP }],
    W: [{ text: "Rally.", ok: STOP }],
    X: [{ text: "Travel.", ok: STOP }],
    Y: [{ text: "Attack.", ok: STOP }],
    Z: [{ text: "Campaign.", ok: STOP }],
  },
};

export default App;
