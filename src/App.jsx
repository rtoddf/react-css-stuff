import React from 'react';
import { 
  BrowserRouter as Router,
  Route,
  Switch
} from "react-router-dom";
import Home from './Components/Home/default';

// Three
import Three from './Components/Three/default';

// Lights
import Point01 from './Components/Three/Lights/Point01';
import Shadows01 from './Components/Three/Lights/Shadows01';
import Shadows02 from './Components/Three/Lights/Shadows02';

// Three Geometries
import Box from './Components/Three/Geometries/Box';
import Capsule from './Components/Three/Geometries/Capsule';
import Circle from './Components/Three/Geometries/Circle';
import Cone from './Components/Three/Geometries/Cone';
import Cylinder from './Components/Three/Geometries/Cylinder';
import Dodecahedron from './Components/Three/Geometries/Dodecahedron';
import Plane from './Components/Three/Geometries/Plane';
import Sphere from './Components/Three/Geometries/Sphere';
import Torus from './Components/Three/Geometries/Torus';
import Wireframes from './Components/Three/Geometries/Wireframes/default';

// Three Trials & Tests
import Test01 from './Components/Three/Tests/Test01';
import Test02 from './Components/Three/Tests/Test02';
import Test04 from './Components/Three/Tests/Test04';

//GSAP
import Gsap from './Components/Gsap/default';
import Learn01 from './Components/Gsap/Learn01';

// Apis
import Apis from './Components/Apis/default';
import Placeholder from './Components/Apis/Placeholder/default';
import Weather from './Components/Apis/Placeholder/Weather';
import ItunesImages from './Components/Apis/Itunes/ItunesImages';
import ItunesArtistInfo from './Components/Apis/Itunes/ItunesArtistInfo';

// Layouts
import Layouts from './Components/Layouts/default';
import Card from './Components/Layouts/Card/default';
import Panel from './Components/Layouts/Panel/default';

// Learning
import Learning from './Components/Learning/default';
import StyledComponents from './Components/Learning/StyledComponents';

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

      {/* ThreeJS lights */}
      <Switch>
        <Route path='/three/lights/point01'>
          <Point01 />
        </Route>
      </Switch>
      <Switch>
        <Route path='/three/lights/shadows01'>
          <Shadows01 />
        </Route>
      </Switch>
      <Switch>
        <Route path='/three/lights/shadows02'>
          <Shadows02 />
        </Route>
      </Switch>

      {/* ThreeJS geometries */}
      <Switch>
        <Route path='/three/geometries/box'>
          <Box />
        </Route>
      </Switch>
      <Switch>
        <Route path='/three/geometries/capsule'>
          <Capsule />
        </Route>
      </Switch>
      <Switch>
        <Route path='/three/geometries/cone'>
          <Cone />
        </Route>
      </Switch>
      <Switch>
        <Route path='/three/geometries/circle'>
          <Circle />
        </Route>
      </Switch>
      <Switch>
        <Route path='/three/geometries/cylinder'>
          <Cylinder />
        </Route>
      </Switch>
      <Switch>
        <Route path='/three/geometries/dodecahedron'>
          <Dodecahedron />
        </Route>
      </Switch>
      <Switch>
        <Route path='/three/geometries/plane'>
          <Plane />
        </Route>
      </Switch>
      <Switch>
        <Route path='/three/geometries/sphere'>
          <Sphere />
        </Route>
      </Switch>
      <Switch>
        <Route path='/three/geometries/torus'>
          <Torus />
        </Route>
      </Switch>
      <Switch>
        <Route path='/three/geometries/wireframes'>
          <Wireframes />
        </Route>
      </Switch>

      {/* ThreeJS Trials & Tests */}
      <Switch>
        <Route path='/three/tests/test01'>
          <Test01 />
        </Route>
      </Switch>  
      <Switch>
        <Route path='/three/tests/test02'>
          <Test02 />
        </Route>
      </Switch>
      <Switch>
        <Route path='/three/tests/test04'>
          <Test04 />
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
        <Route path='/apis/weather'>
          <Weather />
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

      {/* Gsap */}
      <Switch>
        <Route path='/gsap'>
          <Gsap />
        </Route>
      </Switch>
      <Switch>
        <Route path='/apis/gsap/learn01'>
          <Learn01 />
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
        <Route exact path='/learning/styled-components'>
          <StyledComponents />
        </Route>
      </Switch>

    </div>
  </Router>;
}

export default App;
