import useEventListener from '@use-it/event-listener';
import React from "react";
import ModalCapture from '../../components/Modal';
import { CanvasContext } from '../../contexts/canvas';
import { ModalContext } from '../../contexts/chests';
import { EDirection, EWalker } from '../../settings/constants';


function useHeroMoviment(initialPosition) {
  const canvasContext = React.useContext(CanvasContext);
  const pokesContext = React.useContext(ModalContext);

  const [positionState, updatePositionState] = React.useState(initialPosition);
  const [direction, updateDirectionState] = React.useState(EDirection.RIGHT);


  useEventListener('keydown', (event: { key: any; }) => {
    const direction = event.key as EDirection;

    if (direction.indexOf('Arrow') === -1) {
      return;
    }

    const moviment = canvasContext.updateCanvas(direction, positionState, EWalker.HERO);

    if (moviment.nextMove.valid) {
      updatePositionState(moviment.nextPosition);
      updateDirectionState(direction);
    }

    if (moviment.nextMove.captured) {
      pokesContext.updateOpenedPokes(moviment.nextPosition);
      setTimeout(() => {
        alert('Pokemon Detectado!!')
        
      },);
    }
    
    // if (pokesContext.totalPoke === pokesContext.openedPokes.total && moviment.nextMove.door) {
    //   console.log('Venceu!')
    // }
  });

  return {
    position: positionState,
    direction: direction,
  }
};

export default useHeroMoviment;