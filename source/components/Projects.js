import * as React from 'react';

export class Projects extends React.Component {
	render() {
		return <div id='projects'>
  			<div className='container'>
    			<h1>Projects</h1>
  			</div>
  			<ul>
    			<li>
      				<span><img src='/assets/fencer.jpg' alt='Fencer' width='355px' height='200px' /></span>
              <p>Fencer</p>
    			</li>
    			<li>
      				<span><img src='/assets/budgie.png' alt='Budgie' width='355px' height='200px' /></span>
              <p>Budgie</p>
    			</li>
        </ul>
        <ul>
        		<li>
      				<span><img src='/assets/beerme.png' alt='BeerMe!' width='355px' height='200px' /></span>
              <p>BeerMe!</p>
    			</li>
        		<li>
      				<span><img src='/assets/gameswap.png' alt='GameSwap' width='355px' height='200px' /></span>
              <p>GameSwap</p>
    			</li>
  			</ul>
		</div>
	}
}