import React, { useContext,useState } from 'react';
import Swal from 'sweetalert2';
import { Navigate, useNavigate } from 'react-router-dom';
import clienteAxios from '../../config/axios';

//Context
import { CRMContext } from '../../context/CRMContext';

const Login = () => {
    // const history = useNavigate();
    
    // // Auth y token
    // const [auth,guardarAuth] = useContext(CRMContext);
    const [usuario, setUsuario] = useState('');
    const [password, setPassword] = useState('');
    const [recordar, setRecordar] = useState(false);

    const handleLogin = (e) => {
        e.preventDefault();
        // Aquí puedes manejar la lógica de inicio de sesión

        console.log(usuario, password, recordar);
    };

    return (
        <section>
            <div className="contenedor">
                <div className="imagenCimarc"></div>
                <div className="formulario">
                    <form onSubmit={handleLogin}>
                        <div>
                            <img src="assets/images/Cimarc.png" alt="" style={{width: '60%'}} />
                        </div>
                        <br />
                        <h2>Iniciar Sesión</h2>
                        <div className="input-contenedor">
                            <i className="fa-solid fa-user"></i>
                            <input type="text" value={usuario} onChange={(e) => setUsuario(e.target.value)} required />
                            <label>Usuario</label>
                        </div>
                        <div className="input-contenedor">
                            <i className="fa-solid fa-lock"></i>
                            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required style={{width: '260px', marginLeft: '-40px'}} />
                            <label>Contraseña</label>
                        </div>
                        <div className="recordar">
                            <label>
                                <input type="checkbox" checked={recordar} onChange={() => setRecordar(!recordar)} />Recordar la Contraseña
                            </label>
                            <a href="contraseña.html">Olvidaste tu contraseña?</a>
                        </div>
                        <br />
                        <div className="button">
                            <a type="submit" className="btn">Acceder</a>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Login;
