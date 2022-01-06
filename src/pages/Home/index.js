import React, { Component } from 'react'
import { Text, StyleSheet, View, ScrollView } from 'react-native'
import { IconHome, IconHome2, IconProduct, IconProduct2, IconProfile, IconProfile2 } from '../../assets'
import { HeaderComponent, BannerSlider, ListLiga, ListJersey } from '../../components/besar'
import { colors, fonts } from '../../utils'
import {dummyLiga, dummyJersey} from '../../data'
import { Jarak, Tombol } from '../../components'
import {connect} from 'react-redux'
import {getUser} from '../../actions/userAction'

class Home extends Component {
    constructor(props){
        super(props)
        this.state = {
            ligas : dummyLiga,
            jerseys : dummyJersey
        }
    }

    componentDidMount() {
        this.props.getUser()
    }

    render() {
        const {ligas, jerseys} = this.state;
        const {navigation, dataUser} = this.props
        console.log(this.props.navigation)
        return (
            <View style={styles.page}>
                <ScrollView showsVerticalScrollIndicator={false}>
            <HeaderComponent
            navigation={navigation}
            />
            <BannerSlider/>
            <View style={styles.pilihliga}>
        <Text style={styles.label}>Hallo {dataUser.nama}, Pilih liga yang kamu mau</Text>
                <ListLiga ligas={ligas}/>
            </View>
            <View style={styles.pilihjersey}>
                <Text style={styles.label}>Pilih <Text style={styles.boldLabel}>Jersey</Text> yang kamu mau</Text>
                <ListJersey 
                jerseys= {jerseys}
                navigation={navigation}
                />
                <Tombol
                title="Lihat Semua"
                type="text"
                padding={10}
                />
            </View>
            <Jarak height={90}/>
                </ScrollView>
      
            
            </View>
        )
    }
}

const mapStatetoProps = (state) => ({
    dataUser: state.userReducer.dataUser
})

export default connect(mapStatetoProps, {getUser}) (Home)

const styles = StyleSheet.create({
    page:{
        flex:1,
        backgroundColor: colors.white
    },
    pilihliga:{
        marginHorizontal:30,
        marginTop:10
    },
    label:{
        fontSize:18,
        fontFamily: fonts.primary.regular
    },
    boldLabel:{
        fontFamily: fonts.primary.bold
    },
    pilihjersey:{
        marginHorizontal:30,
        marginTop:10 
    }
})
