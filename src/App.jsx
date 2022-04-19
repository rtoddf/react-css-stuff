import React from 'react';
import { 
  BrowserRouter as Router,
  Route,
  Switch
} from "react-router-dom";
import Home from './Components/Home/default';

// Three
import Three from './Components/Three/default';
import Wireframes from './Components/Three/Wireframes/default';
import BoxShape from './Components/Three/BoxShape/default';
import Test from './Components/Three/Test/default';

// Apis
import Apis from './Components/Apis/default';
import Placeholder from './Components/Apis/Placeholder/default';
import ItunesImages from './Components/Apis/Itunes/ItunesImages';
import ItunesArtistInfo from './Components/Apis/Itunes/ItunesArtistInfo';

// Layouts
import Layouts from './Components/Layouts/default';
import Card from './Components/Layouts/Card/default';
import Panel from './Components/Layouts/Panel/default';

// Learning
import Learning from './Components/Learning/default';
import ThreeDCarousel from './Components/Learning/ThreeDCarousel/default';

// POCs
import Pocs from './Components/Pocs/default';
import ThreeDCube from './Components/Pocs/ThreeDCube/default';
import SquareImages from './Components/Pocs/SquareImages/default';
import SvgDoughnut from './Components/Pocs/SvgDoughnut/default';
import CssPulse from './Components/Pocs/CssPulse/default';
import NeonType from './Components/Pocs/NeonType/default';
import SwitchAnimation from './Components/Pocs/SwitchAnimation/default';
import DayNightAnimation from './Components/Pocs/DayNightAnimation/default';
import IconAnimations from './Components/Pocs/IconAnimations/default';
import FadingImages from './Components/Pocs/FadingImages/default';

// Reference
import Reference from './Components/Reference/default';
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
      {/* Home */}
      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>
      </Switch>

      {/* Three */}
      <Switch>
        <Route exact path='/three'>
          <Three />
        </Route>
      </Switch>
      <Switch>
        <Route path='/three/wireframes'>
          <Wireframes />
        </Route>
      </Switch>
      <Switch>
        <Route path='/three/boxshape'>
          <BoxShape />
        </Route>
      </Switch>
      <Switch>
        <Route path='/three/test'>
          <Test />
        </Route>
      </Switch>      

      {/* Apis */}
      <Switch>
        <Route exact path='/apis'>
          <Apis />
        </Route>
      </Switch>
      <Switch>
        <Route path='/apis/placeholder'>
          <Placeholder />
        </Route>
      </Switch>
      <Switch>
        <Route path='/apis/itunes/images'>
          <ItunesImages />
        </Route>
      </Switch>
      <Switch>
        <Route path='/apis/itunes/artist'>
          <ItunesArtistInfo />
        </Route>
      </Switch>
      

      {/* Layouts */}
      <Switch>
        <Route exact path='/layouts'>
          <Layouts />
        </Route>
      </Switch>
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

      {/* POCs */}
      <Switch>
        <Route exact path='/pocs'>
          <Pocs />
        </Route>
      </Switch>
      <Switch>
        <Route path='/pocs/fading-images'>
          <FadingImages />
        </Route>
      </Switch>
      <Switch>
        <Route path='/pocs/three-d-cube'>
          <ThreeDCube />
        </Route>
      </Switch>
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
        <Route exact path='/reference'>
          <Reference />
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

      {/* Learning */}
      <Switch>
        <Route exact path='/learning'>
          <Learning />
        </Route>
      </Switch>
      <Switch>
        <Route exact path='/learning/3dcarousel'>
          <ThreeDCarousel />
        </Route>
      </Switch>

    </div>
  </Router>;
}

export default App;
