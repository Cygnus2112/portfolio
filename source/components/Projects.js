import * as React from 'react';
//import ScrollableAnchor, { configureAnchors } from 'react-scrollable-anchor'
//configureAnchors({offset: -60, scrollDuration: 200})

export class Projects extends React.Component {
	render() {
		return <div id='projects'>
  			<div className='container'>
          
    			   <h1>Projects</h1>
         
  			</div>
    
  			<ul>
    			<li>
            <a href='https://play.google.com/store/apps/details?id=com.fencer' target="_blank">
      				<span className='project-image'><img src='/assets/fencer.jpg' alt='Fencer' width='355px' height='200px' /></span>
            </a>
            <p className='project-title'>Fencer</p>
            <div className='tech-stack'><span className='left-diamond'>&#9670; </span> <span style={{'paddingTop': '1px', 'fontStyle': 'italic'}}>React Native, Redux, Node.js, Express.js, MongoDB</span> <span className='right-diamond'> &#9670;</span></div>
    			</li>
    			<li>
            <a href='http://budgieapp.herokuapp.com/' target="_blank">
      				<span className='project-image'><img src='/assets/budgie.png' alt='Budgie' width='355px' height='200px' /></span>
            </a>
            <p className='project-title'>Budgie</p>
            <div className='tech-stack'><span className='left-diamond'>&#9670; </span> <span style={{'paddingTop': '1px', 'fontStyle': 'italic'}}>AngularJS, Bootstrap, HTML5, CSS3, Google Maps</span> <span className='right-diamond'> &#9670;</span></div>
    			</li>
        </ul>
        <ul>
        	<li>
            <a href='https://play.google.com/store/apps/details?id=com.beermeandroid' target="_blank">
      				<span className='project-image'><img src='/assets/beerme.png' alt='BeerMe!' width='355px' height='200px' /></span>
            </a>
            <p className='project-title'>BeerMe!</p>
            <div className='tech-stack'><span className='left-diamond'>&#9670; </span> <span style={{'paddingTop': '1px', 'fontStyle': 'italic'}}>React Native, Redux, Node.js, Express.js, MongoDB</span> <span className='right-diamond'> &#9670;</span></div>
    			</li>
        	<li>
            <a href='http://gameswap-app.herokuapp.com' target="_blank">
      				<span className='project-image'><img src='/assets/gameswap.png' alt='GameSwap' width='355px' height='200px' /></span>
            </a>
            <p className='project-title'>GameSwap</p>
            <div className='tech-stack'><span className='left-diamond'>&#9670; </span> <span style={{'paddingTop': '1px', 'fontStyle': 'italic'}}>AngularJS, Bootstrap, HTML5, CSS3, MySQL</span> <span className='right-diamond'> &#9670;</span></div>
    			</li>
  			</ul>
        <footer id='foot'>Copyright Thomas Leupp 2017</footer>
		</div>
	}
}