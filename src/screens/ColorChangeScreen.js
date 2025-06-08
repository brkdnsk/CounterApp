import { StyleSheet, Text, View ,Button , FlatList } from 'react-native'
import React ,{useReducer} from 'react'
import ColorChange from '../../Components/ColorChange'

const reducer=(state,action)=>{

    console.log(action);
}


export default function ColorChangeScreen() {
    const [state, dispatch] = useReducer(reducer, {red:0,green:0,blue:0})
  return (
        <View>
            <ColorChange colors="Kırmızı" onIncrease={()=>dispatch({type:'changeRed',payload:20})} onDecrease={()=>dispatch({type:'changeRed',payload:-20})}  />
            <ColorChange colors="Mavi" onIncrease={()=>dispatch({type:'changeBlue',payload:20})} onDecrease={()=>dispatch({type:'changeBlue',payload:-20})}  />
            <ColorChange colors="Yeşil" onIncrease={()=>dispatch({type:'changeGreen',payload:20})} onDecrease={()=>dispatch({type:'changeGreen',payload:-20})}  /> 
        </View>
  )
}

const styles = StyleSheet.create({})