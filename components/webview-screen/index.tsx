import React, { PureComponent } from 'react'
import { Platform, View, WebView } from 'react-native'
import AutoProgress from '../progress-auto'
import Menu, {
  MenuContext,
  MenuOption,
  MenuOptions,
  MenuTrigger
} from 'react-native-popup-menu'
import Toast from '../toast'

import CONSTANTS from './constants'

class WebViewScreen extends PureComponent {
  static navigatorButtons = {
    leftButtons: [
      {
        id: CONSTANTS.MENUS.GOBACK,
        title: 'Back',
        disabled: false,
        showAsAction: 'ifRoom',
        testID: 'test_back'
      },
      {
        id: CONSTANTS.MENUS.CLOSE,
        title: 'Close',
        disabled: false,
        showAsAction: 'ifRoom',
        testID: 'test_close'
      }
    ],
    rightButtons: [
      {
        id: CONSTANTS.MENUS.MORE,
        title: 'More',
        disabled: false,
        showAsAction: 'ifRoom',
        testID: 'test_more'
      }
    ]
  }
  componentWillUnmount = () => {
    if (this.state.timer) {
      clearInterval(this.state.timer)
    }
  }
  onError = e => {
    console.log('onError e:', e)
  }
  onLoadEnd = () => {
    if (this.state.loading) {
      this.setState({
        loading: false
      })
    }
  }
  onLoadStart = () => {
    if (!this.state.loading) {
      this.setState({
        loading: true
      })
    }
  }
  onNavigatorEvent = event => {
    if (event.type === 'DeepLink') {
    } else {
      switch (event.id) {
        case CONSTANTS.MENUS.CLOSE:
          this.dismissModal()
          break
        case CONSTANTS.MENUS.GOBACK:
          this.goBack()
          break
        case CONSTANTS.MENUS.GOFORWARD:
          this.goForward()
          break
        case CONSTANTS.MENUS.RELOAD:
          this.reload()
          break
        case CONSTANTS.MENUS.MORE:
          this.toggleMoreMenuShow()
          // this.showShareActionSheet();
          break
        default:
          break
      }
    }
  }
  onShouldStartLoadWithRequest = event => {
    return true
  }
  goBack = () => {
    if (this.state.canGoBack) {
      this.refs[CONSTANTS.REFS.WEBVIEW].goBack()
    } else {
      this.dismissModal()
    }
  }
  goForward = () => {
    this.refs[CONSTANTS.REFS.WEBVIEW].goForward()
  }
  reload = () => {
    this.refs[CONSTANTS.REFS.WEBVIEW].reload()
  }
  copyUrl = () => {
    this.showSuccessToast('Copy Success!')
  }
  openInBrowser = () => {}
  showShareActionSheet = () => {
    const options = {
      url: this.state.url,
      message: 'message to go with the shared url',
      subject: null,
      androidActionSheetName: CONSTANTS.ACTIONSHEETS.SHARE
    }
    if (Platform.OS === 'ios') {
      options.subject = 'a subject to go in the email heading'
    }
    // ActionSheet.showShareActionSheetWithOptions(
    //   options,
    //   (error) => alert(error),
    //   (success, method) => {
    //     this.showSuccessToast("Share Success!");
    //   }
    // );
  }
  toggleMoreMenuShow = () => {
    this.refs[CONSTANTS.REFS.MOREMENU].toggleMenu(CONSTANTS.MENUS.MORE)
    // this.setState({
    //   moreMenuVisible: !this.state.moreMenuVisible
    // });
  }
  closeMoreMenu = () => {
    this.refs[CONSTANTS.REFS.MOREMENU].closeMenu(CONSTANTS.MENUS.MORE)
  }
  onMoreMenuOptionSelect = value => {
    switch (value) {
      case CONSTANTS.MENUS.GOBACK:
        this.goBack()
        break
      case CONSTANTS.MENUS.GOFORWARD:
        this.goForward()
        break
      case CONSTANTS.MENUS.RELOAD:
        this.reload()
        break
      case CONSTANTS.MENUS.COPYURL:
        this.copyUrl()
        break
      case CONSTANTS.MENUS.SHARE:
        this.showShareActionSheet()
        break
      default:
        break
    }
    this.closeMoreMenu()
  }
  onNavigationStateChange = navState => {
    // Todo:
    // navState.canGoBack,navState.canGoForward 在 SPA 页面中不会改变
    this.setState(
      {
        canGoBack: navState.canGoBack,
        canGoForward: navState.canGoForward,
        url: navState.url,
        title: navState.title,
        loading: navState.loading
      },
      () => {}
    )
  }
  componentDidMount = () => {
    // We can use the public context API to open/close/toggle the menu.
    // setInterval(() => {
    //   console.log("this.refs[CONSTANTS.REFS.MOREMENU]:",this.refs[CONSTANTS.REFS.MOREMENU]);
    //  this.refs[CONSTANTS.REFS.MOREMENU].toggleMenu(CONSTANTS.MENUS.MORE);
    // }, 2000);
  }
  showSuccessToast = title => {
    this.setState({
      successToastVisible: true,
      successToastTitle: title
    })
    this.state.toastTimer = setTimeout(() => {
      this.setState({
        successToastVisible: false,
        successToastTitle: ''
      })
    }, 2000)
  }

