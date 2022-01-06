import React, { Component } from 'react'
import { Text, StyleSheet, View, Image, Modal } from 'react-native'
import {SliderBox} from 'react-native-image-slider-box'
import { responsiveHeight, colors, responsiveWidth } from '../../../utils'
import ImageViewer from 'react-native-image-zoom-viewer'
// import Modal from 'react-native-image-zoom-viewer'


export default class JerseySlider extends Component {
    constructor(props){
        super(props)
        this.state = {
            openImage: false,
            previewImage : false
        }
    }

    clickPreview = (index) =>{
    this.setState({
    openImage: true,
    previewImage: [{
        url: '',
        props:{
            source: this.props.images[index]
        }
    }]
})
    }

    render() {
        const {images} = this.props
        const {openImage, previewImage} = this.state
        return (
            <View>
                {/* <Image style={{height:200, width:200}} source={images}/> */}
               <SliderBox
                images={images}
                // circleLoop
                sliderBoxHeight = {responsiveHeight(400)}	
                ImageComponentStyle={styles.jersey}
                dotStyle	= {styles.dotstyle}
                dotColor={colors.primary}
                imageLoadingColor	={colors.primary}
                onCurrentImagePressed = {(index)=>
                this.clickPreview(index)
                }
               />
               <Modal visible={openImage} transparent={true}>
                <ImageViewer imageUrls={previewImage} 
                backgroundColor={colors.primary}
                onClick={()=> this.setState({openImage: false})}
                enableSwipeDown
                onSwipeDown={()=> this.setState({openImage: false})}
                />
               </Modal>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    jersey:{
        marginTop:25,
        width: responsiveWidth(334),
    },
    dotstyle:{
        marginTop:-40
    },
 
})

