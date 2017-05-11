import * as React from 'react';

export class Header extends React.Component {
  constructor(props){
    super(props);

  }

	render(){
		return <header>
  			<div id='main-header'>
    			<div className='container'>
    				<nav>
                <a onClick={() => this.props.scrollToTop('intro')} >Home</a>
      					<a href='#'>Blog</a>
      					<a onClick={() => {console.log('clicked!'); this.props.scrollToTop('projects')}} >Projects</a>
    				</nav>
    			</div>
  			</div>
		</header>
	}
}