  constructor(props) {
    super(props)
    this.state = {
      title: 'Loading...',
      canGoBack: false,
      canGoForward: false,
      loading: true,
      moreMenuSelected: '',
      moreMenuVisible: true,
      successToastVisible: false,
      successToastTitle: ''
    }
    const { navigatorStyle, navigatorButtons } = this.props

    // 导航事件绑定
    this.props.navigator.setOnNavigatorEvent(this.onNavigatorEvent)
  }

  onMessage(e) {
    const message = e.nativeEvent.data
    console.log('WebView onMessage e:', e, ' message:', message)
  }

  render() {
    const { source, ...other } = this.props
    // 设置 nav 标题
    this.setTitle({
      title: this.state.title
    })
    const moreMenu = (
      <Menu
        style={styles.moreMenuContainer}
        onSelect={this.onMoreMenuOptionSelect}
        name={CONSTANTS.MENUS.MORE}
      >
        <MenuTrigger />
        <MenuOptions customStyles={styles.moreMenuOptions}>
          <MenuOption
            key={CONSTANTS.MENUS.GOBACK}
            value={CONSTANTS.MENUS.GOBACK}
            style={{ borderTopWidth: 0 }}
            text="Go Back"
          />
          <MenuOption
            key={CONSTANTS.MENUS.GOFORWARD}
            value={CONSTANTS.MENUS.GOFORWARD}
            text="Go Forward"
          />
          <MenuOption
            key={CONSTANTS.MENUS.RELOAD}
            value={CONSTANTS.MENUS.RELOAD}
            disabled={this.state.loading}
            customStyles={styles.moreMenuOption}
            text="Refresh"
          />
          <MenuOption
            key={CONSTANTS.MENUS.COPYURL}
            value={CONSTANTS.MENUS.COPYURL}
            text="Copy Url"
          />
          <MenuOption
            key={CONSTANTS.MENUS.OPENINBROWSER}
            value={CONSTANTS.MENUS.OPENINBROWSER}
            text="Open In Browser"
          />
          <MenuOption
            key={CONSTANTS.MENUS.SHARE}
            value={CONSTANTS.MENUS.SHARE}
            text="Share"
          />
        </MenuOptions>
      </Menu>
    )

    return (
      <View style={[styles.scrollViewContentContainer]}>
        <MenuContext
          ref={CONSTANTS.REFS.MOREMENU}
          style={styles.moreMenuContext}
        >
          {this.state.loading ? <AutoProgress /> : null}
          {this.state.moreMenuVisible ? moreMenu : null}
          <WebView
            ref={CONSTANTS.REFS.WEBVIEW}
            automaticallyAdjustContentInsets={true}
            onError={() => {
              this.onError
            }}
            onLoadEnd={this.onLoadEnd}
            onLoadStart={this.onLoadStart}
            javaScriptEnabled={true}
            onNavigationStateChange={this.onNavigationStateChange}
            source={source}
            startInLoadingState={true}
            style={styles.webView}
            domStorageEnabled={true}
            allowsInlineMediaPlayback={true}
            bounces={true}
            decelerationRate={'normal'}
            onShouldStartLoadWithRequest={this.onShouldStartLoadWithRequest}
            scrollEnabled={true}
            dataDetectorTypes={'all'}
            {...other}
          />
          <Toast icon="success_no_circle" show={this.state.successToastVisible}>
            {this.state.successToastTitle}
          </Toast>
        </MenuContext>
      </View>
    )
  }
}

const styles = {
  scrollViewContentContainer: {
    flex: 1,
    backgroundColor: '#f8f8f8'
  },
  webView: {
    backgroundColor: 'rgba(255,255,255,0.8)',
    height: 1000
  },
  moreMenuContext: {
    height: 1000
  },
  moreMenuContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end'
  },
  moreMenuOptions: {
    optionsContainer: {},
    optionsWrapper: {
      paddingTop: 5,
      paddingBottom: 5
    },
    optionWrapper: {
      paddingTop: 15,
      paddingBottom: 15,
      paddingLeft: 15,
      borderTopColor: '#eeeeee',
      borderTopWidth: 1
    },
    optionTouchable: {
      underlayColor: '#eeeeee',
      activeOpacity: 40
    },
    optionText: {
      color: 'black'
    }
  },
  moreMenuOption: {}
}

export default WebViewScreen
