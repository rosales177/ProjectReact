import React from 'react';
import '../assets/css/header.css'
import 'boxicons';
import tellnova  from '../assets/image/tellnovalogo.png';
import {
    BrowserRouter as Router,
    Link
  } from "react-router-dom";

const Header = () => {

    const GoToWhatsapp = () =>{
        window.location.href = 'https://api.whatsapp.com/send/?phone=51948974052&text&app_absent=0';
    }

    return (
        <>
        <div className='contact' >
            <div>
            <box-icon name='phone-call' type='solid' color='#7e7d7d' ></box-icon>
            <p>5565-565</p>
            </div>
            <div>
            <box-icon name='envelope' type='solid' color='#7e7d7d' ></box-icon>
            <p>example@email.com</p>
            </div>
            <div onClick={GoToWhatsapp} >
            <box-icon name='whatsapp' type='logo' color='#7e7d7d' ></box-icon>
            <p>986598654</p>
            </div>
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
                        <a href='/login' >Ingresar</a>
                        <a href='/minicart' >
                            <box-icon name='cart'></box-icon>
                            <div>You Cart</div>
                        </a>
                    </nav>
                </div>
            </div>
        </div>
        <div className='conteiner-Links'>
            <div className='menu' >
                <box-icon name='menu'></box-icon>
                <div>Categorias</div>
            </div>
            <a>
                <box-icon name='category'></box-icon>
                <div>Ruta A</div>
            </a>
            <a>
                <box-icon name='category'></box-icon>
                <div>Ruta B</div>
            </a>
            <a>
                <box-icon name='category'></box-icon>
                <div>Ruta C</div>
            </a>
            <Router>
                <Link to='/product'>ProductHome</Link>
            </Router>
            
        </div>
        </>
    );
}

export default Header;
