import React from 'react'
import {BrowserRouter,Route,Switch} from 'react-router-dom';
import Home from './Home';
import Edit from './Edit';

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Home}/>
          <Route path="/edit" exact component={Edit}/>
        </Switch>
      </BrowserRouter>
    </div>
  )
}

export default App
