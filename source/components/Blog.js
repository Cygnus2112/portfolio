import * as React from 'react';

export class Blog extends React.Component {
  constructor(props){
    super(props);

  }

  render(){
    return <div>
    <div id='blog-top'></div>
    <div id='blog-container'>
        <div id='blog-text'>
          <h1 className='blog-title'>A Guide to the React Native Component Lifecycle</h1>
          <h4 id='byline'>By <a href='https://www.linkedin.com/in/thomasleupp' target="_blank">Thomas Leupp, Software Engineer</a></h4>
          <p>To get the most out of your React Native apps, it{"'"}s helpful to have a solid grasp of the component lifecycle. You see, every React Native component is born, does some stuff, and then dies. But don{"'"}t despair, because when a React Native component dies, it releases its memory, which other React Native components then make use of. The entire process is summed up beautifully in this song from the hit Disney movie <em>The Lion King</em>:</p> 
          <p>There are three specific stages in the life of a React Native component: Mounting, Updating, and Unmounting. Within each of these stages, React Native exposes lifestyle methods that allow you to refine the behavior of your component.</p>
          <p>At the first stage of our journey, Mounting, there are two methods at your disposal: componentWillMount() and componentDidMount().</p>
          <p className='section-title'>componentWillMount</p>
          <p>As you might guess, componentWillMount() is invoked immediately before a component is mounted. You can use this method to initialize variables and any other aspects of your component{"'"}s default setup that don{"'"}t require access to mounted UI elements -- in other words, all the things you normally do in the component{"'"}s constructor() method. In fact, best practice dictates that you use constructor() instead of componentWillMount().</p>
          <p>If you do decide to use componentWillMount(), know that it is only ever called <span className='bl'>once</span>, and that calling setState() within this method <span className='bl'>will not trigger a re-render</span>.</p>
          <p className='section-title'>componentDidMount</p>
          <p>Immediately after a component is mounted and its render() method is first called, componentDidMount().</p>
          <p className='section-title'>componentWillReceiveProps</p>
          <p>componentWillReceiveProps() is invoked before a mounted component receives new props.</p> 
          <p>
            <code>{"class Greeting extends React.Component {"}
                  {" render() {"}
                  {"   return <h1>Hello, {this.props.name}</h1>;"}
                  {"}"}
                  {"}"}
            </code>
          </p> 
          <p>If you need to update the state in response to prop changes (for example, to reset it), you may compare this.props and nextProps and perform state transitions using this.setState() in this method.</p> 
          <p>Note that React may call this method even if the props have not changed, so make sure to compare the current and next values if you only want to handle changes. This may occur when the parent component causes your component to re-render.React doesnt call componentWillReceiveProps with initial props during mounting. It only calls this method if some of components props may update. Calling this.setState generally doesnt trigger componentWillReceiveProps.</p>
          <p className='section-title'>shouldComponentUpdate</p>
          <p>I probably should use this one, but I dont.</p>
          <p className='section-title'>componentWillUpdate</p>
          <p>Never use this one.</p>

          <p className='section-title'>componentDidUpdate</p>

          <p>Never use this one either.</p>
          <p className='section-title'>componentWillUnmount</p>
          <p>I do use this one, but I dont feel like talking about it.</p>
        </div>
      </div>
    </div>
  }
}