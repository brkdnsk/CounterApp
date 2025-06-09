import { StyleSheet, Text, View ,TextInput } from 'react-native'
import React from 'react'

export default function PasswordScreen() {
  return (
    <View style={styles.main}>
      <Text>Şifrenizi Giriniz</Text>
      <TextInput style={styles.input}/>
    </View>
  )
}

const styles = StyleSheet.create({
    main:{
        margin:10,
    },
    input:{
        borderColor:'Black',
        borderWidth:1,
    }
})