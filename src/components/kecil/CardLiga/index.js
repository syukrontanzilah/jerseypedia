import React from 'react'
import { StyleSheet, Text, View, Image,TouchableOpacity } from 'react-native'
import { responsiveHeight, responsiveWidth, colors } from '../../../utils'

const CardLiga = ({liga}) => {
    return (
        <TouchableOpacity style={styles.card}>
            <Image
            style={styles.img}
            source={liga.gambar}
            />
            {/* <Text>{liga.nama}</Text> */}
        </TouchableOpacity>
    )
}

export default CardLiga

const styles = StyleSheet.create({
    card:{
        backgroundColor: colors.white,
        shadowColor: '#000',
        shadowOffset:{
            width:0,
            height:2
        },
        shadowOpacity:0.25,
        shadowRadius:3.84,
        elevation:5,
        padding:10,
        borderRadius:15,
    },
    img:{
        width: responsiveWidth(60),
        height: responsiveHeight(70)
    }
})
