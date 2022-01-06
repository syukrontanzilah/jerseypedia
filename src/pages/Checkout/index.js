import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'
import {colors, fonts, numberWithComas, responsiveHeight, } from '../../utils'
import { CardAlamat, Jarak, Pilihan, Tombol } from '../../components'
import {dummyProfile, dummyPesanans} from '../../data'

export class Checkout extends Component {
    constructor(props){
        super(props)

        this.state = {
            profile: dummyProfile,
            pesanan: dummyPesanans[0],
            expedisi: []
        }
    }
   
    render() {
        const {profile, pesanan, expedisi} = this.state
        return (
            <View style={styles.page}>
                <View style={styles.isi}>
                <Text style={styles.apakah}>Apakah alamat anda sudah benar? </Text>
                <Jarak height={10}/>
                <CardAlamat profile ={profile}/>
                <View style={styles.totalHarga}>
                        <Text  style={styles.total}>Total Harga:</Text>
                <Text style={styles.harga}>Rp{numberWithComas(pesanan.totalHarga)}</Text>
                   </View>

                   <View>
                       <Pilihan
                       label="Pilih Expedisi"
                       datas={expedisi}
                       />
                <Jarak height={10}/>
                       <Text  style={styles.apakah}>Biaya Ongkir:</Text>
                       <Jarak height={5}/>
                       <View style={styles.ongkir}>
                <Text  style={styles.label}>Untuk berat {pesanan.berat} Kg:</Text>
                <Text style={styles.ket}>Rp{numberWithComas(15000)}</Text>
                   </View>
                   <View style={styles.ongkir}>
                <Text  style={styles.label}>Estimasi waktu:</Text>
                <Text style={styles.ket}>2-3 Harii</Text>
                   </View>
                   </View>

                </View>

                <View style={styles.footer}>
                   <View style={styles.totalHarga}>
                        <Text  style={styles.total}>Total Harga:</Text>
                <Text style={styles.harga}>Rp{numberWithComas(pesanan.totalHarga+15000)}</Text>
                   </View>
               
              <Tombol 
              title="Lanjut ke pembayaran" 
              type="textIcon" 
              fontSize={18}
              padding={responsiveHeight(14)}
              icon="keranjang-putih"
              onPress = {()=> this.props.navigation.navigate('Checkout')}
                />
              </View>

            </View>
        )
    }
}

export default Checkout

const  styles = StyleSheet.create({
    page:{
        flex:1,
        backgroundColor:colors.white,
        paddingTop:20,
        justifyContent:'space-between'
    },
    isi:{
        paddingHorizontal:20
    },
    apakah:{
        fontSize:18,
        fontFamily: fonts.primary.bold
    },
    totalHarga:{
        flexDirection:'row',
        justifyContent:'space-between',
        marginVertical:20
    },
    total:{
        fontSize:18,
        fontFamily: fonts.primary.bold
    },
    harga:{
        fontSize:20,
        fontFamily: fonts.primary.bold
    },
    ongkir:{
        flexDirection:'row',
        justifyContent:'space-between'
    },
    label:{
        fontFamily: fonts.primary.regular,
        fontSize:16,
    },
    ket:{
        fontFamily: fonts.primary.bold,
        fontSize:16,
    },
    footer:{
        backgroundColor: colors.white,
        paddingHorizontal:20,
        paddingBottom:30
    },
})

