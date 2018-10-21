import React from 'react'
import PropTypes from 'prop-types'

export interface IProps {
    themeVariables: object
    children?: React.ReactElement<any>
}

/**
 * 把 props 中的 themeVariables 转换到 context
 */
@observer
export default class ThemeProvider extends React.Component<IProps, any> {
    static propTypes = {
        themeVariables: PropTypes.object.isRequired,
    }

    static childContextTypes = {
        themeVariables: PropTypes.object,
    }

    getChildContext() {
        return {
            themeVariables: this.props.themeVariables,
        }
    }

    render() {
        const { children } = this.props
        if (!children) {
            return null
        }
        return React.Children.only(children)
    }
}
