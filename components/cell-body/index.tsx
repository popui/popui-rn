import  React from 'react'
import { StyleSheet, View, ViewStyle } from 'react-native'
import WeuiIcon from '../icon-weui'
import variables from '../style/themes/default'
import CellText from '../cell-text'

const styles = StyleSheet.create({
  cellBody: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  error: {
    flex: 1,
    color: themeVars.ColorWarn,
  },
  errorIcon:{
    marginLeft:5
  }
})


export interface CellBodyProps {
  error?: boolean;
  children?: React.ReactNode;
  style?: ViewStyle;
}

export interface CellBodyState {
}

@observer
export default class CellBody extends React.Component<CellBodyProps, CellBodyState> {

  private renderChildrenWithProps = () => {
    const { error, children } = this.props;
    const childrenWithProps = React.Children.map(children, (child:any) => {
      if (typeof child === 'string') {
        const textStyles = error ? styles.error : null
        return <CellText style={textStyles}>{child}</CellText>
      }
      return React.cloneElement(child, {
        error
      })
    })
    return childrenWithProps
  }
  public render() {
    const { error, style,...others } = this.props;
    return (
      <View style={[styles.cellBody, style, error ? { flexDirection: 'row' } : null]}
        {...others}>
        {this.renderChildrenWithProps()}
        {error && <WeuiIcon name="warn" style={styles.errorIcon}/>}
      </View>
    )
  }
}

