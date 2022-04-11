import React from 'react';
import Header from '../Common/Header/default';
import data from '../../Data/menu.json';
import './default.scss';

function Home() {
    return (
        <div className="grid">
            <Header section={data.home[0]} />
        </div>
    )
}

export default Home;