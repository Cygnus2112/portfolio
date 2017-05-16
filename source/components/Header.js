import * as React from 'react';
import { scrollToTop } from 'react-scrollable-anchor';

export class Header extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      blogClicked: props.blogClicked
    }

  }

  componentWillReceiveProps(nextProps){
    if(nextProps.blogClicked !== this.props.blogClicked){
      this.setState({
        blogClicked: nextProps.blogClicked
      })
    }
  }

	render(){
		return <header>
  			<div id='main-header'>
    			<div className='container'>
    				<nav>
                <a className='link' href='#intro' onClick={ () => {
                  if(this.state.blogClicked){
                    this.props.handleClick(); 
                  } else {
                 //   scrollToTop()
                  }
                  }}>Home</a>
      					{!this.state.blogClicked ? (<a className='link' href='#projects-top' >Projects</a>) : (null)}
                {!this.state.blogClicked ? (<a className='link' href='#blog' onClick={() => {this.props.handleClick(true) } }>Blog</a>) : (null)}
    				</nav>
    			</div>
  			</div>
		</header>
	}
}

