import React, { Component } from 'react'
import { Text, StyleSheet, View, TouchableOpacity, ScrollView,
 } from 'react-native'
import { colors, responsiveHeight, fonts, responsiveWidth } from '../../utils'
import { LogoUtama } from '../../assets'
import { Jarak, Inputan, Tombol, Pilihan } from '../../components'

export default class Register2 extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            dataProvinsi : [],
            dataKota:[],
        }
    }
    
    render() {
        const {dataProvinsi, dataKota} = this.state
        return (
            <ScrollView
            showsVerticalScrollIndicator={false}
            style={styles.page}>
                <View style={styles.iconBack}>
                    <Tombol 
                    onPress={()=> {this.props.navigation.goBack()}}
                    icon="arrow-left"/>
                </View>

                <View style={styles.ilustrasiContainer}>
                <LogoUtama/>
                <Jarak height={10}/>
                <Text style={styles.title}> Isi Alamat </Text>
                <Text style={styles.title}> Lengkap Anda </Text>
                
                <View style={styles.wrapperDot}>
                    <View style={styles.dotSecondary}></View>
                    <Jarak width={10}/>
                    <View  style={styles.dotPrimary}></View>
                </View>

                </View>

                <View style={styles.cardInput}>
 <Inputan label="Alamat" textarea/>

<Pilihan label="Provinsi" datas={dataProvinsi}/>
<Pilihan label="Kota/Kab" datas={dataKota} />
<Jarak height={30}/>
<Tombol
onPress={()=> 
    {this.props.navigation.navigate('MainApp')}
}
type="text" title="Register" fontSize={18}/>

                </View>
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    page:{
        backgroundColor: colors.white,
        flex:1,
    },
    ilustrasiContainer:{
        alignItems:'center',
        marginTop: responsiveHeight(50)
    },
    title:{
        fontSize:24,
        fontFamily: fonts.primary.light,
        color: colors.primary
    },
    wrapperDot:{
        flexDirection: 'row',
        marginTop: responsiveHeight(15)
    },
    dotPrimary:{
        backgroundColor: colors.primary,
        width: responsiveWidth(10),
        height: responsiveHeight(10),
        borderRadius:10,
    },
    dotSecondary:{
        backgroundColor: colors.lightgray,
        width: responsiveWidth(10),
        height: responsiveHeight(10),
        borderRadius:10,
    },
    cardInput:{
        backgroundColor:colors.white,
        marginHorizontal:30,
        padding:30,
        borderRadius:20,
        marginTop:30,
        elevation: 5,
        marginBottom:30
    },
    iconBack:{
        marginLeft:10,
        marginTop:responsiveHeight(30),
        position:'absolute',
    }

})



