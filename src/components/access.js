import React,{useState,useEffect} from 'react';
import { useParams } from "react-router";
import Login from './login';
import Register from './register';
const initialForm = {
    name: "",
    email: "",
    pass: "",
    repass:""
}

const Access = () => {
    let {estado} = useParams();
    const [form, setform] = useState(initialForm);

    const handleChange = (e) => {
        setform({
            ...form,
            [e.target.name]: e.target.value
        });
    }
    const handleReset = (e) => {
        setform(initialForm);
        // setdataToEdit(null);
    }

    return (
        <div className='contenedor_access'>
            { estado === 'login'? 
                (<Login handleChange={handleChange} form={form} />) 
            : 
                (<Register handleChange={handleChange} form={form} />) 
            }
        </div>
    );
}

export default Access;
