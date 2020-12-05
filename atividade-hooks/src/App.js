import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import {
  BrowserRouter,
  Switch,
  Route,
  Redirect
} from 'react-router-dom';

import { isLogged } from './services/login';

import NotFoundPage from './containers/NotFoundPage'; 
import LoginPage from './containers/LoginPage'; 
import HomePage from './containers/HomePage'; 
import ItemPage from './containers/ItemPage';

const RotaPrivada = (props) => {
  return isLogged() ? <Route {...props} /> : <Redirect to="/"/>
}

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={LoginPage}/>
        <RotaPrivada path="/home" component={HomePage}/>
        <RotaPrivada path="/item/:id" component={ItemPage}/>
        <Route path="*" component={NotFoundPage}/>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
