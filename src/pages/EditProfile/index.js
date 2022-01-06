import React, { Component } from 'react'
import { Text, View, StyleSheet, ScrollView, Image, } from 'react-native'
import {dummyProfile} from '../../data'
import {colors, fonts, responsiveHeight, responsiveWidth} from '../../utils'
import {Inputan, Pilihan, Tombol} from '../../components'
import { ImageProfile, IconProfile } from '../../assets'

export class EditProfile extends Component {
    constructor(props){
        super(props)
        this.state = {
            dataProvinsi : [],
            dataKota:[],
            profile: dummyProfile

        }
    }
    render() {
        const {dataProvinsi, dataKota, profile} = this.state
        return (
            <View style={styles.page}>
                <ScrollView
                style={styles.scroll}
                showsVerticalScrollIndicator={false}
                >
                <View style={styles.container}>
                    <Inputan label="Nama" value={profile.nama}/>
                    <Inputan label="Email" value={profile.email}/>
                    <Inputan label="No HP" value={profile.nomorHp}/>
                    <Inputan label="Alamat" value={profile.alamat} textarea/>

                    <Pilihan label="Provinsi" datas={dataProvinsi}/>
                    <Pilihan label="Kota/Kab" datas={dataKota} />
                </View>
                <View style={styles.inputPhoto}>
                    <Text style={styles.label}>Foto Profile</Text>
              <View style={styles.wrapperPhoto}>
        <Image style={styles.imageProfil} source={profile.avatar}/>
        <View style={styles.wrapperTombol}>
              <Tombol type="text" title="Ganti Photo"
        padding={7}
        />
        </View>
      
              </View>
                </View>
                <View style={styles.wrapperTombol2}>
                <Tombol 
                title="Save" 
                type="text" 
                padding={15}
                fontSize={18}
                />

                </View>
                </ScrollView>
            </View>
        )
    }
}

export default EditProfile

const styles = StyleSheet.create({
    page:{
        backgroundColor:colors.white,
        flex:1,
        paddingTop:10
    },
    scroll:{

    },
    container:{
        marginHorizontal:30,
        paddingBottom:10
    },
    inputPhoto:{
        marginHorizontal:30
    },
    label:{
        fontSize:18,
        fontFamily: fonts.primary.regular,
        paddingBottom:10
    },
    wrapperPhoto:{
        flexDirection:'row',
        justifyContent:'space-between',
        flex:1,
        // backgroundColor:'wheat'

    },
    imageProfil:{
        width: responsiveWidth(150),
        height: responsiveHeight(150), 
        borderRadius:40
    },
    wrapperTombol:{
        // backgroundColor:'red',
        flex:1,
        paddingLeft:20,
        justifyContent:'center'
    },
    wrapperTombol2:{
        marginHorizontal:30,
        marginTop:20,
        marginBottom:30
    }
})
