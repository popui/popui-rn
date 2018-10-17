import PropTypes from 'prop-types'
import React, { PureComponent } from 'react'
import { StyleSheet, View, ViewPropTypes } from 'react-native'
import { Popup, PopupHeader } from 'popui-rn/components/popup'
import PickerSection from './PickerSection'

/*
 * value: ['1', '2', '3']
 * options:
 * [
 *  { label: '北京', value: '1', children: [
 *    { label: '上海', value: '2', children: [
 *      { label: '天津', value: '3', children: [] }
 *    ] }
 *  ] },
 * ]
 */
const valueToOptions = (value, options) => {
    let tmp = options
    return value.map((val, idx) => {
        if (idx === 0) {
            return options
        }
        tmp = (tmp.filter(option => option.value === value[idx - 1])[0] || tmp[0] || {}).children || []
        return tmp
    })
}

const styles = StyleSheet.create({
    picker: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
    },
})

class Picker extends PureComponent {
    constructor(props) {
        super(props)
        this.state = { value: props.value }
    }

    public componentWillReceiveProps(nextProps) {
        this.setState({ value: nextProps.value })
    }

    public render() {
        const {
            visible = false,
            options = [],
            onChange,
            onClose,
            style,
            ...others,
        } = this.props
        let { value } = this.state

        const cascade = options.filter(item => item.children).length

        const _options = cascade ? valueToOptions(value, options) : options

        const _onChange = (val, idx) => {
            let result = value.map((item, _idx) => {
                if (idx === _idx) {
                    return val
                }
                return item
            })

            if (cascade) {
                const __options = valueToOptions(result, options)
                result = value.map((item, _idx) => {
                    if (_idx < idx) {
                        return item
                    }
                    if (_idx === idx) {
                        return val
                    }
                    return __options[_idx][0] ? __options[_idx][0].value : ''
                })
            }

            this.setState({ value: result })
        }

        // HACK: 设置初始值
        if (!value[0]) {
            value = _options.map(item => (item[0] ? item[0].value : ''))
        }

        const headerProps = {
            left: {
                label: '取消',
                onPress() {
                    onClose()
                },
            },
            right: {
                label: '完成',
                onPress() {
                    onChange(value)
                },
            },
        }

        return (
            <Popup
                visible={visible}
                onClose={onClose}
                {...others}
            >
                <PopupHeader {...headerProps} />
                <View style={[styles.picker, style]}>
                    {_options.map((item, idx) =>
                        <PickerSection
                            key={idx}
                            value={value[idx]}
                            options={item}
                            onChange={val => _onChange(val, idx)}
                        />,
                    )}
                </View>
            </Popup>
        )
    }
}

Picker.propTypes = {
    visible: PropTypes.bool,
    value: PropTypes.arrayOf(PropTypes.string).isRequired,
    options: PropTypes.array,
    onChange: PropTypes.func,
    onClose: PropTypes.func,
    style: ViewPropTypes.style,
}

export default Picker
