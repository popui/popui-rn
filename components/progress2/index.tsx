import PropTypes from 'prop-types'
import React, { PureComponent } from 'react'
import { StyleSheet, TouchableOpacity, View, ViewPropTypes } from 'react-native'
import IconWeui from '../icon-weui'
import V from '../style/themes/default'

const styles = StyleSheet.create({
  progress: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  progressBar: {
    backgroundColor: V.ProgressBg,
    height: V.ProgressHeight,
    flex: 1
  },
  progressInnerBar: {
    width: 0,
    height: V.ProgressHeight,
    backgroundColor: V.ProgressColor
  },
  progressOpr: {
    marginLeft: 15
  }
})

export function Opration({ onCancel }: any) {
  if (!onCancel) {
    return null
  }
  return (
    <TouchableOpacity onPress={onCancel} style={styles.progressOpr}>
      <IconWeui name="cancel" />
    </TouchableOpacity>
  )
}

class Progress extends PureComponent {
  constructor(props: any) {
    super(props)
    this.state = {
      base: 1 // 倍数
    }
    this.onLayout = this.onLayout.bind(this)
  }

  public onLayout() {
    this.progressBar.measure((x, y, width) => {
      this.setState({
        base: width / 100
      })
    })
  }

  render() {
    const { onCancel, style } = this.props

    let { value = 0 } = this.props
    if (value < 0) {
      value = 0
    }
    if (value > 100) {
      value = 100
    }

    return (
      <View style={[styles.progress, style]}>
        <View
          style={styles.progressBar}
          ref={ref => {
            this.progressBar = ref
          }}
          onLayout={this.onLayout}
        >
          <View
            style={[
              styles.progressInnerBar,
              { width: value * this.state.base }
            ]}
          />
        </View>
        <Opration onCancel={onCancel} />
      </View>
    )
  }
}

Progress.propTypes = {
  value: PropTypes.number,
  onCancel: PropTypes.func,
  style: ViewPropTypes.style
}

export default Progress
