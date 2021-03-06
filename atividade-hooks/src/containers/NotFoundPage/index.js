import { Link } from 'react-router-dom';

import Imagem from '../../assets/404.svg';
import './styles.css';

import { isLogged } from '../../services/login';

function NotFoundPage() {
  return (
      <div className="wrapper">
          <h2>Oops! Página não encontrada</h2>
          <div>
            <img src={Imagem} alt="not found"/>
          </div>
          <h4>A página que está procurando, não existe!</h4>
          {isLogged() ? <Link to="/home" className="main-btn">Voltar</Link> : <Link to="/" className="main-btn">Voltar</Link>}
      </div>
  );
}

export default NotFoundPage;