import React from 'react';
import yo1 from'../img/yo-t.png'
import yo2 from'../img/yo-mano.png'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
const Conoceme = () => {
    return (
        <div className='conoseme-pag'>
             
             <div class="cuadros row g-0 text-center">
  <div data-aos="fade-left" class="primera col-sm-6 col-md-7">
    <div data-aos="fade-right" className='caja-menu1'>
      <div className="inf-title">
        <p>Soy  </p>
        <br />
        <ul>
          <li>Edward</li>
          <li>programador frontend</li>
        </ul>
      </div>
    <p className='info-p'>Me especializo en React Js para el 
    desarrollo de aplicaciones web front-end completamente 
    responsive y que se ajusten a tus necesidades como cliente.</p>
    </div>
    
    </div>
  <div  data-aos="fade-left" class="segunda col-6 col-md-3"><img src={yo1} alt="" /></div>
  
</div>
<div data-aos="fade-right" class="cuadros row g-0 text-center">
  <div class="segunda col-6 col-md-3"><img src={yo2} alt="" /></div>
  <div class="primera2 col-sm-6 col-md-7">
  <h2>Soy Edward Yllanes Quirari</h2>
      <p>Desarrollador web especializado en React.js. 
        Soy un apasionado de la tecnología con una increíble capacidad del auto 
        aprendizaje soy del departameto Lima, provincia Lima;
         me encantaría ser parte de tu equipo, si tienes alguna duda o quieres saber más de mi,
          puedes contactarme a través de mis redes sociales o por un mensaje a traves del formulario de contacto.</p>
      <div className="caja-h3">
        <h3><b>Nombre: </b>Edward Yllanes Quirari</h3>
      
      <h3><b>telefono: </b>916628409</h3>
      <h3><b>Correo: </b>edwardyq67@gmail.com</h3>
      
      <a href="https://drive.google.com/file/d/1qHv_gMv2nZ1zYwbS_rYYe8Yc5wqmDDPa/view?usp=sharing" target='_blank'><i className="fa-solid fa-folder-open"> cv</i></a>
      
      </div>
      
  </div>
  
</div>
        </div>
    );
};

export default Conoceme;