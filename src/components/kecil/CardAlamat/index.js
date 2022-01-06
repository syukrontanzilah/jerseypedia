import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import { colors, fonts } from '../../../utils'

const CardAlamat = ({profile}) => {
    return (
        <View style={styles.container}>
            <Text style={styles.textAlamatSaya}>Alamat Saya:</Text>
    <Text style={styles.text}>{profile.alamat}, Kab/Kota {profile.kota}</Text>
    <Text style={styles.text}>Provinsi: {profile.provinsi}</Text>

    <TouchableOpacity style={styles.tochUbah}>
        <Text style={styles.textUbahAlamat}>Ubah Alamat</Text>
    </TouchableOpacity>
        </View>
    )
}

export default CardAlamat

const styles = StyleSheet.create({
    container:{
        // shadowOffset:{
        //     width:0,
        //     height:2,
        // },
        // shadowOpacity:0.25,
        // shadowRadius:3.84 ,
        elevation:5,
        padding:15,
        borderRadius:10,
        backgroundColor:colors.white
    },
    textAlamatSaya:{
        fontFamily: fonts.primary.regular,
        fontWeight:'bold',
        marginBottom:10,
    },
    text:{
        fontFamily: fonts.primary.regular,
    },
    tochUbah:{
        marginTop:20
    },
    textUbahAlamat:{
        color: 'orange',
        fontFamily: fonts.primary.regular,
        textAlign:'right',
        fontSize:14,
        padding:3
    }
})
