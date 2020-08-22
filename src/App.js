import React from 'react';
import { Route, Switch, Link } from 'react-router-dom';

import HomePage from './pages/homepage/homepage.component';

import './App.css';

const HatsPage = (props) =>{
    console.log(props);
    return(
        <div>
            <h1> HATS PAGE</h1>
            <Link to='/'>Home</Link>
            <button onClick={() => props.history.push('/')}>Home</button>
        </div>
    );
};

function App() {
  return(
      <div>
          <Switch>
              <Route exact path='/' component={HomePage}/>
              <Route path='/hats' component={HatsPage}/>
          </Switch>
      </div>
  );
}

export default App;
