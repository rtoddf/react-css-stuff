import React from 'react';
import Menu from './Menu';
import { Link } from 'react-router-dom';

import data from '../../Data/home.json';
import './default.scss';
import colton from './images/colton-haynes.jpg';

function Home() {
    const menu = data.map((item) => {
        console.log('item: ', item)
        return (
            <>
                <h4>{item.headline}</h4>
                {/* <Menu items={item} /> */}
            </>
        )
    })

    return (
        <div className="grid" data-col="1">
            <div className="grid" data-col="4">
                {menu}
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