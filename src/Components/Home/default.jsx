import React from 'react';
import { Link } from 'react-router-dom';

import data from '../../Data/home.json';
import './default.scss';
import colton from './images/colton-haynes.jpg';

function Home() {
    // eslint-disable-next-line array-callback-return
    const menu = data.map((item) => {
        return (
            <Link key={item.id} to={item.link}>
                <figure>
                    <span className="filler">
                        <img src={colton} alt={item.title} />
                    </span>
                </figure>
                <p>{item.title}</p>
            </Link>
        )
    })

    return (
        <div className="grid" data-col="1">
            
            <h3>POCs</h3>
            <div className="grid" data-col="4">
                {menu}
                {/* <Link to="/pocs/svg-doughnut">
                    <figure>
                        <span className="filler">
                            <img src={colton} alt="Visualizer One" />
                        </span>
                    </figure>
                    <p>SVG Doughnut</p>
                </Link>

                <Link to="/pocs/css-pulse">
                    <figure>
                        <span className="filler">
                            <img src={colton} alt="Visualizer One" />
                        </span>
                    </figure>
                    <p>CSS Pulse</p>
                </Link> */}
            </div>

            <h3>CSS Reference</h3>
            <div className="grid" data-col="4">
                <Link to="/reference/nth-child">
                    <figure>
                        <span className="filler">
                            <img src={colton} alt="Visualizer One" />
                        </span>
                    </figure>
                    <p>Nth Child</p>
                </Link>

                <Link to="/reference/vw-fonts">
                    <figure>
                        <span className="filler">
                            <img src={colton} alt="Visualizer One" />
                        </span>
                    </figure>
                    <p>VW Fonts</p>
                </Link>
            </div>
            
            <ul>
                <li><Link to="/reference/selectors">Selectors</Link></li>
                <li><Link to="/reference/radial-gradients">Radial Gradients</Link></li>
                <li><Link to="/reference/dropshadows">Dropshadows</Link></li>
                <li><Link to="/reference/transforms">Transforms</Link></li>
                <li><Link to="/reference/keyframes">Keyframes</Link></li>
            </ul>
        </div>
    )
}

export default Home;