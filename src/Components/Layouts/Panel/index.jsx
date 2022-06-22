import Grid from '../../Grid';
import Description from '../../Description';
import Figure from '../../Figure';
import List from '../../List';

import data from './data/panels.json';
import { StyledPanel } from './Panel.styled';

function Panel() {
    const repeatAmt = '3';

    const panels = (data.television).map((item, id) => {
        return (
            <article key={id} className="panel">
                <StyledPanel>
                    <h3>{item.panelTitle}</h3>

                    <Figure
                        image={ item.images.main.src }
                        alt={ item.images.main.caption }
                    />

                    {item.headline !== '' && ( <h4>{item.headline}</h4>  )}
                    {item.text !== '' && ( <div className="body-copy"><p>{item.text}</p></div>  )}
                    {item.list && ( <List listItems={item.list} />  )}
                </StyledPanel>
            </article>
        );
    });

    return (
        <>
            <Description title="Panels" copy="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis auctor aliquet lacus ut dignissim. In pellentesque lorem eu nisl pretium fermentum. Donec ut tellus imperdiet, vestibulum nisl sed, pellentesque purus. Donec sollicitudin sapien in nibh aliquam pellentesque." />
            <Grid cols={repeatAmt}>
                {panels} 
            </Grid>
        </>
    )
}

export default Panel;
