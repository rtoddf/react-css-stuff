import Grid from '../../Grid';
import Gauge from './Gauge';
import { StyledDashboard } from './Dashboard.styled';
import data from './data.json';

function Dashboard() {
    return (
		<StyledDashboard>
			<Grid cols="4" justify="center">
				{
					data.map(function(gauge, i){
						return <Gauge key={i} gaugeTitle={gauge.title} gaugeColor={gauge.color} gaugeAmount={gauge.amount} />
					})
				}
			</Grid>
		</StyledDashboard>
    )
}

export default Dashboard;
