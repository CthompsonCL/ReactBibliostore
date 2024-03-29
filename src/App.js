import React from 'react';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import Suscriptores from './components/suscriptores/Suscriptores';
import MostrarSuscriptor from './components/suscriptores/MostrarSuscriptor';
import NuevoSuscriptor from './components/suscriptores/NuevoSuscriptor';
import EditarSuscriptor from './components/suscriptores/EditarSuscriptor';
import Navbar from './components/layout/Navbar';
import store from './store';
import { Provider } from 'react-redux';

function App() {
  return (
   <Provider store={store}>
      <Router>
      <Navbar/>
      <div className="container">
      <Switch>
        <Route exact path="/suscriptores" component={Suscriptores}/>
        <Route exact path="/suscriptores/nuevo" component={NuevoSuscriptor}/>
        <Route exact path="/suscriptores/mostrar/:id" component={MostrarSuscriptor}/>
        <Route exact path="/suscriptores/editar/:id" component={EditarSuscriptor}/>
      </Switch>
      </div>
    </Router>
   </Provider>
     
  );
}

export default App;
