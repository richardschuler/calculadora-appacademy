import React from 'react';
import { Text, View, StyleSheet } from 'react-native'

const Display = (valor, res) => {
    return (
        <View style={[styles.containerDisplay]}>
            <Text style={[styles.displayValor]}>{valor}</Text>
            <Text style={[styles.displayResultado]}>{res}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    containerDisplay: {
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
        width: '100%',
        height: 150,
        backgroundColor: '#fff',
    },
    displayValor: {
        fontSize: 20,
        padding: 15,
        color: '#000'
    },
    displayResultado: {
        fontSize: 30,
        padding: 15,
        color: '#000'
    }
})

export default Display