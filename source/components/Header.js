import * as React from 'react';
//import { scrollToTop } from 'react-scrollable-anchor';

var scrollToElement = require('scroll-to-element');

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
                <a className='link'  onClick={ () => {
                  if(this.state.blogClicked){
                    this.props.handleClick(); 

                    setTimeout(()=>{
                        scrollToElement('#intro', {duration: 0, offset: -200})
                    }, 50)
                      

                  } else {
                    scrollToElement('#intro', {duration: 500, offset: -50})
                 //   scrollToTop()
                  }
                  }}>Home</a>
      					{!this.state.blogClicked ? (<a className='link' onClick={ () => { scrollToElement('#projects', {duration: 500} ) } }>Projects</a>) : (null)}
                {!this.state.blogClicked ? (<a className='link' onClick={() => {this.props.handleClick(true); setTimeout(()=>{ scrollToElement('#blog-top', {duration: 0, offset: -500})}, 50) } }>Blog</a>) : (null)}
    				</nav>
    			</div>
  			</div>
		</header>
	}
}

