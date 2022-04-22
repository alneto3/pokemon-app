import useEventListener from '@use-it/event-listener';
import React, { Component } from 'react';
import { transform } from 'typescript';
import useHeroMoviment from '../../hooks/useHeroMoviment';

import { EDirection, TILE_SIZE } from "../../settings/constants";
import Board from '../Board';
import Game from '../Game';

import  Button from 'react';

import './index.css';



interface IProps {

}

// class App extends Component {

//   constructor(props){
//     super(props);
//     this.state = {isVisible: false};
//   }

const ModalCapture = (props: IProps) => {
    function handleSubmit() {
      window.location.reload();
      console.log('Clicado');
      return (<Board/>)
    }

    

    return (
        <div className="ModalCapture">
            <button onClick={handleSubmit} 
                style={{
                  position: 'absolute',
                  right: '504px',
                  top: '105px',
                  height: '30px',
                  width: '30px',
                  color: '#0a0a0a',
                  background: '#F7F9FC',
                  borderRadius: '1000px',
                  zIndex: 2,
                }}>X</button>
            <div style={{
                position: "absolute",
                bottom: "151px",
                left: "500px",
                height: "600px",
                width: "274px",
                backgroundImage: "url(./assets/modal_capture.png)",
                  animation: 'button-position',
                zIndex: 1
            }}>
            </div>
        </div>
    )
}

export default ModalCapture