
import React, {useState} from 'react';
import {
  ScrollView,
  Text,
  View,
  SafeAreaView,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Alert
} from 'react-native';

import Snackbar from 'react-native-snackbar';

const currencyPerRupee = {
  DOLLAR: 0.014,
  EURO: 0.012,
  POUND: 0.011,
  RUBEL: 0.93,
  AUSDOLLAR: 0.2,
  CANDOLLAR: 0.019,
  YEN: 1.54,
  DINAR: 0.0043,
  BITCOIN: 0.000004

}


const App = () => {

  const [inputValue, setInputValue] = useState(0);
  const [resultValue, setResultValue] = useState(0)

  const buttonPressed = (currency) => {
    if(!inputValue) {
      return Snackbar.show({
        text: 'please enter a value',
        backgroundColor: '#ea7773',
        textColor: '#ffffff',
      })
    }

    let result = parseFloat(inputValue) * currencyPerRupee[currency]
    setResultValue(result.toFixed(2));
    // setInputValue(0)
  }


  return (
    <>
    <ScrollView backgroundColor='#1b262c'
      keyboardShouldPersistTaps="handled"
      contentInsetAdjustmentBehavior="automatic"
    >
      <SafeAreaView  style={styles.container}>


      <View style={styles.resultContainer}>
        <Text style={styles.resultValue}>{resultValue}</Text>
      </View>
      <View style={styles.inputContainer}>
        <TextInput 
        style={styles.input}
        keyboardType="numeric"
        placeholder="Enter Amount"
        placeholderTextColor="#c1c1c1"
        value={inputValue}
        onChangeText={(inputValue) => setInputValue(inputValue)}
        ></TextInput> 
      </View>
      <View style={styles.converButtonContainer}>
        {Object.keys(currencyPerRupee).map((currency) => (
          <TouchableOpacity 
          key={currency}
          style={styles.converButton}
          onPress={() => buttonPressed(currency)}
          >
            <Text style={styles.converButtonText}>{currency}</Text>
          </TouchableOpacity>
        ))}

      </View>


      </SafeAreaView>
    </ScrollView>
    </>
  )
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1b262c',
  },
  resultContainer: {
    height: 70,
    marginTop: 80,
    justifyContent: 'center',
    borderColor: '#bbe1fa',
    borderWidth: 2,
    alignItems: 'center'
  },
  resultValue: {
    color: 'white',
    fontSize: 30,
    fontWeight: 'bold'
  },
  inputContainer: {
    height: 70,
    marginTop: 10,
    justifyContent: 'center',
    alignItems: "center",
    borderWidth: 2,
    borderColor: '#bbe1fa',
  },
  input: {
    fontSize: 30,
    textAlign: 'center',
    color: "#fff"
  },
  converButtonContainer: {
    flexDirection: 'row',
    flexWrap: "wrap",
    marginTop: 10,
  },
  converButton : {
    alignItems: 'center',
    justifyContent: 'center',
    height: 100,
    width: '30%',
    borderWidth: 2,
    borderColor: 'white',
    margin: 6,
    backgroundColor: '#0f4c75'


  },
  converButtonText: {
    color: "white",
    fontSize: 15,
  }
})