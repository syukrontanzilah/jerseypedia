import React, { Component } from 'react'
import { ScrollView, StyleSheet, View } from 'react-native'
import { Inputan, Tombol } from '../../components'
import { colors } from '../../utils'

export class ChangePassword extends Component {
    constructor(props){
        super(props)
    }
    render() {
        return (
            <View style={styles.page}>
                <ScrollView
                style={styles.scroll}
                showsVerticalScrollIndicator={false}
                >
                <View style={styles.container}>
                    <Inputan label="Password Lama"
                    secureTextEntry
                    />
                     <Inputan label="Password Baru"
                    secureTextEntry
                    />
                       <Inputan label="Konfirmasi Password Baru"
                    secureTextEntry
                    />
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

export default ChangePassword

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
    wrapperTombol2:{
        marginHorizontal:30,
        marginTop:20,
        marginBottom:30
    }
})
