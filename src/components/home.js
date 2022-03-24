import React,{createRef,useRef,useState,useEffect} from 'react';
import Img0 from '../assets/image/0.png';
import Img1 from '../assets/image/1.jpg';
import Img2 from '../assets/image/2.png';

const Home = () => {

    let imgref = useRef();
    let imagenes = [Img0,Img1,Img2];  
    let indexImagen = 0;

    const [contador, setcontador] = useState(0);

    useEffect(() => { 
        indexImagen = 0;

        cambiarimage();
        setInterval(cambiarimage,4000);
        
    }, [contador]);


    // const handleToggleMenu = (e) =>{
    //     if(refMenubtn.current.textContent === "Menu"){
    //         refMenubtn.current.textContent = "Cerrar"
    //         refMenu.current.style.display = 'block'
    //     }
    //     else{
    //         refMenubtn.current.textContent = "Menu"
    //         refMenu.current.style.display = 'none'
    //     }
    // }

    const cambiarimage=(e) => {

        imgref.current.src = imagenes[indexImagen]

        if(indexImagen< (imagenes.length -1)){
            indexImagen++;
        }else{
            indexImagen = 0;
        }    
    };

    return (
        <div>
           <img ref={imgref}></img>
        </div>
    );
}

export default Home;
