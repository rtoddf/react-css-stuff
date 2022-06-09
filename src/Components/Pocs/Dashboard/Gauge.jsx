import { StyledGauge } from './Gauge.styled';

function Gauge({ gaugeTitle, gaugeColor, gaugeAmount }) {
    console.log('gaugeAmount: ', gaugeAmount)
    return (
		<StyledGauge strokeColor={gaugeColor} amount={gaugeAmount}>
            <article className="html">
                <h3>{gaugeTitle}</h3>
                <svg>
                    <circle />
                </svg>
            </article>
        </StyledGauge>
    )
}

export default Gauge;
