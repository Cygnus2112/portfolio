import * as React from 'react';

export class Blog extends React.Component {
  constructor(props){
    super(props);

  }

  render(){
    return <div id='blog-container'>
      <div id='blog-text'>

        <h1 className='blog-title'>React Native Component Lifecycle</h1>
        <h4 id='byline'>By <a href='https://www.linkedin.com/in/thomasleupp' target="_blank">Thomas Leupp, Software Engineer</a></h4>

        <p>componentWillReceiveProps() is invoked before a mounted component receives new props. If you need to update the state in response to prop changes (for example, to reset it), you may compare this.props and nextProps and perform state transitions using this.setState() in this method. Note that React may call this method even if the props have not changed, so make sure to compare the current and next values if you only want to handle changes. This may occur when the parent component causes your component to re-render.React doesnt call componentWillReceiveProps with initial props during mounting. It only calls this method if some of components props may update. Calling this.setState generally doesnt trigger componentWillReceiveProps.



        </p>

      </div>
    </div>
  }
}