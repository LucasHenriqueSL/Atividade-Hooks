import {useState, useHistory} from 'react';
import {Link} from 'react-router-dom';

import { Row, Col, Form, FormGroup } from 'react-bootstrap';

const LoginPage = () => {
    const[email, setEmail] = useState('');
    const[senha, setSenha] = useState('');
    const history = useHistory();

    const handleSubmit = (e) => {
         e.preventDefault();
         if(!email || !senha) return alert('Preencha todos os campos');
         history.push("/home")

    }

    return (
        <Form className="form-container" onSubmit={handleSubmit}>
            <div className="form-group">
                <input id="email" name="email "type="email" className="form-control" placeholder="E-mail"value={email} onChange={({ target: { value }}) => setEmail(value)}/>
            </div>
            
            <div className="form-group">
                <input id="password" name="password "type="password" className="form-control" placeholder="Senha" value={pass} onChange={({ target: { value }}) => setPass(value)} />
            </div>
            <Link to="/" className="main-btn">Logar</Link>
        </Form>
	);
}

export default LoginPage;