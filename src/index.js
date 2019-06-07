import React from 'react'
import ReactDOM from 'react-dom'
import {
  HashRouter as Router,
  Route,
  Redirect,
} from 'react-router-dom'
import './common/common.styl'
import AnimatedRouter from './animated-router'
import Home from './page-home'
import Moon from './page-moon'
import './index.styl'

export default class Entry extends React.Component {
  render() {
    return (
      <AnimatedRouter>
        <Redirect exact from="/" to="/moon" />
        <Route path="/home" component={Home} /> 
        <Route path="/moon" component={Moon} />          
        <Route render={() => <div className="FBV FBAC FBJC" style={{fontSize: 100}}>404</div>} />
      </AnimatedRouter>
     
    )
  }
}
ReactDOM.render(
  <Router>
    <Entry />
  </Router>,
  document.getElementById('root')
)
