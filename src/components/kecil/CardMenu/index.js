import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import { IconArrowRight } from '../../../assets'
import { colors, responsiveHeight, fonts } from '../../../utils'

const CardMenu = ({menu, navigation}) => {
    return (
        <TouchableOpacity 
        onPress = {()=>{
            navigation.navigate(menu.halaman)
        }}
        style={styles.container}>
            <View style={styles.view}>
               {menu.gambar}
            <Text style={styles.text}>{menu.nama}</Text>  
            </View>
           
            <IconArrowRight/>
        </TouchableOpacity>
    )
}

export default CardMenu

const styles = StyleSheet.create({
    container:{
        flexDirection:'row',
        backgroundColor:colors.white,
        marginTop:15,
        justifyContent:'space-between',
       shadowOffset:{
           width:0,
           height:2,
       },
       shadowOpacity:0.25,
       shadowRadius:3.84 ,
       elevation:5,
       marginHorizontal:30,
       paddingHorizontal:20,
       paddingVertical:responsiveHeight(15),
       borderRadius:10,
       alignItems:'center'
    },
    view:{
        flexDirection:'row',
        alignItems:'center'
    },
    text:{
        fontSize:18,
        fontFamily: fonts.primary.bold,
        marginLeft:20
    }
})
