'use strict'

import React from 'react'
import PropTypes from 'prop-types'
import cloneReferencedElement from 'react-clone-referenced-element'
import { Image, PixelRatio } from 'react-native'

export default class RemoteImage extends React.Component {

    static propTypes = {
        ...Image.propTypes,
        source: PropTypes.shape({
            uri: PropTypes.string,
        }),
        sources: PropTypes.objectOf(Image.propTypes.source),
        preferredPixelRatio: PropTypes.number,
        renderImageElement: PropTypes.func,
    }

    static defaultProps = {
        preferredPixelRatio: PixelRatio.get(),
    }

    static getClosestHighQualitySource(sources, preferredPixelRatio) {
        const pixelRatios = Object.keys(sources)
        if (!pixelRatios.length) {
            return null
        }

        pixelRatios.sort((ratioA, ratioB) =>
            parseFloat(ratioA) - parseFloat(ratioB),
        )
        for (let ii = 0; ii < pixelRatios.length; ii++) {
            if (pixelRatios[ii] >= preferredPixelRatio) {
                return sources[pixelRatios[ii]]
            }
        }

        const largestPixelRatio = pixelRatios[pixelRatios.length - 1]
        return sources[largestPixelRatio]
    }

    setNativeProps(nativeProps) {
        this._image.setNativeProps(nativeProps)
    }

    render() {
        let {
            source,
            sources,
            preferredPixelRatio,
            renderImageElement,
            ...props,
        } = this.props
        const optimalSource = ResponsiveImage.getClosestHighQualitySource(
            sources,
            preferredPixelRatio,
        )
        if (optimalSource) {
            source = optimalSource
        }
        if (!source) {
            throw new Error(`Couldn't find an appropriate image source`)
        }
        if (renderImageElement) {
            const image = renderImageElement({ ...props, source })
            return cloneReferencedElement(image, {
                ref: component => {
                    this._image = component
                },
            })
        }

        return (
            <Image
                {...props}
                ref={component => {
                    this._image = component
                }}
                source={source}
            />
        )
    }
}
