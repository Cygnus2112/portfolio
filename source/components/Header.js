import * as React from 'react';
import { scrollToTop } from 'react-scrollable-anchor';

export class Header extends React.Component {
  constructor(props){
    super(props);

  }

	render(){
		return <header>
  			<div id='main-header'>
    			<div className='container'>
    				<nav>
                <a href='#intro' onClick={() => scrollToTop()} >Home</a>
      					<a href='#'>Blog</a>
      					<a href='#projects-top' >Projects</a>
    				</nav>
    			</div>
  			</div>
		</header>
	}
}

