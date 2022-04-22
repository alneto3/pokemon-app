import Board from '../Board';
import './index.css';

interface IProps {

}

const ModalCapture = (props: IProps) => {
  function handleSubmit() {
    window.location.reload();
    console.log('Clicado');
    return (<Board />)
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