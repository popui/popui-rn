// OverlayExample.js

'use strict'

import React from 'react'
import { View, Image, ScrollView, TouchableWithoutFeedback } from 'react-native'

import {
  ListRow,
  Overlay,
  CellLabel,
  WeuiButton,
  ToggleIconCheckbox,
} from '@popui/popui-rn'

const defaultColor = '#fff'

export default class BasicOverlayExample extends React.Component {
  customPopView: any
  overlayView: any
  overlayPopView: any
  overlayPullView: any
  constructor(props) {
    super(props)
    this.state = {
      black: true,
      shadow: false,
      showArrow: true,
    }
  }

  showDefault(transparent, modal, text) {
    let overlayView = (
      <Overlay.View
        style={{ alignItems: 'center', justifyContent: 'center' }}
        modal={modal}
        overlayOpacity={transparent ? 0 : null}
        ref={v => (this.overlayView = v)}
      >
        <View
          style={{
            backgroundColor: transparent ? '#333' : defaultColor,
            padding: 40,
            borderRadius: 15,
            alignItems: 'center',
          }}
        >
          <CellLabel type="danger" size="xl" text={text} />
          {modal ? <View style={{ height: 20 }} /> : null}
          {modal ? (
            <WeuiButton
              title="Close"
              onPress={() => this.overlayView && this.overlayView.close()}
            />
          ) : null}
        </View>
      </Overlay.View>
    )
    Overlay.show(overlayView)
  }

  showPop(type, modal, text) {
    let overlayView = (
      <Overlay.PopView
        style={{ alignItems: 'center', justifyContent: 'center' }}
        type={type}
        modal={modal}
        ref={v => (this.overlayPopView = v)}
      >
        <View
          style={{
            backgroundColor: defaultColor,
            minWidth: 260,
            minHeight: 180,
            borderRadius: 15,
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <CellLabel type="title" size="xl" text={text} />
          {modal ? <View style={{ height: 60 }} /> : null}
          {modal ? (
            <WeuiButton
              title="Close"
              onPress={() => this.overlayPopView && this.overlayPopView.close()}
            />
          ) : null}
        </View>
      </Overlay.PopView>
    )
    Overlay.show(overlayView)
  }

  showPopCustom(imageSource, fromView) {
    fromView.measure((x, y, width, height, pageX, pageY) => {
      let overlayView = (
        <Overlay.PopView
          style={{ alignItems: 'center', justifyContent: 'center' }}
          overlayOpacity={1}
          type="custom"
          customBounds={{ x: pageX, y: pageY, width, height }}
          ref={v => (this.customPopView = v)}
        >
          <TouchableWithoutFeedback
            onPress={() => this.customPopView && this.customPopView.close()}
          >
            <Image source={imageSource} resizeMode="cover" />
          </TouchableWithoutFeedback>
        </Overlay.PopView>
      )
      Overlay.show(overlayView)
    })
  }

  showPull(side, modal, text, rootTransform) {
    let overlayView = (
      <Overlay.PullView
        side={side}
        modal={modal}
        rootTransform={rootTransform}
        ref={v => (this.overlayPullView = v)}
      >
        <View
          style={{
            backgroundColor: defaultColor,
            minWidth: 300,
            minHeight: 260,
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <CellLabel type="title" size="xl" text={text} />
          {modal ? <View style={{ height: 60 }} /> : null}
          {modal ? (
            <WeuiButton
              title="Close"
              onPress={() =>
                this.overlayPullView && this.overlayPullView.close()
              }
            />
          ) : null}
        </View>
      </Overlay.PullView>
    )
    Overlay.show(overlayView)
  }

  showMulti() {
    let overlayView = (
      <Overlay.PullView modal={false}>
        <View
          style={{
            backgroundColor: defaultColor,
            minWidth: 200,
            minHeight: 260,
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <CellLabel type="title" size="xl" text="Overlay" />
          <View style={{ height: 60 }} />
          <WeuiButton
            title="New overlay"
            onPress={() => this.showDefault(false, true, 'New overlay')}
          />
        </View>
      </Overlay.PullView>
    )
    Overlay.show(overlayView)
  }

  renderPage() {
    let img = require('../images/faircup.jpg')
    return (
      <ScrollView style={{ flex: 1 }}>
        <View style={{ height: 20 }} />
        <ListRow
          title="Transparent"
          onPress={() => this.showDefault(true, false, 'Transparent')}
          topSeparator="full"
        />
        <ListRow
          title="Translucent"
          onPress={() => this.showDefault(false, false, 'Translucent')}
        />
        <ListRow
          title="Translucent modal"
          onPress={() => this.showDefault(false, true, 'Translucent modal')}
          bottomSeparator="full"
        />
        <View style={{ height: 20 }} />
        <ListRow
          title="Pull from bottom"
          onPress={() => this.showPull('bottom', false, 'Pull from bottom')}
          topSeparator="full"
        />
        <ListRow
          title="Pull from top"
          onPress={() => this.showPull('top', false, 'Pull from top')}
        />
        <ListRow
          title="Pull from left"
          onPress={() => this.showPull('left', false, 'Pull from left')}
        />
        <ListRow
          title="Pull from right"
          onPress={() => this.showPull('right', false, 'Pull from right')}
        />
        <ListRow
          title="Pull modal"
          onPress={() => this.showPull('bottom', true, 'Pull modal')}
        />
        <ListRow
          title="Pull and scale"
          onPress={() =>
            this.showPull('bottom', false, 'Pull and scale', 'scale')
          }
        />
        <ListRow
          title="Pull and translate"
          onPress={() =>
            this.showPull('left', false, 'Pull and translate', 'translate')
          }
          bottomSeparator="full"
        />
        <View style={{ height: 20 }} />
        <ListRow
          title="Pop zoom out"
          onPress={() => this.showPop('zoomOut', false, 'Pop zoom out')}
          topSeparator="full"
        />
        <ListRow
          title="Pop zoom in"
          onPress={() => this.showPop('zoomIn', false, 'Pop zoom in')}
        />
        <ListRow
          title="Pop modal"
          onPress={() => this.showPop('zoomOut', true, 'Pop modal')}
        />
        <ListRow
          title="Pop custom"
          detail={
            <Image
              style={{ width: 40, height: 40 }}
              source={img}
              resizeMode="cover"
              ref={v => (this.imgView = v)}
            />
          }
          onPress={() => this.showPopCustom(img, this.imgView)}
          bottomSeparator="full"
        />
        <View style={{ height: 20 }} />
        <ListRow
          title="Popover"
          titlePlace="top"
          detail={
            <View>
              <View
                style={{
                  paddingTop: 16,
                  paddingBottom: 8,
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                }}
              >
                <ToggleIconCheckbox
                  title="Black"
                  ref="black"
                  checked={this.state.black}
                  onChange={value => this.setState({ black: value })}
                />
                <ToggleIconCheckbox
                  title="Shadow"
                  ref="shadow"
                  checked={this.state.shadow}
                  onChange={value => this.setState({ shadow: value })}
                />
                <ToggleIconCheckbox
                  title="Show arrow"
                  ref="showArrow"
                  checked={this.state.showArrow}
                  onChange={value => this.setState({ showArrow: value })}
                />
              </View>
            </View>
          }
          topSeparator="full"
        />
        <View style={{ height: 20 }} />
        <ListRow
          title="Multi overlay"
          onPress={() => this.showMulti()}
          topSeparator="full"
          bottomSeparator="full"
        />
        <View style={{ height: 30 }} />
      </ScrollView>
    )
  }
}
