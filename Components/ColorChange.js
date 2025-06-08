import { Button, StyleSheet, Text, View  } from 'react-native'
import React from 'react'

export default function ColorChange({ colors ,onIncrease , onDecrease}) {
  return (
    <View>
      <Text>{colors}</Text>
      <Button title= {`${colors} arttır`} onPress={()=>onIncrease()} />
      <Button title={`${colors} arttır`} onPress={()=>onDecrease()} />

    </View>
  )
}

const styles = StyleSheet.create({}) 