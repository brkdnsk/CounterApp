import { StyleSheet, Text, View  } from 'react-native'
import React from 'react'

export default function DesignScreen() {
  return (
    <View>
      <View style={{width:50,height:50,backgroundColor:'red'}}/>
      <View style={{width:100,height:100,backgroundColor:'blue'}}/>
      <View style={{width:150,height:150,backgroundColor:'red'}}/>
      <View style={{width:100,height:100,backgroundColor:'blue'}}/>
      <View style={{width:50,height:50,backgroundColor:'red'}}/>
      <View style={styles.mainBorder}>
      <Text style={styles.mainText}>1</Text>
      <Text style={styles.mainText}>2</Text>
      <Text style={styles.mainText}>3</Text>
      
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  mainBorder:{
    borderWidth:1,
    borderColor:'black',
    backgroundColor:'yellow',
    margin:20,
    borderRadius:20,
    alignItems:'center',
  },
  mainText:{
    borderWidth:30,
    borderColor:'blue',
    backgroundColor:'red',
    margin:30,
    padding:20,
    borderRadius:20,
    //marginHorizontal:30,
    //marginVertical:30,
  
  
  }
})