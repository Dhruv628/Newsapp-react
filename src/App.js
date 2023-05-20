
import './App.css';
import React, { Component } from 'react'
import News from './components/News';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';

import LoadingBar from 'react-top-loading-bar'

export default class App extends Component {
  state=({
  progress:0
  })
  setProgress=(progress)=>{
    this.setState({progress: progress})
  }
  // pageSize= 12;
  apikey=process.env.REACT_APP_NEWSAPI
 
  render() {
    return (
      <div>
        <Router>
          <Navbar/>
          <LoadingBar
        color='#f11946'
        progress={this.state.progress}
        // onLoaderFinished={() => setProgress(0)}
      />
        <Routes>   
           
          <Route exact path="/" element={ <News setProgress={this.setProgress}  apikey={this.apikey} key="homePage" country="in" category="general"  />}/>
          <Route exact path="/buisness"  element={ <News setProgress={this.setProgress}  apikey={this.apikey} key="business" country="in"      category="business"   />}/>
          <Route exact path="/entertairnment"  element={ <News setProgress={this.setProgress}  apikey={this.apikey} key="entertainment" country="in"      category="entertainment"   />}/>
          <Route exact path="/general"  element={ <News setProgress={this.setProgress}  apikey={this.apikey} key="general" country="in" category="general" />}/>
          <Route exact path="/health"  element={ <News setProgress={this.setProgress}  apikey={this.apikey} key="health" country="in" category="health" />}/>
          <Route exact path="/science"  element={ <News setProgress={this.setProgress}  apikey={this.apikey} key="science" country="in" category="science" />}/>
          <Route exact path="/sports"  element={ <News setProgress={this.setProgress}  apikey={this.apikey} key="sports" country="in" category="sports" />}/>
          <Route exact path="/technology"  element={ <News setProgress={this.setProgress}  apikey={this.apikey} key="technology" country="in" category="technology" />}/>
        </Routes>
       
        </Router>
      </div>

    )
  }
}



