import React from 'react'
import ReactDOM from 'react-dom'
import './index.scss'

import {
    HashRouter as Router,
    Route,
    Switch,
    Redirect,
  } from 'react-router-dom'

import Home from './page-home'


export default class Entry extends React.Component {
  render() {
    return (
        <Router>
            <Switch>
              <Redirect exact from="/" to="/home" />
              <Route path="/home" component={Home} />        
              <Route render={() => <div className="FBV FBAC FBJC" style={{fontSize: 100}}>404</div>} />
            </Switch>
        </Router>
    )
  }
}
ReactDOM.render(
  <Entry />,
  document.getElementById('root')
)
  
