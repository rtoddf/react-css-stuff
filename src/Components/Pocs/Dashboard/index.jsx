import Grid from '../../Grid';
import Description from '../../Description';
import { StyledDashboard } from './Dashboard.styled';

function Dashboard() {
    return (
		<>
			<Description title="Dashboard" copy="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis auctor aliquet lacus ut dignissim. In pellentesque lorem eu nisl pretium fermentum. Donec ut tellus imperdiet, vestibulum nisl sed, pellentesque purus." />
			<StyledDashboard>
				<Grid cols="4">

					<article className="html">
						<h3>HTML</h3>
						<svg width="160" height="160" xmlns="http://www.w3.org/2000/svg">
							<circle className="circle_animation"  />
						</svg>
					</article>

					<article className="css">
						<h3>CSS</h3>
						<svg width="160" height="160" xmlns="http://www.w3.org/2000/svg">
							<circle className="circle_animation" />
						</svg>
					</article>

					<article className="html">
						<h3>HTML</h3>
						<svg width="160" height="160" xmlns="http://www.w3.org/2000/svg">
							<circle className="circle_animation"  />
						</svg>
					</article>

					<article className="css">
						<h3>CSS</h3>
						<svg width="160" height="160" xmlns="http://www.w3.org/2000/svg">
							<circle className="circle_animation" />
						</svg>
					</article>

				</Grid>
			</StyledDashboard>
		</>
    )
}

export default Dashboard;
