import Description from '../../Description';
import Image from '../Image';
import List from './List';

import data from './data/panels.json';
import '../default.scss';

function Panel() {
    const repeatAmt = 3;

    const panels = (data.television).map((item, id) => {
        return (
            <article key={id} className="panel">

                <h3>{item.panelTitle}</h3>

                <Image
                    src={item.images.main.src}
                    alt={item.images.main.caption}
                    caption={item.images.main.caption}
                    credit={item.images.main.credit}
                />

                {item.headline !== '' && ( <h4>{item.headline}</h4>  )}
                {item.text !== '' && ( <div className="body-copy"><p>{item.text}</p></div>  )}
                {item.list && ( <List listItems={item.list} />  )}

            </article>
        );
    });

    return (
        <>
            <Description title="Panels" copy="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis auctor aliquet lacus ut dignissim. In pellentesque lorem eu nisl pretium fermentum. Donec ut tellus imperdiet, vestibulum nisl sed, pellentesque purus. Donec sollicitudin sapien in nibh aliquam pellentesque. Proin sagittis augue non est commodo, quis congue ligula bibendum. Curabitur pellentesque dapibus quam quis imperdiet. Integer venenatis augue consequat diam euismod, a ullamcorper magna varius. Vivamus justo augue, interdum eu ultricies quis, convallis sit amet nunc. Fusce massa nulla, ornare at mauris in, dapibus luctus orci. Aliquam erat volutpat. Duis pulvinar arcu orci, venenatis pellentesque augue bibendum sit amet." />
            <div className="grid" data-col={repeatAmt}>
                {panels}
            </div>
        </>
    )
}

export default Panel;
