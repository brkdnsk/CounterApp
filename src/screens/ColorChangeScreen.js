import { StyleSheet, Text, View ,Button , FlatList } from 'react-native'
import React from 'react'
import ColorChange from '../../Components/ColorChange'

export default function ColorChangeScreen() {
  return (
        <View>
            <ColorChange colors="Kırmızı"/>
            <ColorChange colors="Mavi"/>
            <ColorChange colors="Yeşil"/> 
        </View>
  )
}

const styles = StyleSheet.create({})