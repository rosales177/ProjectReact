import React from 'react';

const Login = ({handleChange,form}) => {
    return (
        <div className='login'>
            <h2>Login</h2>
            <form>
                <label htmlFor='email' >Correo Electronico</label>
                <input type="text" name='email' onChange={handleChange} value={form.email} />
                <label htmlFor='pass' >Contraseña</label>
                <input type="password" name='pass' onChange={handleChange} value={form.pass} />
                <input type="submit" value="Ingresar"/>
            </form>
        </div>
    );
}

export default Login;
