import {useState} from 'react';
import {useHistory} from 'react-router-dom';
import { Alert } from 'react-bootstrap';

import './styles.css';

import { logar } from '../../services/login';

const estado_inicial = {
    errors: [],
    carregando : false
};

const LoginPage = () => {
    const redirecionar = useHistory();

    const [state, setState] = useState(estado_inicial);
    const [formulario, setFormulario]   = useState({
        email: '',
        senha: ''
    });

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            await logar(formulario.email, formulario.senha);
            redirecionar.push("/home");
        } catch (error) {
            setState({...state, errors: [error]});
        }
    }

    return (
        <section className="form-section">
            { 
                state.errors.map((index, error) =>
                    <Alert key={ index } variant={'error'}>
                        { error.mensagem }
                    </Alert>
                )
            }
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