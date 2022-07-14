import { Route, Switch } from "react-router-dom";

import Home from './Components/Pages/Home';

// Components
import Components from './Components/Pages/Components';
import Description from './Components/Description';

// Three
import Three from './Components/Pages/Three';

// D3
import D3 from './Components/Pages/D3';
import Pie01 from './Components/D3/Charts/Pie01';
import Bar01 from './Components/D3/Charts/Bar01';
import ProjectionAlbers from './Components/D3/Maps/ProjectionAlbers';
import AnalogClock from './Components/D3/Special/AnalogClock';
import AnalogClockTwo from './Components/D3/Special/AnalogClockTwo';
import PolarClock from './Components/D3/Special/PolarClock';
import Pie01Example from './Components/D3/Tests/Pie01';

// Lights
import Point01 from './Components/Three/Lights/Point01';
import Shadows01 from './Components/Three/Lights/Shadows01';
import Shadows02 from './Components/Three/Lights/Shadows02';

// Textures
import Texture01 from './Components/Three/Textures/Texture01';
import Texture02 from './Components/Three/Textures/Texture02';
import Texture03 from './Components/Three/Textures/Texture03';

// Three Geometries
import Box from './Components/Three/Geometries/Box';
import Capsule from './Components/Three/Geometries/Capsule';
import Circle from './Components/Three/Geometries/Circle';
import Cone from './Components/Three/Geometries/Cone';
import Cylinder from './Components/Three/Geometries/Cylinder';
import Dodecahedron from './Components/Three/Geometries/Dodecahedron';
import Plane from './Components/Three/Geometries/Plane';
import Sphere from './Components/Three/Geometries/Sphere';
import SphereDivision from './Components/Three/Geometries/SphereDivision';
import Torus from './Components/Three/Geometries/Torus';
import Wireframes from './Components/Three/Geometries/Wireframes';

// Three Trials & Tests
import Test01 from './Components/Three/Tests/Test01';
import Test02 from './Components/Three/Tests/Test02';
import Test03 from './Components/Three/Tests/Test03';
import Test04 from './Components/Three/Tests/Test04';
import Test05 from './Components/Three/Tests/Test05';
import Test06 from './Components/Three/Tests/Test06';
import Test07 from './Components/Three/Tests/Test07';

//GSAP
import Gsap from './Components/Pages/Gsap';
import Learn01 from './Components/Gsap/Learn01';
import Learn02 from './Components/Gsap/Learn02';

// Apis
import Apis from './Components/Pages/Apis';
import Placeholder from './Components/Apis/Placeholder/default';
import Weather from './Components/Apis/Placeholder/Weather';
import ItunesImages from './Components/Apis/Itunes/ItunesImages';
import ItunesArtistInfo from './Components/Apis/Itunes/ItunesArtistInfo';

// Layouts
import Layouts from './Components/Pages/Layouts';
import SocialCard from './Components/Layouts/SocialCard';
import Panel from './Components/Layouts/Panel';
import Mosaic from './Components/Layouts/Mosaic';

// Learning
import Learning from './Components/Pages/Learning';
import StyledComponents from './Components/Learning/StyledComponents';
import Hooks from './Components/Learning/Hooks';

// POCs
import Pocs from './Components/Pages/Pocs';
import ThreeDCube from './Components/Pocs/ThreeDCube';
import SquareImages from './Components/Pocs/SquareImages';
import Dashboard from './Components/Pocs/Dashboard';
import CssPulse from './Components/Pocs/CssPulse';
import NeonType from './Components/Pocs/NeonType';
import SwitchAnimation from './Components/Pocs/SwitchAnimation';
import DayNightAnimation from './Components/Pocs/DayNightAnimation';
import IconAnimations from './Components/Pocs/IconAnimations';
import FadingImages from './Components/Pocs/FadingImages/default';

// Reference
import Reference from './Components/Pages/Reference';
import Keyframes from './Components/Reference/Keyframes';
import Transforms from './Components/Reference/Transforms';
import RadialGradients from './Components/Reference/RadialGradients';
import DropShadows from './Components/Reference/DropShadows';
import NthChild from './Components/Reference/NthChild';
import VwFonts from './Components/Reference/VwFonts';
import Selectors from './Components/Reference/Selectors';

function Routes() {
    return (
        <>
        <Switch>
            <Route exact path='/'>
                <Home />
            </Route>

            {/* Components */}
            <Route exact path='/components'>
                <Components />
            </Route>
            <Route path='/components/description'>
                <Description />
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
            <Route path='/three/geometries/sphere-division'>
                <SphereDivision />
            </Route>
            
            <Route path='/three/geometries/torus'>
                <Torus />
            </Route>
            <Route path='/three/geometries/wireframes'>
                <Wireframes />
            </Route>

            {/* ThreeJS Textures */}
            <Route path='/three/textures/texture01'>
                <Texture01 />
            </Route>
            <Route path='/three/textures/texture02'>
                <Texture02 />
            </Route>
            <Route path='/three/textures/texture03'>
                <Texture03 />
            </Route>
            
            
            {/* ThreeJS Trials & Tests */}
            <Route path='/three/tests/test01'>
                <Test01 />
            </Route>
            <Route path='/three/tests/test02'>
                <Test02 />
            </Route>
            <Route path='/three/tests/test03'>
                <Test03 />
            </Route>
            <Route path='/three/tests/test04'>
                <Test04 />
            </Route>
            <Route path='/three/tests/test05'>
                <Test05 />
            </Route>
            <Route path='/three/tests/test06'>
                <Test06 />
            </Route>
            <Route path='/three/tests/test07'>
                <Test07 />
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
            {/* D3 */}
            <Route exact path='/d3'>
                <D3 />
            </Route>
            <Route path='/d3/charts/pie01'>
                <Pie01 />
            </Route>
            <Route path='/d3/charts/bar01'>
                <Bar01 />
            </Route>
            <Route path='/d3/maps/projection-albers'>
                <ProjectionAlbers />
            </Route>
            
            <Route path='/d3/special/analogclock'>
                <AnalogClock />
            </Route>
            <Route path='/d3/special/analogclocktwo'>
                <AnalogClockTwo />
            </Route>
            <Route path='/d3/special/polarclock'>
                <PolarClock />
            </Route>
            
            <Route path='/d3/tests/pie01'>
                <Pie01Example />
            </Route>
            
            {/* Gsap */}
            <Route path='/gsap'>
                <Gsap />
            </Route>
            <Route path='/apis/gsap/learn01'>
                <Learn01 />
            </Route>
            <Route path='/apis/gsap/learn02'>
                <Learn02 />
            </Route>
            {/* Layouts */}
            <Route exact path='/layouts'>
                <Layouts />
            </Route>
            <Route path='/layouts/social-card'>
                <SocialCard />
            </Route>
            <Route path='/layouts/panel'>
                <Panel />
            </Route>
            <Route path='/layouts/mosaic'>
                <Mosaic />
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
            <Route path='/pocs/dashboard'>
                <Dashboard />
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
            <Route exact path='/learning/hooks'>
                <Hooks />
            </Route>
        </Switch>
    </>
    )
}

export default Routes;