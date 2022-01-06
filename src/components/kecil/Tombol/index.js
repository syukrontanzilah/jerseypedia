import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import { IconKeranjang, IconHome, IconArrowRight, IconBack } from '../../../assets'
import { colors } from '../../../utils'
import TextOnly from './TextOnly'
import TextIcon from './TextIcon'

const Tombol = (props) => {
    const Icon = () =>{
        if(icon==="keranjang"){
            return <IconKeranjang/>
        }
        if(icon==="arrow-left"){
            return <IconBack/>
        }
        return <IconHome/>
    }
    const {icon, totalKeranjang, padding, type, onPress,} = props
    if(type==="text"){
        return <TextOnly {...props}/>
    } if(type==="textIcon"){
        return <TextIcon {...props}/>
    }
    return (
       <TouchableOpacity 
       onPress={onPress}
       style={styles.tombol(padding)}>
           <Icon/>
           {
               totalKeranjang && (
                  <View style={styles.notif}>
                    <Text style={styles.textNotif}>{totalKeranjang}</Text>
                  </View> 
               )
           }
       </TouchableOpacity>
    )
}

export default Tombol

const styles = StyleSheet.create({
    tombol:(padding)=>({
        backgroundColor:colors.white,
        alignItems:'center',
        justifyContent:'center',
        borderRadius:5,
        padding:padding,
        paddingHorizontal:12
    }),
    notif:{
        backgroundColor:'red',
        borderRadius:6,
        position:'absolute',
        top:5,
        right:5,
        width:12,
        height:12,
        justifyContent:'center',
        alignItems:'center'
    },
    textNotif:{
        color: colors.white,
        fontSize:10
    }
})
