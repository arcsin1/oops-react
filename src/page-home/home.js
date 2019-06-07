
import React, {Component} from 'react'
import {observer} from 'mobx-react'
import HomeStore from './store-home'
import './home.styl'

@observer
class Home extends Component {
  constructor(props) {
    super(props)
    this.store = new HomeStore()
  }

  // componentDidMount() {
  //   setTimeout(() => {
  //     this.props
  //   }, 5000)
  // }

  // componentWillUnmount() {
  //   clearInterval(this.timer)
  // }
 

  render() {
    return (
      <div className="page-home">
        <div className="blue-sky" />
        <div className="sun">
          <div className="left-eye">
            <div className="left-eyelash" />
          </div>
          <div className="right-eye">
            <div className="right-eyelash" />
          </div>
          <div className="rays">
            <div className="beam" />
            <div className="beam" />
            <div className="beam" />
            <div className="beam" />
            <div className="beam" />
            <div className="beam" />
            <div className="beam" />
            <div className="beam" />
            <div className="beam" />
            <div className="beam" />
          </div>
        </div>
      </div>
    )
  }
}
export default Home
