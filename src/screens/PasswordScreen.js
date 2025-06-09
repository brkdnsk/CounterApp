import { StyleSheet, Text, View, TextInput } from 'react-native';
import React, { useState } from 'react';

export default function PasswordScreen() {
  const [password, setPassword] = useState('');

  return (
    <View style={styles.main}>
      <Text>Şifrenizi Giriniz</Text>
      <TextInput
        style={styles.input}
        autoCapitalize="none"
        autoCorrect={false}
        value={password}
        onChangeText={(newValue) => setPassword(newValue)}
      />
      {password.length < 8 ? (
        <Text style={styles.warning}>Şifre en az 8 karakter olmalıdır.</Text>
      ) : null}
    </View>
  );
}

const styles = StyleSheet.create({
  main: {
    margin: 10,
  },
  input: {
    borderColor: 'black',
    borderWidth: 1,
    padding: 10,
    marginVertical: 10,
  },
  warning: {
    color: 'red',
  },
});
