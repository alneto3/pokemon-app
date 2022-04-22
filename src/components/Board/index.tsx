import React from "react";
import { canvas, ECanvas } from "../../contexts/canvas/helpers";
import { ModalContext } from "../../contexts/chests";
import { GAME_SIZE, GAME_SIZEH } from "../../settings/constants";
import Hero from "../Hero";
import Enemy from "../Enemy";
import ModalCapture from "../Modal";

function getCanvasMap() {
  const array = [];

  for (let y = 0; y < canvas.length; y++) {
    const canvasY = canvas[y];

    for (let x = 0; x < canvasY.length; x++) {
      const canvasYX = canvasY[x];

      const position = { x: x, y: y };
      const text = canvas[y][x] || canvasYX;
      const key = `${x}-${y}`;

      if (text === ECanvas.ENEMY) {
        array.push(<Enemy key={key} initialPosition={position} />)
      }

      if (text === ECanvas.HERO) {
        array.push(<Hero key={key} initialPosition={position} />)
      }

    }
  }

  return array;
}

const elements = getCanvasMap();

const Board = () => {
  const modalContext = React.useContext(ModalContext);

    function renderModal(){
    return <ModalCapture/>
  }


  return (
    <div>
      {elements}
      {modalContext.totalPoke === modalContext.openedPokes.total && (
        renderModal()
      )}
      <img src="./assets/background.png" alt="" width={GAME_SIZE} height={GAME_SIZEH} />
    </div>

  );
}

export default Board;