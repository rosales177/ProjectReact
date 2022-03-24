import React,{useState,useEffect} from 'react';
import Product from './product';
import '../assets/css/grilla.css';

const Grilla = ({data}) => {

    const [selectedPage, setselectedPage] = useState(1);

    let count = data.length;
    let max = 50;
    let numPages = count/max;
    let pages = []
   
    const SelectPage = (e) => {
        setselectedPage(e);
        console.log(selectedPage);
    };

    for (let i = 0; i < numPages; i++) {
        pages.push(i+1);
    }

    return (
        <div className='contenedor-lista' >
            <aside className='contenedor-filtro'>
                <h2 onClick={SelectPage} >HOLA</h2>
            </aside>
            <div className='contenedor-grilla'>
                {data.length === 0 ?
                    (<h2>No se encontraron datos</h2>)
                : 
                    (<>{data.map((el) => 
                        
                        <Product
                            key={el.Id_Product}
                            el={el}
                        />
                             
                    )}
                        <div className='pagination'>
                            <div>
                                <a href="#">&laquo;</a>
                                {pages.map((el,index) => 
                                    <a key={index} onClick={() => SelectPage()}>{el}</a> //VERIFICAR
                                )}
                                <a href="#">&raquo;</a>
                            </div>
                        </div>
                    </> 
                    )
                }
            </div>
        </div>
    );
}

export default Grilla;
