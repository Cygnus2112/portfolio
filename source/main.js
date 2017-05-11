import * as React from 'react';
import * as ReactDOM from 'react-dom';

import { Header } from './components/Header';
import { Intro } from './components/Intro';
import { Projects } from './components/Projects';

class App extends React.Component {
	constructor(){
    	super();

    	this.scrollToTop = this.scrollToTop.bind(this);

  	}

  	scrollToTop(elem){
  		let e = document.getElementById(elem);

		e.scrollIntoView(false);
  	}

	render(){
		return <div>
			<Header scrollToTop={this.scrollToTop} />
			<Intro/>
			<Projects />
		</div>
	}
}

ReactDOM.render(<App/>, document.getElementById('app'));