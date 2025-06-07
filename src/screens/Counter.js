import { Button, StyleSheet, Text, View } from 'react-native';
import React,{useState} from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


const Stack= createNativeStackNavigator();
export default function Counter({navigation}) {
  const [counter, setCounter] = useState(0)
  return (
    <View>
      <Button title="Arttır" onPress={()=> {
        setCounter(counter+1);
      }}/>
      <Button title="Azalt" onPress={()=> {
         setCounter(counter-1);
      }}/>
        <Text>Sayı : {counter}</Text>
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
