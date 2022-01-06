import React, { Component } from 'react'
import { Text, StyleSheet, View, TextInput } from 'react-native'
import { colors, responsiveHeight, fonts } from '../../../utils'
import {IconKeranjang, IconSearch} from '../../../assets'
import {Tombol, Jarak} from '../../../components'

export default class HeaderComponent extends Component {
    render() {
        const {navigation} = this.props
        return (
            <View style={styles.container}>
                <View style={styles.wrapper}>
                      <View style={styles.searchView}>
                           <IconSearch/>    
                   <TextInput placeholder="Cari Jersey" style={styles.input}/>
               </View>
               <Jarak width={10}/>
               <Tombol 
               onPress = {()=>navigation.navigate('Keranjang', )}
               icon="keranjang" totalKeranjang={9} padding={10}/>
                </View>
             
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        backgroundColor: colors.primary,
        height: responsiveHeight(125), 
        // borderBottomLeftRadius:40
    },
    wrapper:{
        marginTop:15,
        marginHorizontal:30,
        flexDirection:'row'
    },
    searchView:{
        backgroundColor: colors.white,
        borderRadius:5,
        paddingLeft:10,
        paddingRight:10,
        flexDirection:'row',
        alignItems:'center',
        flex:1
    },
    input:{
        fontSize:16,
        fontFamily: fonts.primary.regular,
        flex:1

    }
})
