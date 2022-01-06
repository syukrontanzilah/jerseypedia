import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import {IconHome, IconHome2, IconProduct, IconProduct2, IconProfile, IconProfile2} from '../../../assets'
import { colors, fonts } from '../../../utils';


const TabItem = ({isFocused, onLongPress, onPress, label,}) => {
  const Icon = () =>{
    if(label === "Home"){
      return isFocused ? <IconHome/> : <IconHome2/>
    }
    if(label === "Jersey"){
      return isFocused ? <IconProduct2/> : <IconProduct/>
    }
    if(label === "Profile"){
      return isFocused ? <IconProfile2/> : <IconProfile/>
    }

    return <IconHome/>
  }
    return (
        <TouchableOpacity
        onPress={onPress}
        onLongPress={onLongPress}
        style={styles.conteiner}
      >
    <Icon/>
        <Text style={styles.text(isFocused)}>
          {label}
        </Text>
        
      </TouchableOpacity>
    )
}

export default TabItem

const styles = StyleSheet.create({
      text:(isFocused)=>({
        color: isFocused? colors.lightgray: colors.secondary,
        fontSize:11,
        marginTop:4,
        fontFamily: fonts.primary.regular
      }),
      conteiner:{
        alignItems:'center',

      }
})
