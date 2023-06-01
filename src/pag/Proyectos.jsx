import React from 'react';
import ing1 from '../img/trabajo1.jpg'
import ing2 from '../img/trabajo2.jpg'
import ing3 from '../img/trabajo3.jpg'
import ing4 from '../img/trabajo4.jpg'
import ing5 from '../img/trabajo5.jpg'
const Proyectos = () => {
    /*<div className="card-proyeectos">
                    <a href="https://aesthetic-speculoos-998afc.netlify.app" target='_blank'>
                    <figure>
                        <img src={e}/>
                    </figure>
                    </a>
                    <div className="contenido">
                        <h3>e-comer</h3>
                        <p>Una tienda, donde podras ver los productos y los favoritos de los usuarios ya registrado, este Proyecto ya tienen usuarios.</p>
                            <a href="https://aesthetic-speculoos-998afc.netlify.app" target='_blank'><i className="fa-regular fa-eye"></i></a>
                        <a href="https://github.com/edwardyq67/trabajo-e" target='_blank'><i className="fa-brands fa-github"></i></a>
                   
                    </div>
                    
                </div> */
    return (
        <div >
            <div  data-aos="zoom-in" className="container-proyectos">
            <div  className="card-proyeectos">
                    
                    <a href="https://ornate-longma-e63e02.netlify.app/">
                    <figure><div className="capa-pryectos">
                        <img src={ing4}/>
                    </div>
                        
                    </figure>
                    </a>
                    <div className="contenido">
                        <h3>Clima</h3>
                        <p>Sirve para saber el clima de su ubicacion
                        </p>
                        <a href="https://ornate-longma-e63e02.netlify.app/" target='_blank'><i className="fa-regular fa-eye"></i></a>
                        <a href="https://github.com/edwardyq67/clima31.git" target='_blank'><i className="fa-brands fa-github"></i></a>
                    </div>
                </div>
                <div  className="card-proyeectos">
                    
                    <a href="https://luminous-madeleine-13484b.netlify.app">
                    <figure><div className="capa-pryectos">
                        <img src={ing1}/>
                    </div>
                        
                    </figure>
                    </a>
                    <div className="contenido">
                        <h3>Formulario</h3>
                        <p>Es un formulario donde podrás....agregar, eliminar, editar y actualizar. Este proyecto no se usa Api, sino un json
                        </p>
                        <a href="https://luminous-madeleine-13484b.netlify.app" target='_blank'><i className="fa-regular fa-eye"></i></a>
                        <a href="https://github.com/edwardyq67/trabajoBformuralio" target='_blank'><i className="fa-brands fa-github"></i></a>
                    </div>
                </div>
                <div className="card-proyeectos">
                    <a href="https://aquamarine-pasca-43c6f1.netlify.app" target='_blank'>
                    <figure>
                        <img src={ing2}/>
                    </figure>
                    </a>
                    <div className="contenido">
                        <h3>Busqueda</h3>
                        <p>Sirve para la búsqueda de los personajes de la serie de Rick and morty, podrás saber la información de ubicación, si esta vivo o no y mucho más</p>
                            <a href="https://aquamarine-pasca-43c6f1.netlify.app" target='_blank'><i className="fa-regular fa-eye"></i></a>
                        <a href="https://github.com/edwardyq67/rick-repaso.git" target='_blank'><i className="fa-brands fa-github"></i></a>
                   
                    </div>
                </div>
                  <div className="card-proyeectos">
                    <a href="https://ornate-daffodil-d31ad9.netlify.app" target='_blank'>
                    <figure>
                        <img src={ing3}/>
                    </figure>
                    </a>
                    <div className="contenido">
                        <h3>Usuario</h3>
                        <p>Crea tu usuario en la Poke api, donde consiguieras información de los pokemones, como: su habilidades, ataques, poder y mucho mas</p>
                            <a href="https://ornate-daffodil-d31ad9.netlify.app" target='_blank'><i className="fa-regular fa-eye"></i></a>
                        <a href="https://github.com/edwardyq67/trabajo5" target='_blank'><i className="fa-brands fa-github"></i></a>
                   
                    </div>
                    
                </div>
                <div className="card-proyeectos">
                    <a href="https://negova-ferreteria-y-accesorios.netlify.app" target='_blank'>
                    <figure>
                        <img src={ing5}/>
                    </figure>
                    </a>
                    <div className="contenido">
                        <h3>Usuario</h3>
                        <p>Es para una tienda pequeña, venta de tuberias y donde ubicarlo para comprar</p>
                            <a href="https://negova-ferreteria-y-accesorios.netlify.app" target='_blank'><i className="fa-regular fa-eye"></i></a>
                        <a href="https://github.com/edwardyq67/trabajoMaria.git" target='_blank'><i className="fa-brands fa-github"></i></a>
                   
                    </div>
                    
                </div>
                
                
            </div>
        </div>
    );
};

export default Proyectos;