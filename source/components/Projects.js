import * as React from 'react';

export class Projects extends React.Component {
	render() {
		return <div id='projects'>
  			<div className='container'>
    			<h2>Projects</h2>
  			</div>
  			<ul>
    			<li>
      				<img src='https://s3-us-west-2.amazonaws.com/s.cdpn.io/203277/denali_alaska.jpg' />     
    			</li>
    			<li>
      				<img src='https://s3-us-west-2.amazonaws.com/s.cdpn.io/203277/mirror-lake_california.jpg' />
    			</li>
        		<li>
      				<img src='https://s3-us-west-2.amazonaws.com/s.cdpn.io/203277/mirror-lake_california.jpg' />
    			</li>
        		<li>
      				<img src='https://s3-us-west-2.amazonaws.com/s.cdpn.io/203277/mirror-lake_california.jpg' />
    			</li>
  			</ul>
		</div>
	}
}