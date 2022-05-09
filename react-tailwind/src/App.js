import './App.css';
import perfil from './assets/imagenes/perfil.jpg'
import git from './assets/imagenes/git.png'

function App() {
  return (
    <div className='sm:w-screen h-screen flex  justify-center items-center'>
      <div className='w-5/12 h-full flex flex-col justify-between items-center bg-red-300'>
        <div className='w-52 h-2/6 flex justify-center items-center'>
          <img src={perfil} className="rounded-3xl"></img>
        </div>
        <div className='w-full h-2/6 flex flex-col items-center'>
          <button className='buttons'>About Me</button>
          <button className='buttons'>Briefcase</button>
          <button className='buttons'>Projects</button>
        </div>
        <div className='w-full h-1/6 flex flex-col justify-center items-center border-b-2'>
          <h2 className='textos'>Repositorio del proyecto TailWind</h2>
          <a href="https://github.com/kevinA2208/TailwindReact.git" className='w-1/6 flex justify-center items-center mb-12'>
            <img src={git} alt="" className='rounded-full transition-all w-full object-contain hover:scale-110'/>
            </a>
        </div>
        <div className=' h-1/6 flex flex-col justify-center items-center'>
          <p className="textos">Kevin Andres Usama Trespalacios - Aprendiz</p>
        </div>
      </div>
    </div>

  );
}

export default App;
