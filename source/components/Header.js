import * as React from 'react';

export class Header extends React.Component {
	render(){
		return <header>
  			<div id='main-header'>
    			<div className='container'>
      				<a href='#' className='logo'>Thomas Leupp</a>

    				<nav>
      					<a href='#'>Blog</a>
      					<a href='#'>Projects</a>
    				</nav>
    			</div>
  			</div>
		</header>
	}
}

