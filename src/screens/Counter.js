import { Button, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


const Stack= createNativeStackNavigator();
export default function Counter({navigation}) {
  return (
    <View>
      <Button title="Arttır" onPress={()=> {}}/>
      <Button title="Azalt" onPress={()=> {}}/>
        <Text>Sayı : 0</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, justifyContent: 'center', alignItems: 'center'
  },
  text: {
    fontSize: 24
  },Button:{
    width: "80%",
    height: 45,
    backgroundColor: 'purple',
    borderRadius: 12,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
  }
});
