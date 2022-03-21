import React from 'react';
import '../assets/css/header.css'
import 'boxicons';
import tellnova  from '../assets/image/tellnovalogo.png';

const Header = () => {
    return (
        <>
        <div className='contact' >
            <box-icon name='phone-call' type='solid' color='#7e7d7d' ></box-icon>
            <p>5565-565</p>
            <box-icon name='envelope' type='solid' color='#7e7d7d' ></box-icon>
            <p>example@email.com</p>
            <box-icon name='whatsapp' type='logo' color='#7e7d7d' ></box-icon>
            <p>986598654</p>
        </div>
        <div className='conteiner-header'>
            <div className='container-nav'>
                <img src={tellnova} />
                <div className='buscador'>
                    <input type='text' id='buscar' name='buscar' placeholder='Buscar' />
                    <button id='btnBuscar'><box-icon name='search-alt-2' color='#ffffff' ></box-icon></button>
                </div>
                <div className='carrito' >
                    <nav>
                        <a href='/minicart' >Ruta1</a>
                        <a>Ruta2</a>
                    </nav>
                </div>
            </div>
        </div>
        </>
    );
}

export default Header;
