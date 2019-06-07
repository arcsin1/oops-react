import React, {Component} from 'react'
 
const asyncComponent = importComponent => class extends Component {
  constructor() {
    super()
    this.state = {
      component: null,
    }
  }

  componentDidMount() {
    importComponent()
      .then(cp => {
        this.setState({component: cp.default})
      })
  }

  render() {
    const {component} = this.state
    const C = component
    return C ? <C {...this.props} /> : null
  }
}
 
export default asyncComponent
