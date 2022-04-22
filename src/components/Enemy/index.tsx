import React from "react";
import { ModalContext } from "../../contexts/chests";
import useEnemyMoviment from "../../hooks/useEnemyMoviment";
import { EDirection, HEAD_OFFSET, TILE_SIZE, TILE_SIZELEFT, TILE_SIZETOP } from "../../settings/constants";

import './index.css';

// const moviment = {
//   position: { x: 5, y: 5},
//   direction: EDirection.RIGHT,
// }

interface IProps{
  initialPosition: {x: number; y: number}
}

const Poke = (props: IProps) => {
  const moviment = useEnemyMoviment (props.initialPosition)
  const pokesContext = React.useContext(ModalContext);

  const shouldAnimate = pokesContext.openedPokes.positions.find((position) => {
    const match = props.initialPosition.y === position.y && props.initialPosition.x === position.x
    return match;
  })


    return (
        <div
        style={{
            position: 'absolute',  
            top: TILE_SIZETOP * moviment.position.y - HEAD_OFFSET,
            left: TILE_SIZELEFT * moviment.position.x,
            width: TILE_SIZE,
            height: TILE_SIZE + HEAD_OFFSET,
            backgroundImage: "" ,
            backgroundRepeat: "no-repeat",
            backgroundPosition: `0px -${TILE_SIZE - HEAD_OFFSET}px`,
            animation: shouldAnimate && 'mini-demon-animation 1s steps(4) infinite',
            transform: `scaleX(${moviment.direction === EDirection.RIGHT ? 1 : -1})`,
            
         }}
        />
    )
};

export default Poke;