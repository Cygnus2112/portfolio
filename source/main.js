import * as React from 'react';
import * as ReactDOM from 'react-dom';

import { Header } from './components/Header';
import { Intro } from './components/Intro';
import { Projects } from './components/Projects';
import { Blog } from './components/Blog';

class App extends React.Component {
	constructor(){
    	super();

    	this.scrollToTop = this.scrollToTop.bind(this);
    	//this.handleBlogClick = this.handleBlogClick.bind(this);
    	this.handleClick = this.handleClick.bind(this);

    	this.state = {
    		blogClicked: false
    	}
  	}

  	handleClick(blog){
  		if(blog){
  			this.setState({
  				blogClicked: true
  			})
  		} else {
  			this.setState({
  				blogClicked: false
  			})
  		}

  	}

  	
  	// handleBlogClick(){

  	// }

  	scrollToTop(elem){
  		let e = document.getElementById(elem);

		e.scrollIntoView();
  	}

	render(){
		return <div>
			<Header blogClicked={this.state.blogClicked} handleClick={this.handleClick} scrollToTop={this.scrollToTop} />
			{this.state.blogClicked
				?
				(<Blog  />)
				:
				(<div><Intro  />
				<Projects /></div>)
			}
		</div>
	}
}

ReactDOM.render(<App/>, document.getElementById('app'));