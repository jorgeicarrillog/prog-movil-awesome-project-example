import React, { useState } from "react";
import { Alert, Button, SafeAreaView, StyleSheet, Text, TextInput } from "react-native";

const Form = () => {
  const [text, onChangeText] = useState(null);
  const [email, onChangeEmail] = useState(null);
  const [number, onChangeNumber] = useState(null);

  return (
    <SafeAreaView style={{flex:1, backgroundColor: 'white', justifyContent: 'center'}}>
        <Text style={{textAlign:'center', fontSize:16}}>Ingresa tus datos</Text>
        <TextInput
            style={styles.input}
            onChangeText={onChangeText}
            value={text}
            placeholder="Nombre completo"
        ></TextInput>
        <TextInput
            style={styles.input}
            onChangeText={onChangeNumber}
            value={number}
            placeholder="Celular"
            keyboardType="phone-pad"
        ></TextInput>
        <TextInput
            style={styles.input}
            onChangeText={onChangeEmail}
            value={number}
            placeholder="Email"
            keyboardType="email-address"
        ></TextInput>
        <Button title="Guardar" onPress={() => Alert.alert('Su info. Nombre: '+text+'. Celular: '+number+'. Emial: '+email)}></Button>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});

export default Form;