import React from 'react';
import './default.scss';

function SvgDoughnut() {
    return (
        <>
            <h3>SVG Doughnut</h3>
            <div id="doughnut" class="grid" data-col="4">
				<article class="html">
					<h3>HTML</h3>
					<svg width="160" height="160" xmlns="http://www.w3.org/2000/svg">
						<g>
							<title>Layer 1</title>
							<circle id="circle" class="circle_animation" r="69.85699" cy="81" cx="81" stroke-width="8" stroke="#6fdb6f" fill="none" />
						</g>
					</svg>
				</article>
				<article class="css">
					<h3>CSS</h3>
					<svg width="160" height="160" xmlns="http://www.w3.org/2000/svg">
						<g>
							<title>Layer 1</title>
							<circle id="circle" class="circle_animation" r="69.85699" cy="81" cx="81" stroke-width="8" stroke="#69aff4" fill="none"/ >
						</g>
					</svg>
				</article>
			</div>
        </>
        
    )
}

export default SvgDoughnut;
