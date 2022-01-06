import React from 'react'
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import { colors, responsiveHeight, responsiveWidth, numberWithComas, fonts } from '../../../utils'
import { IconClose, IconSampah } from '../../../assets'
import { Jarak } from '..'

const CardKeranjang = ({keranjang}) => {
    return (
        <View style={styles.container}>
            <Image source={keranjang.product.gambar[0]}
            style={styles.gambar} />
          <View style={styles.descView}>
    <Text style={styles.nama}>{keranjang.product.nama}</Text>
    <Text style={styles.desc}>Rp{numberWithComas(keranjang.product.harga)}</Text>
    <Jarak height={8}/>
    <Text  style={styles.desc}>Order: {keranjang.jumlahPesan}</Text>
    <Text  style={styles.desc}>Size: {keranjang.ukuran}</Text>
    <Text  style={styles.desc}>Total Harga: Rp{numberWithComas(keranjang.totalHarga)}</Text>
    <Text  style={styles.desc}>Keterangan:</Text>
    <Text  style={styles.desc}>{keranjang.keterangan}</Text>

          </View>
    
          <TouchableOpacity style={styles.hapus}>
              <IconSampah/>
          </TouchableOpacity>
        </View>
    )
}

export default CardKeranjang

const styles = StyleSheet.create({
    container:{
        flexDirection:'row',
        backgroundColor:colors.white,
        marginTop:5,
        marginBottom:5,
        shadowOffset:{
           width:0,
           height:2,
       },
       shadowOpacity:0.25,
       shadowRadius:3.84 ,
       elevation:5,
       marginHorizontal:30,
       paddingHorizontal:20,
       borderRadius:10,
       alignItems:'center',
       paddingVertical: 10,
       paddingHorizontal:15

    },
    gambar:{
        width:responsiveWidth(90),
        height:responsiveHeight(90),
        resizeMode:'contain'
    },
    descView:{
        flex:1,
    },
    hapus:{
        // flex:1,
        alignItems:'flex-end',
        // backgroundColor:'pink',
        padding:5,
    },
    nama:{
        fontFamily: fonts.primary.bold,
        fontSize:13,
        textTransform:'capitalize'
    },
    desc:{
        fontFamily: fonts.primary.regular,
        fontSize:11
    }
})
