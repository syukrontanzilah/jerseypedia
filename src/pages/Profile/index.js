import React, { Component } from 'react'
import { Text, StyleSheet, View, Image } from 'react-native'
import { IconEdit, IconPassword, IconArrowRight, IconExit, IconProduct, ImageProfile } from '../../assets'
import {colors, responsiveHeight, responsiveWidth, fonts} from '../../utils'
import { dummyProfile, dummyMenu } from '../../data'
import {CardMenu, ListMenu} from '../../components'

export default class Profile extends Component {
    constructor(props){
        super(props)
        this.state = {
            profile: dummyProfile,
            menus: dummyMenu
        }
    }
    render() {
        const {profile, menus} = this.state
        return (
            <View style={styles.page}>
                <View style={styles.container}>
                <Image style={styles.image} source={profile.avatar}/>
                <View style={styles.profile}>
                <Text style={styles.nama}> {profile.nama} </Text>
                <Text style={styles.desc}>{profile.nomorHp}</Text>
                <Text style={styles.desc}>{profile.alamat}</Text>
                  <Text style={styles.desc}>{profile.kota}, {profile.provinsi}</Text>
                </View>

              <View>
                 <ListMenu 
                 navigation={this.props.navigation}
                 menus={menus}/>
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
        height: responsiveHeight(652),
        width:'100%',
        borderTopLeftRadius:40,
        borderTopRightRadius:40
    },
    image:{
        width:responsiveWidth(150), 
        height: responsiveHeight(150),
        borderRadius:40,
        alignSelf:'center',
        marginTop:-responsiveWidth(75)
        },
    profile:{
        marginTop:10,
        alignItems:'center',
    },
    nama:{
        fontFamily: fonts.primary.bold,
        fontSize:24,
    },
    desc:{
        fontFamily: fonts.primary.regular,
        fontSize:18,
    }
})
