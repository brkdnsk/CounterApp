import { Button, StyleSheet, Text, View  } from 'react-native'
import React from 'react'

export default function ColorChange({ colors }) {
  return (
    <View>
      <Text>{colors}</Text>
      <Button title= {`${colors} arttır`} />
      <Button title={`${colors} arttır`} />

    </View>
  )
}

const styles = StyleSheet.create({}) 