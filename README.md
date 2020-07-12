## Heuristics Quest

Plots [chess games data](https://github.com/programarivm/pgn-chess-data/blob/master/README.md) for the purpose to inspect the programmer-defined heuristic evaluation functions available at [programarivm/pgn-chess/src/Heuristic/](https://github.com/programarivm/pgn-chess/tree/master/src/Heuristic).

### Set Up

Create an `.env` file:

    cp .env.example .env

Start the [data server](https://github.com/programarivm/pgn-chess-data) and then update the `REACT_APP_URL` variable in your `.env` file accordingly.

### Run the React App

    npm start
