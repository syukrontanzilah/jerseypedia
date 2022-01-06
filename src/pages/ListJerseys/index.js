import React, { Component } from 'react'
import { Text, StyleSheet, View, ScrollView } from 'react-native'
import { IconHome, IconHome2, IconProduct, IconProduct2, IconProfile, IconProfile2 } from '../../assets'
import { HeaderComponent, ListLiga, ListJersey } from '../../components/besar'
import { colors, fonts } from '../../utils'
import {dummyLiga, dummyJersey} from '../../data'
import { Jarak, Tombol } from '../../components'

export default class ListJerseys extends Component {
    constructor(props){
        super(props)
        this.state = {
            ligas : dummyLiga,
            jerseys : dummyJersey
        }
    }
    render() {
        const {ligas, jerseys} = this.state;
        const {navigation} = this.props
        console.log(this.props.navigation)
        return (
            <View style={styles.page}>
                   <HeaderComponent
            navigation={navigation}
            />
                <ScrollView 
                style={styles.container}
                showsVerticalScrollIndicator={false}>
         
            <View style={styles.pilihliga}>
                <ListLiga ligas={ligas}/>
            </View>
            <View style={styles.pilihjersey}>
                <Text style={styles.label}>Pilih <Text style={styles.boldLabel}>Jersey</Text> yang kamu inginkan</Text>
                <ListJersey 
                jerseys= {jerseys}
                navigation={navigation}
                />
                </View>
            <Jarak height={90}/>
                </ScrollView>
      
           
            
            </View>
        )
    }
}

const styles = StyleSheet.create({
    page:{
        flex:1,
        backgroundColor: colors.white
    },
    container:{
        marginTop:-40
    },
    pilihliga:{
        marginHorizontal:30,
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
