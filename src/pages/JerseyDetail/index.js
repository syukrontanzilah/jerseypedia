import React, { Component } from 'react'
import { Text, StyleSheet, View, Image, ScrollView } from 'react-native'
import { IconEdit, IconPassword, IconArrowRight, IconExit, IconProduct, ImageProfile } from '../../assets'
import {colors, responsiveHeight, responsiveWidth, fonts, numberWithComas} from '../../utils'
import { Tombol, CardLiga, JerseySlider, Inputan, Pilihan, Jarak } from '../../components'

export default class JerseyDetail extends Component {
    constructor(props){
        super(props)
        this.state = {
          jersey: this.props.route.params.jersey,
          images: this.props.route.params.jersey.gambar
        }
    }
    render() {
        const {navigation} = this.props
        const {jersey, images} = this.state
        console.log('parameternya: ', this.props.route.params)
        return (
            <View style={styles.page}>
                <View style={styles.buttonTop}>
                <Tombol
                icon="arrow-left"
                padding={7}
                onPress = {()=> navigation.goBack()}
                />
                </View>

                <JerseySlider images={images}/>
           

                <View style={styles.container}>
                    <View style={styles.liga}>
                    <CardLiga liga={jersey.liga}/>
                    </View>
<View style={styles.desc}>
<Text style={styles.nama}>{jersey.nama}</Text>
<Text style={styles.harga}>Rp.{numberWithComas(jersey.harga)}</Text>
<View style={styles.garis}/>

    <View style={styles.jenisBerat}>
        <Text style={styles.textJB}>Jenis: {jersey.jenis}</Text>
        <Text  style={styles.textJB}>Berat: {jersey.berat}Kg</Text>
    </View>

<View style={styles.wrapperInput}>
<Inputan 
label="Jumlah" 
width={responsiveWidth(166)}
height={responsiveHeight(43)}
fontSize={13}
placeholder="0"
/>
<Pilihan 
label="Ukuran"
width={responsiveWidth(105)}
height={responsiveHeight(43)}
fontSize={13}
datas ={jersey.ukuran}
/>
</View>

<Inputan 
textarea
label="Keterangan"
fontSize={13}
placeholder="Isi jika ingin menambahkan name tag (nama dan nomor pengguna)"
/>

<Jarak height={15}/>

<Tombol
title="Masuk Keranjang"
type="textIcon"
icon="keranjang-putih"
padding={responsiveHeight(15)}
fontSize={18}
/>

</View>


            </View> 
            </View>
        )
    }
}

const styles = StyleSheet.create({
    page:{
        backgroundColor: colors.primary,
        flex:1,
    },
    container:{
        backgroundColor: colors.white,
        position:'absolute',
        bottom:0,
        height: responsiveHeight(465),
        width:'100%',
        borderTopLeftRadius:40,
        borderTopRightRadius:40
    },
    buttonTop:{
        position:'absolute',
        marginTop:20,
        marginLeft:20,
        zIndex:1
    },
    desc:{
        // backgroundColor:'pink',
        marginHorizontal:30,

    },
    nama:{
        fontSize:24,
        fontFamily: fonts.primary.bold,
        textTransform:'capitalize',
    },
    harga:{
        fontSize:24,
        fontFamily: fonts.primary.regular
    },
    liga:{
        alignItems:'flex-end',
        marginRight:30,
        marginTop:-30
    },
    garis:{
        borderWidth:0.3,
        marginVertical:10,
        borderColor: colors.secondary
    },
    jenisBerat:{
        flexDirection:'row',
        justifyContent:'space-between',
        marginBottom:10,
    },
    textJB:{
        fontFamily: fonts.primary.regular,
        fontSize:13, 
    },
    wrapperInput:{
        flexDirection:'row',
        justifyContent:'space-between'
    }
})
