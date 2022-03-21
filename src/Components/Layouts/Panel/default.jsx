import React from 'react';
import Image from '../../Common/Image/default';

import data from '../../../Data/cards.json';
import './default.scss';

function Panel() {
    const repeatAmt = 2;
    const cards = (data.riverdale).map((person, id) => {
        return (
            <div key={id} className="card">
                <Image src={person.image} alt={person.name} shape="round" />
                <h4>{person.name}</h4>
                <h5>{person.show}</h5>             
            </div>
        );
    });

    return (
        <div className="grid" data-col={repeatAmt}>
            <article className="panel">
                <h3>Riverdale</h3>
                <figure>
                    <span className="filler">
                        <img src="../images/layouts/panel/riverdale03.jpg" />
                    </span>
                    <figcaption>The series features an ensemble cast based on the characters of Archie Comics, with KJ Apa in the role of Archie Andrews. (photo credit)</figcaption>
                </figure>
                <p>The series features an ensemble cast based on the characters of Archie Comics, with KJ Apa in the role of Archie Andrews; Lili Reinhart as Betty Cooper, Camila Mendes as Veronica Lodge, and Cole Sprouse as Jughead Jones, the series' narrator. The cast also features Madelaine Petsch as Cheryl Blossom, Ashleigh Murray as Josie McCoy, Casey Cott as Kevin Keller, Charles Melton and Ross Butler as Reginald "Reggie" Mantle and Vanessa Morgan as Toni Topaz. Other characters in the series include the parents of the main characters: Luke Perry as Fred Andrews, Mädchen Amick as Alice Cooper, Marisol Nichols and Mark Consuelos as Hermione and Hiram Lodge, and Skeet Ulrich as FP Jones.</p>
            </article>
        </div>
    )
}

export default Panel;
