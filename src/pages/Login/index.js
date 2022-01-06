import React, { Component } from 'react'
import { Text, StyleSheet, View, TouchableOpacity } from 'react-native'
import { Logo, LogoUtama } from '../../assets/images'
import {colors, responsiveHeight, responsiveWidth, fonts} from '../../utils'
import {Inputan, Tombol, Jarak} from '../../components'

export default class Login extends Component {
    render() {
        return (
            <View style={styles.page}>
                <View style={styles.logoView}>
                <LogoUtama/>
                </View>

                <View style={styles.cardLogin}>
<Inputan label="Email"/>
<Inputan label="Password" secureTextEntry/>
<Jarak height={25}/>
<Tombol 
onPress={()=>{alert('login ya')}}
title="Login" 
type="text" 
padding={15} 
fontSize={18}
/>

<View style={styles.register}>
    <Text style={styles.textTanya}>Belum punya akun ?</Text>
    <TouchableOpacity
    onPress={()=> {this.props.navigation.navigate('Register1')}}
    >
    <Text style={styles.textBiru}>Register</Text>
    </TouchableOpacity>

</View>
                </View>


            </View>
        )
    }
}

const styles = StyleSheet.create({
    page:{
        backgroundColor: colors.white,
        flex:1,
        justifyContent:'center'
    },
    logoView:{
        alignItems:'center',
        marginBottom:20
    },
    cardLogin:{
        marginHorizontal:responsiveWidth(30),
        marginBottom: responsiveHeight(50),
        shadowColor:'#000',
        // shadowOffset:{
        //     width:0,
        //     height:2
        // },
        // shadowOpacity:0.25,
        // shadowRadius:3.84,
        // elevation: 4,
        padding:30,
        borderRadius:20,
        borderColor:colors.primary,
        borderWidth:1

    },
    register:{
        justifyContent:'center',
        alignItems:'center',
        marginTop:20
    },
    textTanya:{
        fontFamily: fonts.primary.regular,
        fontSize:18
    },
    textBiru:{
        fontFamily: fonts.primary.bold,
        fontSize:18,
        color: colors.primary,
        marginTop:10,
        marginBottom:20
    }
})
