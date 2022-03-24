import React from 'react';
import '../assets/css/product.css';

const Product = ({el}) => {
    const goToDetails = () =>
    {
        window.location = `http://localhost:3000/product/${el.Id_Product}`
    }

    return (
        <div className='contenedor-producto' onClick={goToDetails} >
            <img src={el.Imagenes_web.Imagen_web1} />
            {/* <p>{el.Id_Product}</p> */}
            {/* <p>{el.Cod_unid_venta}</p> */}
            {/* <p>{el.Des_categoria}</p> */}
            {/* <p>{el.Des_linea_producto}</p> */}
            <p>{el.Des_marca}</p>
            {/* <p>{el.Cod_moneda_venta}</p> */}
            <p>{el.Des_producto}</p>            
        </div>
    );
}

export default Product;
