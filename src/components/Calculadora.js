import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import Botao from '../../src/components/Botao';
import Display from '../../src/components/Display';

function Calculadora(props) {

    const [valorDisplay,setValorDisplay]=useState('');
    const [resultado,setResultado]=useState(0);
    const [acumulador,setAcumulador]=useState(0);
    const [operado,setOperado]=useState(false);

    const addDigitoDisplay = (d) => {
        if((d == '+' || d =='-' | d == '*' | d=='/') && operado);

        if (operado) {
            setValorDisplay(d);
            setOperado(false);
        }

        const valorDigitadoDisplay = valorDisplay + d;
        setValorDisplay(valorDigitadoDisplay);
    }

    const limparMemoria = () => {
        setOperado(false);
        setValorDisplay('');
        setResultado(0);
        setAcumulador(0);
    }

    const operacao = (operacao)=>{
        if (operacao == 'backspace') {
            let vDisplay = valorDisplay;

            vDisplay = vDisplay.substring(0,(vDisplay.length-1));
            setValorDisplay(vDisplay);
            setOperado(false);
        } try {
            const r = eval(valorDisplay);
            setAcumulador(r);
            setResultado(r);
            setOperado(true);
        } catch {
            setResultado('Erro');
        }
    }

    return (
        <View style={[styles.wrpContainer]}>
            {Display(valorDisplay, resultado)}
            <View style={[styles.buttons]}>
                {Botao('AC', limparMemoria)}
                {Botao('Apagar', () => {operacao('backspace')})}
            </View>
            <View style={[styles.buttons]}>
                {Botao('7', () => {addDigitoDisplay('7')})}
                {Botao('8', () => {addDigitoDisplay('8')})}
                {Botao('9', () => {addDigitoDisplay('9')})}
                {Botao('/', () => {addDigitoDisplay('/')})}
                {Botao('4', () => {addDigitoDisplay('4')})}
                {Botao('5', () => {addDigitoDisplay('5')})}
                {Botao('6', () => {addDigitoDisplay('6')})}
                {Botao('X', () => {addDigitoDisplay('*')})}
                {Botao('1', () => {addDigitoDisplay('1')})}
                {Botao('2', () => {addDigitoDisplay('2')})}
                {Botao('3', () => {addDigitoDisplay('3')})}
                {Botao('-', () => {addDigitoDisplay('-')})}
                {Botao('0', () => {addDigitoDisplay('0')})}
                {Botao('.', () => {addDigitoDisplay('.')})}
                {Botao('=', () => {operacao('=')})}
                {Botao('+', () => {addDigitoDisplay('+')})}                
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    wrpContainer: {
        backgroundColor: '#000',
    },
    buttons: {
        flexDirection: 'row',
        flexWrap: 'wrap'
    }
})

export default Calculadora