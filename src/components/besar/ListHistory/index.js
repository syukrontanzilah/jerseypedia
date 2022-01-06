import React from 'react'
import { StyleSheet, Text, View, ScrollView } from 'react-native'
import CardHistory from '../../kecil/CardHistory'
import { colors } from '../../../utils'

const ListHistory = ({pesanans}) => {
    return (
        <ScrollView
        showsVerticalScrollIndicator={false}
        style={styles.scroll}
        >        
            
            <View style={styles.container}>
            {
                pesanans.map((pesanan)=>{
                    return <CardHistory
                    pesanan={pesanan}
                    key={pesanan.id}
                    />
                })
            }
        </View>
        </ScrollView>
    )
}

export default ListHistory

const styles = StyleSheet.create({
    scroll:{
        backgroundColor:colors.white,  
    },
    container:{
        marginHorizontal:30,
        marginTop:30
    }
})
