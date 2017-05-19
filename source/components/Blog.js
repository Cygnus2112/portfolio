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
          <p>To get the most out of your React Native apps, it{"'"}s helpful to have a solid grasp of the component lifecycle. You see, every React Native component is born, does some stuff, and then dies. But don{"'"}t despair, because when a React Native component dies, it releases its memory, which other React Native components are then able to make use of. The entire process is summed up beautifully in this song from the hit Disney movie <em>The Lion King</em>:</p> 
          <p style={{"textAlign": "center"}}>
<iframe width="640" height="360" src="https://www.youtube.com/embed/GibiNy4d4gc" frameborder="0" allowfullscreen></iframe>
          </p>
          <p>There are three specific stages in the life of a React Native component: <span className='bl'>Mounting</span>, <span className='bl'>Updating</span>, and <span className='bl'>Unmounting</span>. Within each of these stages, React Native exposes lifecycle methods that allow you to refine the behavior of your component.</p>
          <p>At the first stage of a component{"'"}s journey, Mounting, there are two methods at our disposal: <span className='bl'>componentWillMount()</span> and <span className='bl'>componentDidMount()</span>.</p>
          <p className='section-title'>componentWillMount</p>
          <p>As you might guess, <span className='bl'>componentWillMount()</span> is invoked immediately before a component is mounted. You can use this method to initialize variables and any other aspects of your component{"'"}s default setup that don{"'"}t require access to mounted UI elements -- in other words, all the things you normally do in the component{"'"}s <span className='bl'>constructor()</span> method. In fact, best practice dictates that you use constructor() instead of componentWillMount().</p>
          <p className='code'>
            <code>
              {"constructor(props){"}
              <br />&nbsp;&nbsp;{"super(props);"}
              <br />&nbsp;&nbsp;{"this.state = {"}
              <br />&nbsp;&nbsp;&nbsp;&nbsp;{"latitude: null,"}
                <br />&nbsp;&nbsp;&nbsp;&nbsp;{"longitude: null"}
                <br />&nbsp;&nbsp;{"}"}
                 <br /> {"}"}
            </code>
          </p>
          <p>If you do decide to use componentWillMount(), know that it is only ever called once, and that calling setState() within this method <span className='bl'>will not trigger a re-render</span>.</p>
          <p className='section-title'>componentDidMount</p>
          
          <p><span className='bl'>componentDidMount()</span> is called immediately after a component is mounted. If you{"'"}re fetching data from a third-party API or setting up event listeners, this is the place to instantiate those operations. </p>
          <p>React Native exposes several APIs that allow you to hook into device features, including <span className='bl'>AppState</span>, <span className='bl'>BackHandler</span>, and <span className='bl'>Geolocation</span>, all of which use JavaScript{"'"}s familiar event listener syntax. For <a style={{"fontWeight": "600"}} href='https://play.google.com/store/apps/details?id=com.fencer' target="_blank">Fencer</a>, an Android app I built that enables users to create and share Snapchat-style Geofilters, I need to track a user{"'"}s location to determine if they{"'"}ve entered a geofence area. I utilized componentDidMount() to set up a watcher using the Geolocation API:</p>
          <p className='code'>
            <code>
              {"this.locationWatcher = null;"}
              <br />{"componentDidMount(){"} 
              <br />&nbsp;&nbsp;{"navigator.geolocation.watchPosition((pos) => {"} 
              <br />&nbsp;&nbsp;&nbsp;&nbsp;{"this.setState({"}
               <br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{"latitude: pos.coords.latitude,"}
               <br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{"longitude: pos.coords.longitude"}
               <br />&nbsp;&nbsp;&nbsp;&nbsp;{"})"} 
              <br />&nbsp;&nbsp;{"}"} 
              <br />{"}"}
            </code>
          </p>
          <p>Whenever you call setState() within componentDidMount(), <span className='bl'>it will trigger a re-render</span>.</p>
          <p className='section-title'>componentWillReceiveProps</p>
          <p>The first lifecycle method invoked in the Updating stage is <span className='bl'>componentWillReceiveProps()</span>. React is kind enough to give our components a little heads up to let them know whenever new props are on the way. We can use componentWillReceiveProps() whenever we want to update the state in response to prop changes.</p>
          <p>Fencer uses Airbnb{"'"}s <a style={{"fontWeight": "600"}} href='https://github.com/airbnb/react-native-maps' target="_blank">React Native Maps</a> for its geofencing interface and <a style={{"fontWeight": "600"}} href='https://developers.google.com/places/web-service/autocomplete' target="_blank">Google Place Autocomplete</a> to enable Geofilter creators to choose specific landmarks for their geofences. When a user chooses a new location using Google Place Autocomplete, the location info is passed down to a Map component, which re-centers according to the new coordinates.</p> 
          <p className='code'>
            <code>
              {"componentWillReceiveProps(nextProps){"}
              <br />&nbsp;&nbsp;{"if(nextProps.chosenLocation !== this.props.chosenLocation) {"}
              <br />&nbsp;&nbsp;&nbsp;&nbsp;{"this.recenterMap(nextProps.chosenLocation);"}
              <br />&nbsp;&nbsp;{"}"}
              <br />{"}"}
            </code>
          </p> 
          <p>You{"'"}ll notice I added a conditional <span className='bl'>if</span> statement to ensure chosenLocation only updates if the incoming props are different from the current ones. This is because React sometimes calls componentWillReceiveProps() <span className='bl'>even if the props have not changed</span>. </p> 
          <p>As with componentDidMount(), calling setState() within this method will trigger a re-render. It is not called during mounting.</p>
          <p className='section-title'>shouldComponentUpdate</p>
          <p>Resources can be pretty scarce on a mobile device, so it{"'"}s important to utilize every performance optimization at your disposal. React Native{"'"}s usual protocol is to call render() whenever props or state change. As you can imagine, this can get rather expensive if we{"'"}re dealing with lots of components. Thankfully we have the lifecycle method <span className='bl'>shouldComponentUpdate()</span>, which enables us to short-circuit the render() call if a state change or incoming props are irrelevant to a component{"'"}s UI. The method takes two parameters, <span className='bl'>nextProps</span> and <span className='bl'>nextState</span>, and returns a boolean value, which defaults to true.</p>
          <p className='code'>
            <code>{"shouldComponentUpdate(nextProps, nextState){"}
              <br />&nbsp;&nbsp;{"return nextProps.locationChanged "}
              <br />{"}"}
            </code>
          </p>
          <p>shouldComponentUpdate() is invoked before rendering when new props or state are being received. If it returns false, the remaining two lifecycle methods in the Updating phase, <span className='bl'>componentWillUpdate()</span> and <span className='bl'>componentDidUpdate()</span>, will not be called. You cannot call setState() inside this method.</p>
          <p className='section-title'>componentWillUpdate</p>
          <p><span className='bl'>componentWillUpdate()</span> is invoked immediately before rendering when new props or state are being received. Like shouldComponentUpdate(), it takes <span className='bl'>nextProps</span> and <span className='bl'>nextState</span> as parameters. You cannot call setState() inside this method.</p>
          <p>Though I{"'"}m certain a number of good use cases exists for this method, I must admit that I have yet to encounter one on any of the React Native apps I{"'"}ve worked on thus far.</p>
          <p className='section-title'>componentDidUpdate</p>

          <p><span className='bl'>componentDidUpdate()</span> is called immediately after a component has updated. It takes two parameters, <span className='bl'>prevProps</span> and <span className='bl'>prevState.</span> It can be used to update UI elements or initiate network requests in response to state or props changes. You can call setState() within this method.</p>
          <p className='section-title'>componentWillUnmount</p>
          <p>The final lifecycle method -- and the lone method invoked during the component{"'"}s Unmounting stage -- <span className='bl'>componentWillUnmount()</span>, is invoked immediately before a component is unmounted and destroyed. This is the place to cancel event listeners, debounce any setTimeouts or setIntervals, and do any other component cleanup.</p>
          <p className='code'>
            <code>
              {"componentWillUnmount(){"} 
              <br />&nbsp;&nbsp;{"navigator.geolocation.clearWatch(this.locationWatcher);"}
               <br />{"}"}
            </code>
          </p>
          <p>Judicious use of componentWillUnmount() will go a long way toward cutting down on memory leaks in your React Native app.</p>
          <p style={{"fontStyle": "italic", "textAlign": "center", "margin": "10px"}}>Thomas Leupp is a full-stack software engineer based in Los Angeles, California.</p>
        </div>
      </div>
    </div>
  }
}