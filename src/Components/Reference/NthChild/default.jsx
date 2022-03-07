import React from 'react';
import './default.scss';

function NthChild() {
    const gridInfo = [
        {
            title: "Select only the 3rd element",
            designation: "a",
            code: "article:nth-last-child(2)",
        },
        {
            title: "Select all but the first 3",
            designation: "b",
            code: "article:nth-last-child(2)",
        },
        {
            title: "Select only the first 3",
            designation: "c",
            code: "article:nth-last-child(2)",
        },
        {
            title: "Select every 3rd, starting at the first",
            designation: "d",
            code: "article:nth-last-child(2)",
        },
        {
            title: "Select only odd",
            designation: "e",
            code: "article:nth-last-child(2)",
        },
        {
            title: "Select list item",
            designation: "f",
            code: "article:nth-last-child(2)",
        },
        {
            title: "Select list item",
            designation: "g",
            code: "article:nth-last-child(2)",
        },
    ];

    const colTotal = 10

    const grids = gridInfo.map((grid, index) => {
        return (
            <>
                <h3>{grid.title}</h3>
                <div className={`grid ${grid.designation}`} data-col={colTotal}>
                    {[...Array(colTotal)].map((el, index) => (
                        <article>
                            <div class="dot"></div>
                        </article>
                    ))}
                </div>
                <pre>{grid.code}</pre>
            </>
        );
    });

    return (
        <>
            <h3>Nth Child</h3>
            { grids }
{/* <pre>article:nth-last-child(2) .dot {
    background: #ae0000;
}</pre> */}
        </>
        
    )
}

export default NthChild;
