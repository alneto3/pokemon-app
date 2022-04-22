import React from "react";
import { EDirection, EWalker } from "../../settings/constants";

export function handleNextPosition(direction, position) {
  switch (direction) {

    case EDirection.LEFT:
      return { x: position.x - 1, y: position.y };

    case EDirection.RIGHT:
      return { x: position.x + 1, y: position.y };

    case EDirection.DOWN:
      return { x: position.x, y: position.y + 1 };

    case EDirection.UP:
      return { x: position.x, y: position.y - 1 };

  }
};

export enum ECanvas {
  FLOOR = 0,
  WALL = 1,
  ENEMY = 4,
  HERO = 7,
};

const FL = ECanvas.FLOOR;
const WL = ECanvas.WALL;
const MD = ECanvas.ENEMY;
const HR = ECanvas.HERO;

export const canvas = [
  [WL, WL, WL, WL, WL, WL, WL, WL, WL, WL, WL, WL, WL, WL, WL, WL, WL, WL, WL, WL, WL, WL, WL, WL, WL, WL, WL],
  [WL, FL, FL, FL, FL, FL, FL, FL, FL, WL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, WL],
  [WL, FL, FL, FL, FL, FL, FL, FL, FL, WL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, MD, FL, FL, FL, FL, WL],
  [WL, FL, MD, FL, WL, FL, FL, FL, FL, WL, FL, WL, FL, FL, FL, FL, WL, WL, FL, WL, FL, FL, FL, FL, FL, WL, WL],
  [WL, FL, FL, WL, WL, WL, WL, FL, FL, WL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, WL, WL],
  [WL, FL, FL, FL, WL, FL, FL, FL, FL, WL, WL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, WL],
  [WL, FL, FL, FL, FL, MD, FL, FL, FL, FL, FL, WL, WL, WL, WL, FL, WL, WL, WL, WL, WL, WL, WL, WL, WL, WL, WL],
  [WL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, WL],
  [WL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, MD, FL, FL, FL, FL, FL, FL, FL, FL, MD, FL, WL],
  [WL, FL, FL, FL, FL, FL, FL, FL, WL, WL, WL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, WL],
  [WL, FL, FL, FL, FL, FL, FL, FL, WL, WL, WL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, WL],
  [WL, FL, FL, FL, FL, FL, FL, WL, WL, WL, WL, WL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, WL, WL, FL, FL, WL],
  [WL, FL, FL, FL, WL, FL, FL, WL, WL, WL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, WL, WL, FL, FL, WL],
  [WL, FL, MD, WL, WL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, WL],
  [WL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, HR, FL, FL, FL, FL, FL, FL, WL],
  [WL, WL, WL, WL, WL, WL, WL, WL, WL, WL, WL, WL, WL, WL, WL, WL, WL, WL, WL, WL, WL, WL, WL, WL, WL, WL, WL],
];

export function checkValidMoviment(nextPosition, walker) {
  const canvasValue = canvas[nextPosition.y][nextPosition.x];

  const result = walker === EWalker.HERO ? getHeroValidMoves(canvasValue) : getEnemyValidMoves(canvasValue);
  return result;
}


function getHeroValidMoves(canvasValue) {
  return {
    valid: canvasValue === ECanvas.FLOOR || canvasValue === ECanvas.ENEMY,
    captured: canvasValue === ECanvas.ENEMY
  }

}

function getEnemyValidMoves(canvasValue) {
  return {
    valid: canvasValue === ECanvas.FLOOR || canvasValue === ECanvas.HERO,
    captureded: false,
  }
}