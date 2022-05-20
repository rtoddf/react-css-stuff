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
import Point01 from './Components/Three/Lights/Point01/default';

// Shaders
import Texture01 from './Components/Three/Shaders/Texture01/default';

// Three Geometries
import SphereGeometry from './Components/Three/Geometries/Sphere/default';
import BoxGeometry from './Components/Three/Geometries/Box/default';
import ConeGeometry from './Components/Three/Geometries/Cone/default';
import CircleGeometry from './Components/Three/Geometries/Circle/default';
import CylinderGeometry from './Components/Three/Geometries/Cylinder/default';
import TorusGeometry from './Components/Three/Geometries/Torus/default';
import PlaneGeometry from './Components/Three/Geometries/Plane/default';
import Plane02 from './Components/Three/Geometries/Plane/Plane02';
import Plane03 from './Components/Three/Geometries/Plane/Plane03';
import CapsuleGeometry from './Components/Three/Geometries/Capsule/default';

// Three Trials & Tests
import Test01 from './Components/Three/Tests/Test01/default';
import Test02 from './Components/Three/Tests/Test02/default';
import Test03 from './Components/Three/Tests/Test03/default';
import Wireframes from './Components/Three/Tests/Wireframes/default';


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

      {/* ThreeJS lights */}
      <Switch>
        <Route path='/three/lights/point01'>
          <Point01 />
        </Route>
      </Switch>
      
      
      {/* ThreeJS geometries */}
      <Switch>
        <Route path='/three/geometries/sphere'>
          <SphereGeometry />
        </Route>
      </Switch>
      <Switch>
        <Route path='/three/geometries/box'>
          <BoxGeometry />
        </Route>
      </Switch>
      <Switch>
        <Route path='/three/geometries/cone'>
          <ConeGeometry />
        </Route>
      </Switch>
      <Switch>
        <Route path='/three/geometries/circle'>
          <CircleGeometry />
        </Route>
      </Switch>
      <Switch>
        <Route path='/three/geometries/cylinder'>
          <CylinderGeometry />
        </Route>
      </Switch>
      <Switch>
        <Route path='/three/geometries/torus'>
          <TorusGeometry />
        </Route>
      </Switch>
      <Switch>
        <Route path='/three/geometries/plane'>
          <PlaneGeometry />
        </Route>
      </Switch>
      <Switch>
        <Route path='/three/geometries/plane02'>
          <Plane02 />
        </Route>
      </Switch>
      <Switch>
        <Route path='/three/geometries/plane03'>
          <Plane03 />
        </Route>
      </Switch>
      <Switch>
        <Route path='/three/geometries/capsule'>
          <CapsuleGeometry />
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
        <Route path='/three/tests/test03'>
          <Test03 />
        </Route>
      </Switch>      
      <Switch>
        <Route path='/three/tests/wireframes'>
          <Wireframes />
        </Route>
      </Switch>

      {/* ThreeJS Shaders */}
      <Switch>
        <Route path='/three/shaders/texture01'>
          <Texture01 />
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
