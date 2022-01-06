import React from 'react'
import { StyleSheet, Text, View, TextInput } from 'react-native'
import { fonts, colors } from '../../../utils'

const Inputan = ({value, textarea, placeholder, width, height, 
    fontSize, label, secureTextEntry, keyboardType }) => {
    if(textarea){
        return(
            <View style={styles.container}>
            <Text style={styles.label(fontSize)}>{label}</Text>
            <TextInput
            style={styles.inputTextArea(fontSize)}
            placeholder={placeholder}
            multiline={true}
            numberOfLines={3}
            value={value}
            />
        </View>
        )
    }
    return (
        <View style={styles.container}>
            <Text style={styles.label(fontSize)}>{label}</Text>
            <TextInput
            style={styles.input(width, height, fontSize)}
            placeholder={placeholder}
            value={value}
            secureTextEntry ={secureTextEntry}
            keyboardType={keyboardType}
            />
        </View>
    )
}

export default Inputan

const styles = StyleSheet.create({
    container:{
        marginTop:10
    },
    label: (fontSize) =>({
        fontSize: fontSize ? fontSize: 18,
        fontFamily: fonts.primary.regular
    }),
    input: (width, height, fontSize) => ({
        fontSize: fontSize ? fontSize: 18,
        fontFamily: fonts.primary.regular,
        width: width,
        height: height,
        borderWidth:1,
        borderColor: colors.secondary,
        borderRadius:5,
        paddingVertical:5,
        paddingHorizontal:10
    }),
    inputTextArea: (fontSize) => ({
        fontSize: fontSize ? fontSize: 18,
        fontFamily: fonts.primary.regular,
        borderWidth:1,
        borderColor: colors.secondary,
        borderRadius:5,
        paddingVertical:5,
        paddingHorizontal:10,
        textAlignVertical: 'top'
    })

})
