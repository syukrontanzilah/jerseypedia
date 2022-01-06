import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
import { colors, responsiveHeight, responsiveWidth, numberWithComas, fonts } from '../../../utils'
import Jarak from '../Jarak'

const CardHistory = ({pesanan}) => {
    return (
        <View style={styles.container}>
            <Text style={styles.tanggal}>{pesanan.tanggalPemesanan}</Text>
            {
                pesanan.pesanans.map((history, index)=>{
                    return (
                        <View key={index}
                        style={styles.history}
                        >
                <Text style={styles.judul}>{index+1}.</Text>
                <Image source={history.product.gambar[0]}
                style={styles.imgJersey}/>

                <View style={styles.viewDesc}>
                <Text  style={styles.judul}>{history.product.nama}</Text>
                <Text  style={styles.desc}>Rp.{numberWithComas(history.product.harga)}</Text>
              <Jarak
            height={8}
              />
                <Text   style={styles.desc}>Qty: {history.jumlahPesan}</Text>
                <Text   style={styles.desc}>Total harga: Rp.{numberWithComas(history.totalHarga)}</Text>

                </View>
                            </View>
                    )
                })
            }

            <View style={styles.status}>
                <View style={styles.label}>
                <Text style={styles.textBlue}>Status :</Text>
                <Text  style={styles.textBlue}>Ongkir (2-3 Hari) :</Text>
                <Text  style={styles.textBlue}>Total Harga :</Text>
                </View>

                <View style={styles.value}>
        <Text  style={styles.textBlue}>{pesanan.status}</Text>
        <Text  style={styles.textBlue}>Rp. {numberWithComas(15000)}</Text>
        <Text  style={styles.textBlue}>Rp. {numberWithComas(pesanan.totalHarga+15000)}</Text>
                </View>
            </View>

        </View>
    )
}

export default CardHistory

const styles = StyleSheet.create({
    container:{
        backgroundColor:colors.white,
        elevation:5,
        padding:15,
        borderRadius:10,
        marginBottom:15

    },
    tanggal:{
        fontFamily: fonts.primary.bold
    },
    history:{
        flexDirection:'row',
        marginTop:10,
    },
    imgJersey:{
        height:responsiveHeight(70),
        width:responsiveWidth(70)
    },
    viewDesc:{
        flex:1,
        marginLeft:5
    },
    judul:{
        fontSize:14,
        fontFamily: fonts.primary.bold,
        textTransform:'capitalize',
    },
    desc:{
        fontFamily: fonts.primary.regular,
        fontSize:13
    },
    status:{
        marginTop:15,
        flexDirection:'row'
    },
    label:{
        flex:1,
    },
    value:{
        marginLeft:20

    },
    textBlue:{
        fontSize:14,
        textTransform:'uppercase',
        color: colors.primary,
        fontFamily: fonts.primary.bold,
        textAlign:'right'
    }
})
