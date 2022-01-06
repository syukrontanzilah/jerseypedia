import React from 'react'
import { StyleSheet, Text, View, ScrollView } from 'react-native'
import {CardKeranjang} from '../../kecil'

const ListKeranjang = ({keranjangs}) => {
    return (
        <ScrollView 
        style={styles.container}
        showsVerticalScrollIndicator={false}>
            {
                keranjangs.map((keranjang)=>{
                    return <CardKeranjang
                    keranjang={keranjang}
                    key={keranjangs.id}
                    />
                })
            }
        </ScrollView>
    )
}

export default ListKeranjang

const styles = StyleSheet.create({
    container:{
    }
})
