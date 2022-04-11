import React from 'react';
import Description from '../../Common/Description/default';
import './default.scss';

function SvgDoughnut() {
    return (
		<>
			<Description title="SVG Doughnut" copy="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis auctor aliquet lacus ut dignissim. In pellentesque lorem eu nisl pretium fermentum. Donec ut tellus imperdiet, vestibulum nisl sed, pellentesque purus. Donec sollicitudin sapien in nibh aliquam pellentesque. Proin sagittis augue non est commodo, quis congue ligula bibendum. Curabitur pellentesque dapibus quam quis imperdiet. Integer venenatis augue consequat diam euismod, a ullamcorper magna varius. Vivamus justo augue, interdum eu ultricies quis, convallis sit amet nunc. Fusce massa nulla, ornare at mauris in, dapibus luctus orci. Aliquam erat volutpat. Duis pulvinar arcu orci, venenatis pellentesque augue bibendum sit amet." />
			<div className="svg-doughnut">
				<div className="grid" data-col="4">
					<article className="html">
						<h3>HTML</h3>
						<svg width="160" height="160" xmlns="http://www.w3.org/2000/svg">
							<g>
								<circle id="circle" className="circle_animation" r="69.85699" cy="81" cx="81" strokeWidth="8" stroke="#6fdb6f" fill="none" />
							</g>
						</svg>
					</article>
					<article className="css">
						<h3>CSS</h3>
						<svg width="160" height="160" xmlns="http://www.w3.org/2000/svg">
							<g>
								<circle id="circle" className="circle_animation" r="69.85699" cy="81" cx="81" strokeWidth="8" stroke="#69aff4" fill="none"/ >
							</g>
						</svg>
					</article>
				</div>
			</div>
		</>
    )
}

export default SvgDoughnut;
