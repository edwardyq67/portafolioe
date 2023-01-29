import './App.css'
import { Conoceme, Conocimiento, Contactame, Proyectos } from './pag'
import './css/Conoceme.css'
import './css/Conocimiento.css'
import './css/Proyectos.css'
import './css/Contactame.css'
import 'bootstrap'
import'./css/Menu.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { useState } from 'react'
import imgLogo from './logo/CapturaTDO-removebg-preview.png';
import letraLogo from './logo/CapturaEDWARD-removebg-preview.png'
function App() {
 

  return (
    <div  className='Ap'>
      <div className="container">
        <div className="logo">
          <div className="Lgoimg"><img src={imgLogo} alt="" /></div>
        </div>
        <div className="menu">
          <a href="#conoceme">Conoceme</a>
          <a href="#conocimiento">Conocimientos</a>
          <a href="#proyecto">Proyectos</a>
        </div>
        <div className="btn-menu">
        <label htmlFor="btn-menu"><i className="fa-solid fa-bars"></i></label>
        </div>
      </div>
      
      <input type="checkbox" id='btn-menu' />

      <div className="coneteinr-menu">
        <div className="cont-menu">
        <nav>
        <a href="#conoceme">Conoceme</a>
          <a href="#conocimiento">Conocimientos</a>
          <a href="#proyecto">Proyectos</a>
        </nav>
        <label htmlFor="btn-menu"><i className="fa-solid fa-x"></i></label>
      </div>
      </div>
      

        <section id='conoceme'><Conoceme/></section>  
        <h2 data-aos="fade-up" className='app-conocimientos'>Conocimientos</h2>    
        <section id='conocimiento' className="pag2 "><Conocimiento/></section>
        <h2   data-aos="fade-up" className='app-conocimientos'>Proyectos</h2>
        <section id='proyecto' className="pag3 " ><Proyectos/></section>
        <section ><Contactame/></section>
      
    </div>
  )
}

export default App
