import * as React from 'react';

export class Intro extends React.Component {
	render(){
		return <div id='intro'>
      <div className='cta container'>
        <h1>Thomas Leupp</h1>
        <h2>Full-Stack Web Developer</h2>
        <div className='icons'>
          <a href='https://github.com/Cygnus2112'><img src='/assets/github.png' alt='GitHub' width='50px' height='50px' /></a>
          <a href='https://www.linkedin.com/in/thomasleupp'><img src='/assets/linkedin.png' alt='linkedin' width='50px' height='50px' /></a>
        </div>
      </div>
    </div>

	}
}