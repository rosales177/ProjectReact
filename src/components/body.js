import React,{useState,useEffect} from 'react';
import {helpHttp} from '../helper/helpHttp';
import Grilla from './grilla';
import Loader from './loader';
import Message from './message';
import '../assets/css/body.css';

const headers = {
    ContentType :'application/x-www-form-urlencoded',
    Authorization: 'bwk#$gkugaJABkXTCfjpCgW*fnO0$MTY2hLJl2dw&o^olCt*&A',
}

const Body = ({Npage}) => {
    
    const [page, setpage] = useState(1);
    // const [headers, setheaders] = useState(headers);
    const [Datos, setDatos] = useState(null);
    const [error, seterror] = useState(null);
    const [loading, setloading] = useState(false);

    let api = helpHttp();
    let url = "http://localhost:8081/MovilFabian/v1/product";

    useEffect(() => {
        setloading(true);
        api.get(url,headers).then((res) => {
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

    return (
        <>
            <article className='grid-1-2'>
                {loading && <Loader/>}
                {error && <Message msg={`Error ${error.status}: ${error.statusText}`} bgColor='#dc3545' />}
                {Datos && 
                    <Grilla data={Datos} />
                }
            </article>
        </>
    );
}

export default Body;
