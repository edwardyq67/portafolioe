import React from 'react';

const Contactame = () => {
    return (
        <div >
<div className="btn-conocimiento">
        <label htmlFor="btn-conocimiento"><i class="fa-solid fa-upload"></i></label>
        </div>
        <input type="checkbox" id='btn-conocimiento'/>
       
        
        <div className="contactame">
        <div className='contactemeI'>
            <a href="https://wa.me/52916628409">
            <div className="whatsapp"><i className="fa-brands fa-whatsapp"></i></div></a>
            <a href="mailto:edwardyq67@gmail.com">
                <div className="gmail"><i className="fa-solid fa-envelope"></i></div>
            </a>
            <a href="https://www.linkedin.com/in/edward-yllanes-b84bb81a3/">
              <div className="linke"><i className="fa-brands fa-linkedin-in"></i></div>  
            </a>
            
            <label className='x-cono' htmlFor="btn-conocimiento"><i class="fa-solid fa-x"></i></label>
        </div>
        </div>
         </div>
    );
};

export default Contactame;
