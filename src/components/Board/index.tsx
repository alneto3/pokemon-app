import React from "react";
import { canvas, ECanvas } from "../../contexts/canvas/helpers";
import { ModalContext } from "../../contexts/chests";
import { GAME_SIZE, GAME_SIZEH } from "../../settings/constants";
import Chest from "../Chest";
import Demon from "../Demon";
import Hero from "../Hero";
import MiniDemon from "../MiniDemon";
import Trap from "../TRAP";
import ModalCapture from "../Modal";
import useHeroMoviment from "../../hooks/useHeroMoviment";

function getCanvasMap() {
  const array = [];

  for (let y = 0; y < canvas.length; y++) {
    const canvasY = canvas[y];

    for (let x = 0; x < canvasY.length; x++) {
      const canvasYX = canvasY[x];

      const position = { x: x, y: y };
      const text = canvas[y][x] || canvasYX;
      const key = `${x}-${y}`;

      if (text === ECanvas.TRAP) {
        array.push(<Trap key={key} initialPosition={position} />)
      }

      if (text === ECanvas.MINI_DEMON) {
        array.push(<MiniDemon key={key} initialPosition={position} />)
      }

      if (text === ECanvas.DEMON) {
        array.push(<Demon key={key} initialPosition={position} />)
      }

      if (text === ECanvas.CHEST) {
        array.push(<Chest key={key} initialPosition={position} />)
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


  
  // const Board = () => {
  // const chestsContext = React.useContext(ChestsContext);

  // function renderOpenedDoor(){
  //   return true
  // }

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