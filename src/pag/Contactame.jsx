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
            <div className="whatsapp"><i className="fa-brands fa-whatsapp"></i></div>
            <div className="gmail"><i className="fa-solid fa-envelope"></i></div>
            <div className="linke"><i className="fa-brands fa-linkedin-in"></i></div>
            <label className='x-cono' htmlFor="btn-conocimiento"><i class="fa-solid fa-x"></i></label>
        </div>
        </div>
         </div>
    );
};

export default Contactame;
