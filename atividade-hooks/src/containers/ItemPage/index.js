// import { Container } from './styles';
import { Link } from 'react-router-dom';
import {Card} from 'react-bootstrap'; 
 
function ItemPage() {
    return (
        <div className="container">
            <h1>Mais Informações: </h1>
            <div class = "container">
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src="holder.js/100px180" />
                    <Card.Body>
                        <Card.Title></Card.Title>
                        <Card.Text>
                      
                        </Card.Text>
                        <Link to="/home" className="main-btn">Voltar</Link>
                    </Card.Body>
                </Card>
            </div>
        </div>
    );
}

export default ItemPage;