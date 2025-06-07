import { StyleSheet, Button, View, FlatList } from 'react-native';
import React, { useState } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

export default function BoxPage({ navigation }) {
  const [colors, setColors] = useState([]);

  const randomColor = () => {
    const red = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);
    return `rgb(${red},${green},${blue})`;
  };

  return (
    <View>
      <Button
        title="Kutu Ekle"
        onPress={() => {
          setColors([...colors, randomColor()]);
        }}
      />
      <FlatList
        data={colors}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <View
            style={{
              height: 150,
              width: 150,
              backgroundColor: item,
              marginVertical: 20,
            }}
          />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({});
