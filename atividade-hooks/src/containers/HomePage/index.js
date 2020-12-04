import { useState, useEffect } from 'react';
import { useHistory, Link } from 'react-router-dom';
import { FiPower, FiArrowRight } from 'react-icons/fi';
import { getVerduras } from '../../services/verduras';

import './styles.css';

const Home = () => {
  const history = useHistory();

  const [verduras, setVerduras] = useState([]);

  useEffect(async () => {
    const verdurasArray = await getVerduras();
    console.log('olá', verdurasArray);
    if (verdurasArray) setVerduras(verdurasArray);
  }, [])

  const handleLogOut = () => {
    localStorage.removeItem("token");
    history.push("/");
  }

  return (
    <div className="container">
      <header>
        <span>Bem vindo, Usuário</span>

        <button type="button" onClick={handleLogOut}>
            Sair <FiPower size={18} color="#FFF"/>
        </button>
      </header>
      <div className="content">
        <h1>Lista de frutas disponíveis</h1>
        <ul>
          {verduras.map(verdura => (
            <li key={verdura.id}>
              <strong>Produto:</strong>
              <p>{verdura.nome}</p>

              <strong>VALOR:</strong>
              <p>{Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL'}).format(Number(verdura.preco))}</p>

              <Link to="/home/item" className="btnLink">Ver <FiArrowRight className="arrowRight" size={24} color="#2F2E41"/></Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Home;