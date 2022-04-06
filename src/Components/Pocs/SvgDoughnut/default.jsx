import React from 'react';
import './default.scss';

function SvgDoughnut() {
    return (
        <div className="svg-doughnut">
            <h3>SVG Doughnut</h3>
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
    )
}

export default SvgDoughnut;
