import React from 'react';
import { 
  BrowserRouter as Router,
  Route,
  Switch
} from "react-router-dom";
import Home from './Components/Home/default';
import Keyframes from './Components/Reference/Keyframes/default';
import Transforms from './Components/Reference/Transforms/default';
import RadialGradients from './Components/Reference/RadialGradients/default';
import DropShadows from './Components/Reference/DropShadows/default';
import NthChild from './Components/Reference/NthChild/default';

function App() {
  return <Router>
    <div className="container">
      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>
      </Switch>
      <Switch>
        <Route path='/keyframes'>
          <Keyframes />
        </Route>
      </Switch>
      <Switch>
        <Route path='/transforms'>
          <Transforms />
        </Route>
      </Switch>
      <Switch>
        <Route path='/radial-gradients'>
          <RadialGradients />
        </Route>
      </Switch>
      <Switch>
        <Route path='/dropshadows'>
          <DropShadows />
        </Route>
      </Switch>
      <Switch>
        <Route path='/nth-child'>
          <NthChild />
        </Route>
      </Switch>
    </div>
  </Router>;
}

export default App;
