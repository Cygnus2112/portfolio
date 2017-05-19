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
          
          <p>componentDidMount() is called immediately after a component is mounted. If you{"'"}re fetching data from a third-party API or setting up event listeners, this is the place to instantiate those operations. </p>
          <p>React Native exposes several APIs that allow you to hook into device features, including AppState, BackHandler, and Geolocation, all of which use JavaScript{"'"}s familiar event listener syntax. For Fencer, an Android app I built that enables users to create and share Snapchat-style Geofilters, I need to track a user{"'"}s location to determine if they{"'"}ve entered a geofence area. I utilized componentDidMount() to set up a watcher using React Native{"'"}s Geolocation API:</p>
          <p className='code'>
            <code>
              {"this.locationWatcher = null; componentDidMount(){ navigator.geolocation.watchPosition((pos) => { this.setState({latitude: pos.coords.latitude,longitude: pos.coords.longitude})}}"}
            </code>
          </p>
          <p>Whenever you call setState() within componentDidMount(), it will trigger a re-render.</p>
          <p className='section-title'>componentWillReceiveProps</p>
          <p>The first lifecycle invoked in the Updating phase is componentWillReceiveProps(). React is kind enough to give our components a little heads up to let them know whenever new props are on the way. We can use componentWillReceiveProps() whenever we want to update the state in response to prop changes.</p>
          <p>Fencer uses AirBnb{"'"}s React Native Maps for its geofencing interface and Google Places Autocomplete to allow Geofilter creators to choose specific landmarks for their geofences. When a user chooses a new location using Google Places Autocomplete, the location info is passed down to a Map component, which re-centers according to the new coordinates.</p> 
          <p className='code'>
            <code>{"componentWillReceiveProps(nextProps){if(nextProps.chosenLocation !== this.props.chosenLocation) {this.reCenterMap(nextProps.chosenLocation);}}"}
            </code>
          </p> 
          <p>You{"'"}ll notice I added a conditional if statement to ensure chosenLocation only updates if the incoming data is different. This is because React sometimes calls componentWillReceiveProps() even if the props have not changed. </p> 
          <p>As with componentDidMount(), calling setState() within this method will trigger a re-render. It is not called during mounting.</p>
          <p className='section-title'>shouldComponentUpdate</p>
          <p>Resources can be pretty scarce on a mobile device, so it{"'"}s important to utilize every performance optimization at your disposal. React Native{"'"}s usual protocol is to call render() whenever props or state change. As you can imagine, this can get rather expensive if we{"'"}re dealing with lots of components. Thankfully we have the lifecycle method shouldComponentUpdate(), which enables us to short-circuit the render() call if a state change or incoming props are irrelevant to a component{"'"}s UI. The method takes two parameters, nextProps and nextState, and returns a boolean value, which defaults to true.</p>
          <p>shouldComponentUpdate() is invoked before rendering when new props or state are being received. If it returns false, the remaining two lifecycle methods in the Updating phase, componentWillUpdate() and componentDidUpdate(), will not be called. You cannot call setState() inside this method.</p>
          <p className='section-title'>componentWillUpdate</p>
          <p>componentWillUpdate() is invoked immediately before rendering when new props or state are being received. Like shouldComponentUpdate(), it takes nextProps and nextState as parameters. You cannot call setState() inside this method.</p>
          <p>Though I{"'"}m certain a number of good use cases exists for this method, I must admit that I have yet to encounter one on any of the React Native apps I{"'"}ve worked on thus far.</p>
          <p className='section-title'>componentDidUpdate</p>

          <p>componentDidUpdate() is called immediately after a component has updated. It takes two parameters, prevProps and prevState. It can be used to update UI elements or initiate network requests in response to state or props changes. You can call setState within this method.</p>
          <p className='section-title'>componentWillUnmount</p>
          <p>The final lifecycle method, componentWillUnmount(), is invoked immediately before a component is unmounted and destroyed. This is the place to cancel event listeners, debounce any setTimeouts or setIntervals, and do any other cleanup to avoid memory leaks.</p>
          <p>
            <code>
              {"componentWillUnmount(){navigator.geolocation.clearWatch(locationWatcher);}"}
            </code>
          </p>

        </div>
      </div>
    </div>
  }
}