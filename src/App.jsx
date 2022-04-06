import React from 'react';
import { 
  BrowserRouter as Router,
  Route,
  Switch
} from "react-router-dom";
import Home from './Components/Home/default';

// POCs
import Card from './Components/Layouts/Card/default';
import Panel from './Components/Layouts/Panel/default';

// Learning
import ThreeDCube from './Components/Learning/ThreeDCube/default';

// POCs
import SquareImages from './Components/Pocs/SquareImages/default';
import SvgDoughnut from './Components/Pocs/SvgDoughnut/default';
import CssPulse from './Components/Pocs/CssPulse/default';
import NeonType from './Components/Pocs/NeonType/default';
import SwitchAnimation from './Components/Pocs/SwitchAnimation/default';
import DayNightAnimation from './Components/Pocs/DayNightAnimation/default';
import IconAnimations from './Components/Pocs/IconAnimations/default';

// Reference
import Keyframes from './Components/Reference/Keyframes/default';
import Transforms from './Components/Reference/Transforms/default';
import RadialGradients from './Components/Reference/RadialGradients/default';
import DropShadows from './Components/Reference/DropShadows/default';
import NthChild from './Components/Reference/NthChild/default';
import VwFonts from './Components/Reference/VwFonts/default';
import Selectors from './Components/Reference/Selectors/default';

function App() {
  return <Router>
    <div className="container">
      {/* Layouts */}
      <Switch>
        <Route path='/layouts/card'>
          <Card />
        </Route>
      </Switch>
      <Switch>
        <Route path='/layouts/panel'>
          <Panel />
        </Route>
      </Switch>

      {/* Learning */}
      <Switch>
        <Route path='/learning/three-d-cube'>
          <ThreeDCube />
        </Route>
      </Switch>

      {/* POCs */}
      <Switch>
        <Route path='/pocs/square-images'>
          <SquareImages />
        </Route>
      </Switch>
      <Switch>
        <Route path='/pocs/svg-doughnut'>
          <SvgDoughnut />
        </Route>
      </Switch>
      <Switch>
        <Route path='/pocs/css-pulse'>
          <CssPulse />
        </Route>
      </Switch>
      <Switch>
        <Route path='/pocs/neon-type'>
          <NeonType />
        </Route>
      </Switch>
      <Switch>
        <Route path='/pocs/switch-animation'>
          <SwitchAnimation />
        </Route>
      </Switch>
      <Switch>
        <Route path='/pocs/day-night-animation'>
          <DayNightAnimation />
        </Route>
      </Switch>
      <Switch>
        <Route path='/pocs/icon-animations'>
          <IconAnimations />
        </Route>
      </Switch>

      {/* Reference */}
      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>
      </Switch>
      <Switch>
        <Route path='/reference/keyframes'>
          <Keyframes />
        </Route>
      </Switch>
      <Switch>
        <Route path='/reference/transforms'>
          <Transforms />
        </Route>
      </Switch>
      <Switch>
        <Route path='/reference/radial-gradients'>
          <RadialGradients />
        </Route>
      </Switch>
      <Switch>
        <Route path='/reference/dropshadows'>
          <DropShadows />
        </Route>
      </Switch>
      <Switch>
        <Route path='/reference/nth-child'>
          <NthChild />
        </Route>
      </Switch>
      <Switch>
        <Route path='/reference/vw-fonts'>
          <VwFonts />
        </Route>
      </Switch>
      <Switch>
        <Route path='/reference/selectors'>
          <Selectors />
        </Route>
      </Switch>

    </div>
  </Router>;
}

export default App;
