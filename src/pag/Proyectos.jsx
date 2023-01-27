import React from 'react';
import ing1 from '../img/trabajo1.jpg'
import ing2 from '../img/trabajo2.jpg'
import ing3 from '../img/trabajo3.jpg'
import e from '../img/e-comer.jpg'

const Proyectos = () => {
    
    return (
        <div >
            <div className="container-proyectos">
                <div className="card-proyeectos">
                    
                    <a href="https://luminous-madeleine-13484b.netlify.app">
                    <figure><div className="capa-pryectos">
                        <img src={ing1}/>
                    </div>
                        
                    </figure>
                    </a>
                    <div className="contenido">
                        <h3>Formulario</h3>
                        <p>Es un formulario donde podras....agregar, eliminar, editar y actualizar.
                            Este proecto no se usa Api, sino un json.
                        </p>
                        <a href="https://luminous-madeleine-13484b.netlify.app" target='_blank'><i className="fa-regular fa-eye"></i></a>
                        <a href="https://github.com/edwardyq67/trabajoBformuralio" target='_blank'><i className="fa-brands fa-github"></i></a>
                    </div>
                </div>
                <div className="card-proyeectos">
                    <a href="https://preeminent-kleicha-314e2c.netlify.app" target='_blank'>
                    <figure>
                        <img src={ing2}/>
                    </figure>
                    </a>
                    <div className="contenido">
                        <h3>Busqueda</h3>
                        <p>Sirve para la busqueda de los personajes de la serie de Rick and morty, podras saver la informacion de uvicacion, si esta vivo o no y mucho mas</p>
                            <a href="https://preeminent-kleicha-314e2c.netlify.app" target='_blank'><i className="fa-regular fa-eye"></i></a>
                        <a href="https://github.com/edwardyq67/trabajo3" target='_blank'><i className="fa-brands fa-github"></i></a>
                   
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
                        <p>Crea tu usuario en la Poke api, donde consigueras informacion de los pokemones, como: su avilidades, ataques, poder y mucho mas</p>
                            <a href="https://ornate-daffodil-d31ad9.netlify.app" target='_blank'><i className="fa-regular fa-eye"></i></a>
                        <a href="https://github.com/edwardyq67/trabajo5" target='_blank'><i className="fa-brands fa-github"></i></a>
                   
                    </div>
                    
                </div>
                <div className="card-proyeectos">
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
                    
                </div>
            </div>
        </div>
    );
};

export default Proyectos;