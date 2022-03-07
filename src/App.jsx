import React from 'react';
import { 
  BrowserRouter as Router,
  Route,
  Switch
} from "react-router-dom";
import Home from './Components/Home/default';
import Keyframes from './Components/Keyframes/default';
import Transforms from './Components/Transforms/default';
import RadialGradients from './Components/RadialGradients/default';
import DropShadows from './Components/DropShadows/default';

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
    </div>
  </Router>;
}

export default App;
