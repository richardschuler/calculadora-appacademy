import React, { useState } from 'react';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import Row from './src/components/Row';
import Botao from './src/components/Botao';

export default function App() {
  const [ currVal, setCurrVal ] = useState(0);
  const [ operator, setOperator ] = useState('');
  const [ prevVal, setPrevVal ] = useState('');

  handleTap = (type, value) => {
    if(type === "number") {
        setCurrVal(`${currVal}${value}`);
    }

    if(type === "operator") {
        setOperator(value);
        setPrevVal(currVal);
        setCurrVal("0");
    }

    if(type === "clear") {
        setCurrVal("0");
        setOperator(null);
        setPrevVal(null);
    }

    if(type === "equal") {
        const current = parseFloat(currVal);
        const previous = parseFloat(prevVal);

        if(operator === "+") {
            setCurrVal(previous + current);
            setOperator(null);
            setPrevVal(null);
        }

        if(operator === "/") {
            setCurrVal(previous / current);
            setOperator(null);
            setPrevVal(null);
        }

        if(operator === "-") {
            setCurrVal(previous - current);
            setOperator(null);
            setPrevVal(null);
        }

        if(operator === "*") {
            setCurrVal(previous * current);
            setOperator(null);
            setPrevVal(null);
        }
    }

  }

  return (
    <View style={styles.container}>
        <SafeAreaView>
            <Text style={styles.value}>{currVal}</Text>
            <Row>
                <Botao text="C" theme="secondary" onPress={() => this.handleTap("clear")} />                
            </Row>
            <Row>
                <Botao text="7" onPress={() => this.handleTap("number",7)} />
                <Botao text="8" onPress={() => this.handleTap("number",8)} />
                <Botao text="9" onPress={() => this.handleTap("number",9)} />
                <Botao text="/" theme="accent" onPress={() => this.handleTap("operator","/")} />
                
            </Row>
            <Row>
                <Botao text="4" onPress={() => this.handleTap("number",4)} />
                <Botao text="5" onPress={() => this.handleTap("number",5)} />
                <Botao text="6" onPress={() => this.handleTap("number",6)} />
                <Botao text="x" theme="accent" onPress={() => this.handleTap("operator","*")} />
                
            </Row>
            <Row>
                <Botao text="1" onPress={() => this.handleTap("number",1)} />
                <Botao text="2" onPress={() => this.handleTap("number",2)} />
                <Botao text="3" onPress={() => this.handleTap("number",3)} />
                <Botao text="-" theme="accent" onPress={() => this.handleTap("operator","-")} />
                
            </Row>
            <Row>
                <Botao text="0" onPress={() => this.handleTap("number",0)} />
                <Botao text="." onPress={() => this.handleTap("number",".")} />                
                <Botao text="=" theme="accent" onPress={() => this.handleTap("equal")} />
                <Botao text="+" theme="accent" onPress={() => this.handleTap("operator","+")} />
            </Row>
        </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#202020',
    justifyContent: "flex-end",
  },
  value: {
      color: "#fff",
      fontSize: 40,
      textAlign: "right",
      marginRight: 20,
      marginBottom: 10
  }
});