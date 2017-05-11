import * as React from 'react';
import ScrollableAnchor, { configureAnchors } from 'react-scrollable-anchor'
configureAnchors({offset: -60, scrollDuration: 200})

export class Projects extends React.Component {
	render() {
		return <div id='projects'>
  			<div className='container'>
          <ScrollableAnchor id={'projects-top'}>
    			   <h1>Projects</h1>
          </ScrollableAnchor>
  			</div>
    
  			<ul>
    			<li>
            <a href='https://play.google.com/store/apps/details?id=com.fencer'>
      				<span><img src='/assets/fencer.jpg' alt='Fencer' width='355px' height='200px' /></span>
            </a>
            <p className='project-title'>Fencer</p>
    			</li>
    			<li>
            <a href='http://budgieapp.herokuapp.com/'>
      				<span><img src='/assets/budgie.png' alt='Budgie' width='355px' height='200px' /></span>
            </a>
            <p className='project-title'>Budgie</p>
    			</li>
        </ul>
        <ul>
        	<li>
            <a href='https://play.google.com/store/apps/details?id=com.beermeandroid'>
      				<span><img src='/assets/beerme.png' alt='BeerMe!' width='355px' height='200px' /></span>
            </a>
            <p className='project-title'>BeerMe!</p>
    			</li>
        	<li>
            <a href='http://gameswap-app.herokuapp.com'>
      				<span><img src='/assets/gameswap.png' alt='GameSwap' width='355px' height='200px' /></span>
            </a>
            <p>GameSwap</p>
    			</li>
  			</ul>

		</div>
	}
}