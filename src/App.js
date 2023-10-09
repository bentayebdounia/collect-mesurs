import {BrowserRouter as Router  } from 'react-router-dom'
import { Route, Switch } from "react-router";
import Autentification from './authentification/authentification'
import Accueil from './Admin/accueil';
import AccueilAgent from './Agent/accueil'
import 'bootstrap/dist/css/bootstrap.min.css'
function App() {
  return (
    <Router>
      
          <Switch>
              <Route exact path = "/" component ={Autentification} ></Route>
              <Route path = "/accueil" component = {Accueil} ></Route>
              <Route path = "/accueilAgent" component = {AccueilAgent} ></Route>
          </Switch>
      

      </Router>
  );
}

export default App;
