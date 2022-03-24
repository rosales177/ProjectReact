import React from 'react';

const Register = ({handleChange,form}) => {
    return (
        <div className='register'>
            <h2>Regoster</h2>
            <form>
                <label htmlFor='name' >Nombres</label>
                <input type="text" name='name' onChange={handleChange} value={form.name} />
                <label htmlFor='email' >Correo Electronico</label>
                <input type="text" name='email' onChange={handleChange} value={form.email} />
                <label htmlFor='pass' >Contraseña</label>
                <input type="password" name='pass' onChange={handleChange} value={form.pass} />
                <label htmlFor='rep_pass' >Repetir Contraseña</label>
                <input type="password" name='rep_pass' onChange={handleChange} value={form.repass} />
                <input type="submit" value="Ingresar"/>
            </form>
        </div>
    );
}

export default Register;
