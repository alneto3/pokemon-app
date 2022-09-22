import React from "react";
import CanvasProvider from "../contexts/canvas";
import PokesProvider, { ModalContext } from "../contexts/chests";
import Board from "./Board";
import Debugger from "./Debugger";

function Game() {
  return (
    <CanvasProvider>
      <PokesProvider>

        {/* <Debugger /> */}
        <Board />
      </PokesProvider>
    </CanvasProvider>
  )
};

export default Game;
