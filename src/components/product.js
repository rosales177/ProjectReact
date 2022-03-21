import React from 'react';
import '../assets/css/product.css';
const Product = ({el}) => {
    return (
        <div className='contenedor-producto' >
            <img src={el.Imagen_web} />
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
