import React from 'react'
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import { responsiveWidth, fonts, colors } from '../../../utils'
import Tombol from '../Tombol'
import {connect} from 'react-redux'
import {getUser} from '../../../actions/userAction'

const CardJersey = ({jersey, navigation, dataUser}) => {
    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.card}>
                <Image
                style={styles.img}
                source={jersey.gambar[0]}/>
<Text style={styles.text}>{jersey.nama}{dataUser.nama}</Text>
            </TouchableOpacity>

            <Tombol 
            type="text" 
            title="Detail"
            onPress = {()=> navigation.navigate('JerseyDetail', {
                jersey
            })}
            />
        </View>
    )
}

const mapStatetoProps = (state) => ({
    dataUser: state.userReducer.dataUser
})

export default connect(mapStatetoProps, null)(CardJersey)

const styles = StyleSheet.create({
    container:{
        marginBottom:20
    },
    card:{
        backgroundColor:colors.yellow,
        width: responsiveWidth(150),
        alignItems:'center',
        padding:10,
        borderRadius:10,
        marginBottom:10
    },
    img:{
        width: responsiveWidth(124),
        height: responsiveWidth(124)
    },
    text:{
        fontFamily: fonts.primary.bold,
        fontSize:13,
        textTransform:'capitalize',
        textAlign:'center'
    }
})
