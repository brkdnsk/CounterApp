import { StyleSheet, Text, View ,TouchableOpacity} from "react-native";  
import React from 'react';

import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack= createNativeStackNavigator();
export default function CounterScreen({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ fontSize: 24 }}>SAYAÇ</Text>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Counter')}>
        <Text style={styles.buttonText}>Sayaca git</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('BoxPage')}>
        <Text style={styles.buttonText}>Kutu Uygulaması</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    width: "80%",
    height: 45,
    backgroundColor: 'purple',
    borderRadius: 12,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  }
});
