import {useState} from 'react';
import {useHistory} from 'react-router-dom';

import { ToastContainer, toast, Zoom, Bounce } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import './styles.css';

import { logar } from '../../services/login';

const LoginPage = () => {
    const redirecionar = useHistory();

    const [formulario, setFormulario] = useState({
        email: '',
        senha: ''
    });

    const handleSubmit = async (e) => {
        e.preventDefault();

        const userLogado = await logar(formulario.email, formulario.senha);
        if (userLogado){
            redirecionar.push("/home");
        } else { 
            toast.error("Usuário ou senha incorretos", {
                position: toast.POSITION.TOP_CENTER
            });
        }
    }
    
    return (
        <section className="form-section">
            <ToastContainer draggable={false} transition={Bounce} autoClose={5000}/>
            <h1>Entre na sua conta</h1>
            <div className="form-wrapper">
                <form onSubmit={handleSubmit}>
                <div className="input-block">
                    <label htmlFor="login-email">Email</label>
                    <input type="email" name="email" id="login-email" 
                        onChange={ ({target: { name, value }}) => setFormulario({...formulario, [name]: value })}
                        required
                    />
                </div>
                <div className="input-block">
                    <label htmlFor="login-password">Senha</label>
                    <input type="password" name="senha" id="login-password"
                       onChange={({target: { name, value }}) => setFormulario({...formulario, [name]: value }) }
                       required
                    />
                </div>
                <button type="submit" className="btn-login">Login</button>
                </form>
            </div>
        </section>
	);
}

export default LoginPage;