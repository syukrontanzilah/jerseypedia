import React, { Component } from 'react'
import { Text, StyleSheet, View } from 'react-native'
import { Slider1, Slider2 } from '../../../assets'
import {SliderBox} from 'react-native-image-slider-box'
import {responsiveHeight, responsiveWidth, colors} from '../../../utils'

export default class BannerSlider extends Component {
    constructor(props){
        super(props)
        this.state = {
            images: [Slider1, Slider2, Slider1]
        }
    }
    render() {
        return (
            <View style={styles.container}>
              <SliderBox images={this.state.images} 
              autoplay 
              circleLoop
              sliderBoxHeight = {responsiveHeight(132)}	
              ImageComponentStyle={styles.slider}
              dotStyle	= {styles.dotstyle}
              dotColor={colors.primary}
              imageLoadingColor	={colors.primary}
              />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        marginTop: -15,

    },
    slider:{
        borderRadius:10,
        width: responsiveWidth(354)
    },
    dotstyle:{
        width:10,
        height:5,
        borderRadius:5
    }
})
