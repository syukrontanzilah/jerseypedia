import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import { colors, fonts } from '../../../utils'

const TextOnly = ({ padding, title,onPress, fontSize}) => {
    return (
       <TouchableOpacity 
       onPress={onPress}
       style={styles.tombol(padding)}>
<Text style={styles.text(fontSize)}>{title}</Text>
       </TouchableOpacity>
    )
}

export default TextOnly

const styles = StyleSheet.create({
    tombol:(padding)=>({
        backgroundColor:colors.primary,
        alignItems:'center',
        justifyContent:'center',
        borderRadius:5,
        paddingHorizontal:12,
        paddingVertical:10,
        padding:padding,

    }),
    text: (fontSize) => ({
        color:colors.white,
        fontFamily: fonts.primary.bold,
        fontSize: fontSize ? fontSize : 14
    })

})
