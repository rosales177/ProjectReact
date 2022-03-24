import React,{useState,useEffect} from 'react';
import Loader from './loader';
import Message from './message';
import {helpHttp} from '../helper/helpHttp';
import '../assets/css/productDetails.css';
import { useParams } from "react-router";

const Productdetails = () => {
    let {id} = useParams();
    const [image, setimage] = useState(null);
    const [Datos, setDatos] = useState(null);
    const [error, seterror] = useState(null);
    const [loading, setloading] = useState(false);

    let api = helpHttp();
    let url = `http://localhost:8081/ApiTellnovav1/public/products/${id}`;

    useEffect(() => {
        setloading(true);
        api.get(url).then((res) => {
            if(!res.err){
                seterror(null);
                setDatos(res);
            }else{
                setDatos(null);
                seterror(res);
            }
            setloading(false);
        });
    },[url]);

    const SelectImage = (e) =>
    {
        setimage(e);
    }

    return (
        <div>
            {loading && <Loader/>}
            {error && <Message msg={`Error ${error.status}: ${error.statusText}`} bgColor='#dc3545' />}
            {Datos && 
                <div className='contenedor-product-details' >
                    {Datos.map((el) => 
                        <div key={el.Id_Product} className='content' >
                            <div className='product-details' >
                                <p>{el.Des_marca}</p>
                                <p>{el.Des_producto}</p>
                            </div>
                            <div className='contenedor-imagenes'>
                                {image === null ?
                                    (<img src={el.Imagenes_web.Imagen_web1} />)
                                :
                                    (<img src={image} />)
                                }
                                <div className='minimap'>
                                    <img src={el.Imagenes_web.Imagen_web1} onClick={() => SelectImage(el.Imagenes_web.Imagen_web1)} />
                                    <img src={el.Imagenes_web.Imagen_web2} onClick={() => SelectImage(el.Imagenes_web.Imagen_web2)}/>
                                    <img src={el.Imagenes_web.Imagen_web3} onClick={() => SelectImage(el.Imagenes_web.Imagen_web3)}/>
                                    <img src={el.Imagenes_web.Imagen_web4} onClick={() => SelectImage(el.Imagenes_web.Imagen_web4)}/>
                                    <img src={el.Imagenes_web.Imagen_web5} onClick={() => SelectImage(el.Imagenes_web.Imagen_web5)}/>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            }
            <hr/>
        </div>
    );
}

export default Productdetails;
