import React, { Component } from 'react'
import { Text, StyleSheet, View } from 'react-native'
import {dummyPesanans} from '../../data'
import {ListKeranjang, Tombol} from '../../components'
import { colors, numberWithComas, responsiveHeight, fonts } from '../../utils'

export default class Keranjang extends Component {
    constructor(props){
        super(props)
        this.state = {
            pesanan : dummyPesanans[0],

        }
    }
    render() {
        const {pesanan} = this.state
        return (
            <View style={styles.page}>
               <ListKeranjang keranjangs={pesanan.pesanans}/>
               <View style={styles.footer}>
                   <View style={styles.totalHarga}>
                        <Text  style={styles.total}>Total Harga:</Text>
                <Text style={styles.harga}>Rp{numberWithComas(pesanan.totalHarga)}</Text>
                   </View>
               
              <Tombol 
              title="Check Out" 
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

const styles = StyleSheet.create({
    page:{
        backgroundColor: colors.white,
        flex:1
    },
    footer:{
        backgroundColor: colors.white,
        paddingHorizontal:30,
        paddingBottom:30
    },
    totalHarga:{
        flexDirection:'row',
        justifyContent:'space-between',
        marginVertical:20
    },
    total:{
        fontSize:18,
        fontFamily: fonts.primary.regular
    },
    harga:{
        fontSize:20,
        fontFamily: fonts.primary.bold
    }
})
