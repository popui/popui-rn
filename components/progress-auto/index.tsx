import React, { PureComponent } from 'react'
import { observer } from 'mobx-react';
import Progress from './Progress'

export interface IAutoProgressProps {
  isLoading?: boolean
  beginProgressValue?: number // 起步值
  maxProgressValue?: number // 最大值, 超过此值不再变动
  interval?: number // 时间间隔
  delay?: number // 延迟时间, 此时间以后才开始
  progressValueIncreaseMultiplier?: number // 增长倍数
}

export interface IAutoProgressState {
  progressValue: number
  isLoading: boolean
}

@observer
class AutoProgress extends PureComponent<
  IAutoProgressProps,
  IAutoProgressState
> {
  intervalTimer: any
  loadingTimer: any
  static defaultProps = {
    isLoading: true,
    beginProgressValue: 1,
    maxProgressValue: 90 + Math.random() * 10,
    interval: 10,
    delay: 1000,
    progressValueIncreaseMultiplier: 0.005
  }

  constructor(props: any) {
    super(props)
    const { beginProgressValue } = props
    this.state = {
      progressValue: beginProgressValue,
      isLoading: false
    }
  }

  // run = () => {
  //   if (!this.state.isLoading || this.state.value > 97) {
  //     // 结束
  //     return
  //   }
  //   // 越来越慢
  //   const delay = Math.random() * 10
  //   const newTimeUnit = this.state.timeUnit + delay
  //   this.setState(
  //     {
  //       value: this.state.value + 1,
  //       timeUnit: newTimeUnit
  //     },
  //     () => {
  //       this.state.timer = setTimeout(this.run, newTimeUnit)
  //     }
  //   )
  // }

  render() {
    const { isLoading: isLoadingInProps } = this.props
    const { isLoading: isLoadingInState, progressValue } = this.state
    const isLoading = isLoadingInProps && isLoadingInState
    if (isLoading) {
      return <Progress value={progressValue} />
    }
    return null
  }

  updateProgressValue = () => {
    const { isLoading, progressValue } = this.state
    const { maxProgressValue, progressValueIncreaseMultiplier } = this.props
    if (!isLoading || progressValue > maxProgressValue) {
      // 结束
      clearInterval(this.intervalTimer)
      return
    }
    const randomValue =
      Math.random() * (100 - progressValue) * progressValueIncreaseMultiplier
    let newProgressValue = progressValue + randomValue
    // console.log(
    //   'newProgressValue:',
    //   newProgressValue,
    //   ' randomValue:',
    //   randomValue
    // )
    if (newProgressValue > maxProgressValue) {
      newProgressValue = maxProgressValue
      if (this.intervalTimer) {
        clearInterval(this.intervalTimer)
      }
    }
    this.setState({ progressValue: newProgressValue })
  }

  startInterval = () => {
    const { interval } = this.props
    this.intervalTimer = setInterval(() => {
      this.updateProgressValue()
    }, interval)
  }

  componentDidMount() {
    const { delay } = this.props
    this.loadingTimer = setTimeout(() => {
      this.setState({ isLoading: true }, () => {
        this.startInterval()
      })
    }, delay)
  }
  componentWillUnmount() {
    if (this.intervalTimer) {
      clearInterval(this.intervalTimer)
    }
    if (this.loadingTimer) {
      clearTimeout(this.loadingTimer)
    }
  }
}

export default AutoProgress
