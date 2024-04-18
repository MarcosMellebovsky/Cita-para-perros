import './App.css';
import Titulo from './componentes/titulo/Titulo';
import Subtitulo from './componentes/subtitulo/Subtitulo';
import Formulario from './componentes/formulario/Formulario';
import Turno from './componentes/turno-final/turno';

function App() {
  return (
    
      <>
        <div className='div-titulo'>
          <Titulo></Titulo>
        </div>
        

        <div className='padre container'>
        <div className='primeraColumna'>
          <Subtitulo className="subtitulo" texto={"CREAR MI CITA"}></Subtitulo>
          <Formulario className="formulario"></Formulario>
        </div>

        <div className='segundaColumna'> 
          <Subtitulo className="subtitulo" texto={"ADMINISTRA TUS CITAS"}></Subtitulo>
          <Turno></Turno>
        </div>
        </div>
       
        
      </>
     
    
  );
}

export default App;
