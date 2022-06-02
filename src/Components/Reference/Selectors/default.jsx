import React from 'react';
import Description from '../../Description';
import './default.scss';

function Selectors() {
    return (
		<>
			<Description title="Selectors" copy="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis auctor aliquet lacus ut dignissim. In pellentesque lorem eu nisl pretium fermentum. Donec ut tellus imperdiet, vestibulum nisl sed, pellentesque purus. Donec sollicitudin sapien in nibh aliquam pellentesque. Proin sagittis augue non est commodo, quis congue ligula bibendum. Curabitur pellentesque dapibus quam quis imperdiet. Integer venenatis augue consequat diam euismod, a ullamcorper magna varius. Vivamus justo augue, interdum eu ultricies quis, convallis sit amet nunc. Fusce massa nulla, ornare at mauris in, dapibus luctus orci. Aliquam erat volutpat. Duis pulvinar arcu orci, venenatis pellentesque augue bibendum sit amet." />
			<div className="selectors">
				{/* <header>
					<h2>Combinators</h2>
					<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu iaculis leo. Ut justo erat, mollis non massa non,
						volutpat lacinia magna. Nunc dapibus quis dolor quis semper. Morbi sollicitudin dapibus erat in lacinia. Curabitur
						commodo eros eget ipsum pretium laoreet. In volutpat laoreet ex, in iaculis turpis lobortis a. Phasellus a cursus
						enim,
						eget vehicula mauris. Praesent ultrices metus sit amet magna convallis, non blandit sapien varius. Mauris pharetra
						eros
						aliquam finibus facilisis. In massa nunc, bibendum sed facilisis et, elementum ac mi. Aliquam consectetur magna vel
						nunc tristique rhoncus.</p>
				</header> */}
				
				<div className="grid" data-col="3">
					<article className="adjacent-sibling">
						<h3>Adjacent sibling combinator</h3>
						<p>The + combinator selects adjacent siblings. This means that the second element directly follows the first, and both
						share the same parent.</p>
						<p><strong>Syntax:</strong> A + B</p>
						<p><strong>Example:</strong> h2 + p will match all &lt;p&gt; elements that directly follow an &lt;h2&gt;.</p>

						<hr />

						<h4>This is the headline</h4>
						<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque non euismod turpis. Ut vestibulum leo at turpis ornare fringilla. Vestibulum id lectus lacus. Praesent consequat, neque placerat aliquam sollicitudin, nibh neque varius sapien, faucibus scelerisque enim felis posuere libero.</p>
						<p>Tellus lacus, rhoncus imperdiet tincidunt ut, volutpat vitae tortor. Suspendisse ligula mauris, imperdiet mattis eros quis, vehicula mollis nibh. Integer in ligula posuere, mollis leo sed, fringilla orci. Phasellus sed justo feugiat, luctus leo ac, ornare lorem. Phasellus congue nulla nec velit rutrum finibus. Duis suscipit, velit vitae venenatis aliquet, diam tellus vestibulum ligula, ut hendrerit leo est at erat.</p>

						<pre>{`h4 + p {
		color: orange;
		font-weight: bold;
	}`}</pre>
					</article>

					<article className="general-sibling">
						<h3>General sibling combinator</h3>
						<p>The ~ combinator selects siblings. This means that the second element follows the first (though not necessarily immediately), and both share the same parent.</p>
						<p><strong>Syntax:</strong> A ~ B</p>
						<p><strong>Example:</strong> p ~ span will match all &lt;span&gt; elements that follow a &lt;p&gt;.</p>

						<hr />

						<h4>This is the headline</h4>
						<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. <span>Quisque non euismod turpis. Ut vestibulum leo at turpis ornare fringilla</span>. Vestibulum id lectus lacus. Praesent consequat, neque placerat aliquam sollicitudin, nibh neque varius sapien, faucibus scelerisque enim felis posuere libero.</p>

						<div>Quisque non euismod turpis. Ut vestibulum leo at turpis ornare fringilla.</div>

						<p>Tellus lacus, rhoncus imperdiet tincidunt ut, volutpat vitae tortor. Suspendisse ligula mauris, imperdiet mattis eros quis, vehicula mollis nibh. Integer in ligula posuere, mollis leo sed, fringilla orci. Phasellus sed justo feugiat, luctus leo ac, ornare lorem. Phasellus congue nulla nec velit rutrum finibus. Duis suscipit, velit vitae venenatis aliquet, diam tellus vestibulum ligula, ut hendrerit leo est at erat.</p>

						<pre>{`p ~ div {
		color: orange;
		font-weight: bold;
	}`}</pre>
					</article>

					<article className="child">
						<h3>Child combinator</h3>
						<p>The > combinator selects nodes that are direct children of the first element.</p>
						<p><strong>Syntax:</strong> A > B</p>
						<p><strong>Example:</strong> ul > li will match all &lt;li&gt; elements that are nested directly inside a &lt;ul&gt;</p>

						<hr />

						<h4>This is the headline</h4>
						<ul className="outside">
							<li>item</li>
							<li>item</li>
							<li>item</li>
							<li>
								<ul>
									<li>item</li>
									<li>item</li>
									<li>item</li>
								</ul>
							</li>
						</ul>

						<pre>{`li > ul > li {
		color: orange;
		font-weight: bold;
	}`}</pre>
					</article>
				</div>
			</div>
        </>
    )
}

export default Selectors;
