import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import { IconKeranjang, IconHome, IconArrowRight, IconBack, IconKeranjangPutih } from '../../../assets'
import { colors, fonts } from '../../../utils'

const TextIcon = ({icon, padding,onPress, title, fontSize}) => {
    const Icon = () =>{
        if(icon==="keranjang"){
            return <IconKeranjang/>
        }
        if(icon==="arrow-left"){
            return <IconBack/>
        } if(icon === "keranjang-putih"){
            return <IconKeranjangPutih/>
        }
        return <IconKeranjang/>
    }

    return (
       <TouchableOpacity 
       onPress={onPress}
       style={styles.tombol(padding)}>
           <Icon/>
    <Text style={styles.text(fontSize)}>{title}</Text>
       </TouchableOpacity>
    )
}

export default TextIcon

const styles = StyleSheet.create({
    tombol:(padding)=>({
        backgroundColor:colors.primary,
        alignItems:'center',
        justifyContent:'center',
        borderRadius:5,
        padding:padding,
        paddingHorizontal:12,
        flexDirection:'row'
    }),
    text:(fontSize)=>({
        color: colors.white,
        marginLeft:5,
        fontFamily: fonts.primary.bold,
        fontSize: fontSize? fontSize : 15
    })
})
