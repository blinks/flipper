# Flipper

A COIN bot development system.

## tl;dr

Fork this repository and edit the "DECK" map at the bottom of [App.js](src/App.js) -- then with `npm start` you should be able to play with your bot. 

## Architecture

This is a simple one-page React app. Everything interesting is in [src/App.js](src/App.js), so if you're up for reading code, start there.

In particular, Flipper only deals with the deck of cards (see `DECK` in that file). The deck is a map from faction key to card list, and double-sided cards have been collapsed down to a single list with their instructions.

One tricky thing about this organization is that a card is a miniature program, and Flipper defines a very small instruction set for them. Each instruction contains `text` for the player along with one or more response keys (`yes`, `no`, and `ok`). The value for a key determines what happens when its button is pressed:

- `NEXT_CARD` discards this card and shows the first box of the next.
- `STOP` informs the system that this faction's activation is finished.
- Positive numbers move to later instructions; 1 goes to the next, 2 skips an instruction, and so on. (For programmers, this is a relative `goto`.)

The system automatically shuffles decks when first drawing a card or when hitting the end of one, but deck state is preserved between faction activations.

The bytecode interpreter is defined in the `App()` function itself, if you want the finer details.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs Flipper in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

## Learn More
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

