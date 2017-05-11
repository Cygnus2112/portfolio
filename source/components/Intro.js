import * as React from 'react';
import ScrollableAnchor, { configureAnchors } from 'react-scrollable-anchor';

//        <ScrollableAnchor id={'intro-top'}>

export class Intro extends React.Component {
	render(){
		return <div id='intro'>
      <div className='cta container'>

          <h1 style={{'font-size': '50px'}}>Thomas Leupp</h1>

        <h2>Full-Stack Web & Mobile Developer</h2>
        <div className='icons'>
          <a href='https://github.com/Cygnus2112'><img src='/assets/github.png' alt='GitHub' width='50px' height='50px' /></a>
          <a href='https://www.linkedin.com/in/thomasleupp'><img src='/assets/linkedin.png' alt='linkedin' width='50px' height='50px' /></a>
        </div>
      </div>
    </div>

	}
}