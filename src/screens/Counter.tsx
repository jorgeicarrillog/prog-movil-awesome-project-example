import React, { useState } from 'react'
import { Button, Text, View } from 'react-native';

export const Counter = () => {
    const [count, setCounter] = useState(10);
    
  return (
    <View style={{flex:1, backgroundColor: 'grey', justifyContent: 'center'}}>
        <Text style={{textAlign:'center', fontSize:40}}>
            <Button title='<<' onPress={()=> setCounter(count-1)}></Button>
            Contador {count}
            <Button title='>>' onPress={()=> setCounter(count+1)}></Button>
        </Text>
    </View>
  )
}
