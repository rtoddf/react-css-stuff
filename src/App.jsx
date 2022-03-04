import React from 'react';
import { 
  BrowserRouter as Router,
  Route,
  Switch
} from "react-router-dom";
import Keyframes from './Components/Keyframes/default';

function App() {
  return <Router>
    <div className="wrapper">
      <Switch>
        <Route exact path='/'>
          <h3>home page</h3>
        </Route>
      </Switch>
      <Switch>
        <Route path='/keyframes'>
          <Keyframes />
        </Route>
      </Switch>
    </div>
  </Router>;
}

export default App;
