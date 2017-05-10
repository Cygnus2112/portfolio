import * as React from 'react';
import * as ReactDOM from 'react-dom';

import { Header } from './components/Header';
import { Intro } from './components/Intro';
import { Projects } from './components/Projects';

class App extends React.Component {
	render(){
		return <div>
			<Header/>
			<Intro/>
			<Projects/>
		</div>
	}
}

ReactDOM.render(<App/>, document.getElementById('app'));