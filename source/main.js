import * as React from 'react';
import * as ReactDOM from 'react-dom';

import { Header } from './components/Header';
import { Intro } from './components/Intro';

class App extends React.Component {
	render(){
		return <div>
			<Header/>
			<Intro/>
		</div>
	}
}

ReactDOM.render(<App/>, document.getElementById('app'));