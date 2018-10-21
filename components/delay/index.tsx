import React from 'react'
import { observer } from 'mobx-react';
import {DelayPropsType  } from "./PropsType";
@observer
class Delay extends React.Component<DelayPropsType, any> {
  timer: any

  static defaultProps = {
    wait: 250
  }

  state = {
    waiting: true
  }

  componentDidMount() {
    this.timer = setTimeout(() => {
      this.setState({
        waiting: false
      })
    }, this.props.wait)
  }

  componentWillUnmount() {
    clearTimeout(this.timer)
  }

  render() {
    const {children } = this.props
    const {waiting} = this.state
    if (!waiting) {
      return children
    }
    return null
  }
}

export default Delay
