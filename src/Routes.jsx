import { Route, Switch } from "react-router-dom";

import Home from './Components/Pages/Home';

// Three
import Three from './Components/Pages/Three';

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
import Gsap from './Components/Pages/Gsap';
import Learn01 from './Components/Gsap/Learn01';

// Apis
import Apis from './Components/Pages/Apis';
import Placeholder from './Components/Apis/Placeholder/default';
import Weather from './Components/Apis/Placeholder/Weather';
import ItunesImages from './Components/Apis/Itunes/ItunesImages';
import ItunesArtistInfo from './Components/Apis/Itunes/ItunesArtistInfo';

// Layouts
import Layouts from './Components/Pages/Layouts';
import Card from './Components/Layouts/Card/default';
import Panel from './Components/Layouts/Panel/default';

// Learning
import Learning from './Components/Pages/Learning';
import StyledComponents from './Components/Learning/StyledComponents';

// POCs
import Pocs from './Components/Pages/Pocs';
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
import Reference from './Components/Pages/Reference';
import Keyframes from './Components/Reference/Keyframes/default';
import Transforms from './Components/Reference/Transforms/default';
import RadialGradients from './Components/Reference/RadialGradients/default';
import DropShadows from './Components/Reference/DropShadows/default';
import NthChild from './Components/Reference/NthChild/default';
import VwFonts from './Components/Reference/VwFonts/default';
import Selectors from './Components/Reference/Selectors/default';

function Routes() {
    return (
        <>
        <Switch>
            <Route exact path='/'>
                <Home />
            </Route>
            {/* Three */}
            <Route exact path='/three'>
                <Three />
            </Route>
            {/* ThreeJS lights */}
            <Route path='/three/lights/point01'>
                <Point01 />
            </Route>
            <Route path='/three/lights/shadows01'>
                <Shadows01 />
            </Route>
            <Route path='/three/lights/shadows02'>
                <Shadows02 />
            </Route>
            {/* ThreeJS geometries */}
            <Route path='/three/geometries/box'>
                <Box />
            </Route>
            <Route path='/three/geometries/capsule'>
                <Capsule />
            </Route>
            <Route path='/three/geometries/cone'>
                <Cone />
            </Route>
            <Route path='/three/geometries/circle'>
                <Circle />
            </Route>
            <Route path='/three/geometries/cylinder'>
                <Cylinder />
            </Route>

            <Route path='/three/geometries/dodecahedron'>
                <Dodecahedron />
            </Route>
            <Route path='/three/geometries/plane'>
                <Plane />
            </Route>
            <Route path='/three/geometries/sphere'>
                <Sphere />
            </Route>
            <Route path='/three/geometries/torus'>
                <Torus />
            </Route>
            <Route path='/three/geometries/wireframes'>
                <Wireframes />
            </Route>
            {/* ThreeJS Trials & Tests */}
            <Route path='/three/tests/test01'>
                <Test01 />
            </Route>
            <Route path='/three/tests/test02'>
                <Test02 />
            </Route>
            <Route path='/three/tests/test04'>
                <Test04 />
            </Route>
            {/* Apis */}
            <Route exact path='/apis'>
                <Apis />
            </Route>
            <Route path='/apis/placeholder'>
                <Placeholder />
            </Route>
            <Route path='/apis/weather'>
                <Weather />
            </Route>
            <Route path='/apis/itunes/images'>
                <ItunesImages />
            </Route>
            <Route path='/apis/itunes/artist'>
                <ItunesArtistInfo />
            </Route>
            {/* Gsap */}
            <Route path='/gsap'>
                <Gsap />
            </Route>
            <Route path='/apis/gsap/learn01'>
                <Learn01 />
            </Route>
            {/* Layouts */}
            <Route exact path='/layouts'>
                <Layouts />
            </Route>
            <Route path='/layouts/card'>
                <Card />
            </Route>
            <Route path='/layouts/panel'>
                <Panel />
            </Route>
            {/* Learning */}
            {/* POCs */}
            <Route exact path='/pocs'>
                <Pocs />
            </Route>
            <Route path='/pocs/fading-images'>
                <FadingImages />
            </Route>
            <Route path='/pocs/three-d-cube'>
                <ThreeDCube />
            </Route>
            <Route path='/pocs/square-images'>
                <SquareImages />
            </Route>
            <Route path='/pocs/svg-doughnut'>
                <SvgDoughnut />
            </Route>
            <Route path='/pocs/css-pulse'>
                <CssPulse />
            </Route>
            <Route path='/pocs/neon-type'>
                <NeonType />
            </Route>
            <Route path='/pocs/switch-animation'>
                <SwitchAnimation />
            </Route>
            <Route path='/pocs/day-night-animation'>
                <DayNightAnimation />
            </Route>
            <Route path='/pocs/icon-animations'>
                <IconAnimations />
            </Route>
            {/* Reference */}
            <Route exact path='/reference'>
                <Reference />
            </Route>
            <Route path='/reference/keyframes'>
                <Keyframes />
            </Route>
            <Route path='/reference/transforms'>
                <Transforms />
            </Route>
            <Route path='/reference/radial-gradients'>
                <RadialGradients />
            </Route>
            <Route path='/reference/dropshadows'>
                <DropShadows />
            </Route>
            </Switch>
            <Switch>
            <Route path='/reference/nth-child'>
                <NthChild />
            </Route>
            <Route path='/reference/vw-fonts'>
                <VwFonts />
            </Route>
            <Route path='/reference/selectors'>
                <Selectors />
            </Route>
            {/* Learning */}
            <Route exact path='/learning'>
                <Learning />
            </Route>
            <Route exact path='/learning/styled-components'>
                <StyledComponents />
            </Route>
        </Switch>
    </>
    )
}

export default Routes;