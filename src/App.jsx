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
          <a href="">Conoceme</a>
          <a href="">Conocimientos</a>
          <a href="">Contactame</a>
        </div>
        <div className="btn-menu">
        <label htmlFor="btn-menu"><i class="fa-solid fa-bars"></i></label>
        </div>
      </div>
      
      <input type="checkbox" id='btn-menu' />

      <div className="coneteinr-menu">
        <div className="cont-menu">
        <nav>
        <a href="">Conoceme</a>
          <a href="">Conocimientos</a>
          <a href="">Contactame</a>
        </nav>
        <label htmlFor="btn-menu"><i class="fa-solid fa-x"></i></label>
      </div>
      </div>
      

        <section ><Conoceme/></section>  
        <h2 data-aos="fade-up" className='app-conocimientos'>Conocimientos</h2>    
        <section className="pag2 col-sm-12"><Conocimiento/></section>
        <h2 data-aos="fade-up" className='app-conocimientos'>Proyectos</h2>
        <section className="pag3 col-sm-12" ><Proyectos/></section>
        <section ><Contactame/></section>
      
    </div>
  )
}

export default App
