// Usage: <IconPopui name="icon-name" size={20} color="#4F8EF7" />

import PropTypes from 'prop-types'
import React from 'react'
;
import { StyleSheet } from 'react-native'
import PureIconPopui from './PureIconPopui'

const styles = StyleSheet.create({
    icon: {
        alignSelf: 'center',
        textAlign: 'center',
    },
})

const iconConfigs = {
    default: {
        size: 24,
        color: '#000000',
    },
}

export interface Iprops {
    name: string,
    size: number,
    color: string,
    style: any,
}

/**
 * 带有默认值的 IconPopui
 * @param {any} name
 * @param {any} msg
 * @param {any} size
 * @param {any} color
 * @param {any} style
 * @param {any} others
 * @constructor
 */

function IconPopui(props: Iprops) {
    const {
        name = 'question',
        size,
        color,
        style,
        ...others,
    } = props
    // 默认配置
    const iconConfig = iconConfigs[name] ? iconConfigs[name] : iconConfigs['default']
    const iconStyles = [styles.icon, style]
    return (<PureIconPopui
        name={name}
        size={iconConfig.size}
        color={iconConfig.color}
        style={iconStyles}
        {...others}
    />)
}


IconPopui.propTypes = {
    name: PropTypes.string,
    size: PropTypes.number,
    color: PropTypes.string,
    style: PropTypes.any,
}

export default IconPopui

export {
  PureIconPopui
}
