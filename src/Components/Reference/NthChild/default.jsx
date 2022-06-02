import Description from '../../Description';
import './default.scss';

function NthChild() {
    const repeatAmt = 10;
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

    const grids = gridInfo.map((grid, index) => {
        return (
            <div key={index}>
                <h3>{grid.title}</h3>
                <div className={`grid ${grid.designation}`} data-col={repeatAmt}>
                    {[...Array(repeatAmt)].map((el, index) => (
                        <article> <div key={el} className="dot"></div>
                        </article>
                    ))}
                </div>
                <pre>{grid.code}</pre>
            </div>
        );
    });

    return (
        <>
            <Description title="Nth Child" copy="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis auctor aliquet lacus ut dignissim. In pellentesque lorem eu nisl pretium fermentum. Donec ut tellus imperdiet, vestibulum nisl sed, pellentesque purus. Donec sollicitudin sapien in nibh aliquam pellentesque. Proin sagittis augue non est commodo, quis congue ligula bibendum. Curabitur pellentesque dapibus quam quis imperdiet. Integer venenatis augue consequat diam euismod, a ullamcorper magna varius. Vivamus justo augue, interdum eu ultricies quis, convallis sit amet nunc. Fusce massa nulla, ornare at mauris in, dapibus luctus orci. Aliquam erat volutpat. Duis pulvinar arcu orci, venenatis pellentesque augue bibendum sit amet." />
            <div className="nth-child">
                { grids }
            </div>
        </>
    )
}

export default NthChild;
