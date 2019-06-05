
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
  //   this.timer = setInterval(() => {
  //     this.changeSun()
  //   }, 1000)
  // }

  // componentWillUnmount() {
  //   clearInterval(this.timer)
  // }
 

  render() {
    return (
      <div className="page-home FBH FBAC FBJC">
        
        <div className="space FB1">
          <div className="star">
            <div className="space__star space__star--shooting" />
            <div className="space__star space__star--1 space__star--small" />
            <div className="space__star space__star--2 space__star--small" />
            <div className="space__star space__star--3 space__star--small" />
            <div className="space__star space__star--4 space__star--medium" />
            <div className="space__star space__star--5 space__star--small" />
            <div className="space__star space__star--6 space__star--small" />
            <div className="space__star space__star--7 space__star--big" />
            <div className="space__star space__star--8 space__star--medium" />
            <div className="space__star space__star--9 space__star--small" />
            <div className="space__star space__star--10 space__star--small" />
            <div className="space__star space__star--11 space__star--small" />
            <div className="space__star space__star--12 space__star--medium" />
            <div className="space__star space__star--13 space__star--small" />
            <div className="space__star space__star--14 space__star--big" />
            <div className="space__star space__star--15 space__star--small" />
            <div className="space__star space__star--16 space__star--medium" />
            <div className="space__star space__star--17 space__star--small" />
            <div className="space__star space__star--18 space__star--small" />
            <div className="space__star space__star--19 space__star--small" />
            <div className="space__star space__star--20 space__star--medium" />
            <div className="space__star space__star--21 space__star--big" />
            <div className="space__star space__star--22 space__star--small" />
            <div className="space__star space__star--23 space__star--small" />
            <div className="space__star space__star--24 space__star--medium" />
            <div className="space__star space__star--25 space__star--small" />
            <div className="space__star space__star--26 space__star--small" />
            <div className="space__star space__star--27 space__star--small" />
            <div className="space__star space__star--28 space__star--medium" />
            <div className="space__star space__star--29 space__star--small" />
          </div>
        </div>
        <div className="moon">
          <div className="love">
            <div className="love__heart love__heart--1" />
            <div className="love__heart love__heart--2" />
            <div className="love__heart love__heart--3" />
          </div>
          <div className="moon__container">
            <div className="moon__crater moon__crater--1 moon__crater--small" />
            <div className="moon__crater moon__crater--2 moon__crater--small" />
            <div className="moon__crater moon__crater--3 moon__crater--small" />
            <div className="moon__crater moon__crater--4 moon__crater--medium" />
            <div className="moon__crater moon__crater--5 moon__crater--medium" />
            <div className="moon__crater moon__crater--6 moon__crater--big" />
            <div className="moon__face">
              <div className="moon__eye moon__eye--left" />
              <div className="moon__eye moon__eye--right" />
              <div className="moon__cheek moon__cheek--left" />
              <div className="moon__cheek moon__cheek--right" />
              <div className="moon__smile" />
            </div>
          </div>
        </div>
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
