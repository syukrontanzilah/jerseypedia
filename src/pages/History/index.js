import React, { Component } from 'react'
import { Text, View, StyleSheet} from 'react-native'
import {dummyPesanans} from '../../data'
import {colors, fonts} from '../../utils'
import {ListHistory} from '../../components'

export class History extends Component {
    constructor(props){
        super(props)
        this.state = {
            pesanans: dummyPesanans
        }
    }
    render() {
        const {pesanans} = this.state
        return (
            <View style={styles.pages}>
                <ListHistory
                pesanans={pesanans}
                />
            </View>
        )
    }
}

export default History

const styles = StyleSheet.create({
    pages:{
        flex:1,
        backgroundColor: colors.white,
    }
})