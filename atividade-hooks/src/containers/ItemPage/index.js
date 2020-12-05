import { useState, useEffect } from 'react';
import { Link, useRouteMatch } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi'; 

import { ToastContainer, toast, Zoom, Bounce } from 'react-toastify';

import { getVerdura } from '../../services/verduras';

import './styles.css';

function ItemPage() {
    const rota = useRouteMatch();
    const [verdura, setVerdura] = useState({});

    useEffect(async () => {
        
        const verdura = await getVerdura(rota.params.id);
        setVerdura(verdura);
    }, [])

    const handleClick = () => {
        toast.success(`${verdura.nome} foi comprado(a)!`, {
            position: toast.POSITION.TOP_CENTER
        });
    } 
    return (
        <div className="wrapper">
            <ToastContainer draggable={false} transition={Bounce} autoClose={3000}/>
            <header className="btnVoltarArea">
                <Link to="/home" className="btnVoltar">
                    <FiArrowLeft size={48} color="#fff"/>
                </Link>
            </header>
            <div className="content">
                <div className="cardzin">
                    <h1>Produto:</h1>
                    <p>{verdura.nome}</p>

                    <h1>Descrição:</h1>
                    <p className="descricao">{verdura.desc}</p>

                    <div className="area">
                        <div className="areaTag">
                            <h1>Quantidade:</h1>
                            <p>{verdura.qntd}</p>
                        </div>

                        <div className="areaTag">
                            <h1>Valor:</h1>
                            <p>{Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL'}).format(Number(verdura.preco))}</p>
                        </div>
                    </div>

                    <button className="btnComprar" onClick={handleClick}>Comprar</button>
                </div>
            </div>
        </div>
    );
}

export default ItemPage;