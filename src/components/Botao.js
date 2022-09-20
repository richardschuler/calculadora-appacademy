import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'

const Botao = (label, onPress) => {
    return (
        <View style={[styles.containerButtons]}>
            <TouchableOpacity style={[styles.button]} onPress={onPress}>
                <Text style={[styles.buttonText]}>{label}</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    containerButtons: {
        backgroundColor: '#000',
    },
    button: {
        backgroundColor: '#222',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        margin: 5,
        width: 80,
        height: 60,
    },
    buttonText: {
        fontSize: 20,
        color: '#fff',
    }
})

export default Botao