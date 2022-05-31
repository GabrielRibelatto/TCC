import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View, TextInput, Button, TouchableOpacity  } from 'react-native';



export default function Entrar({navigation}) {

  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  
  const entrar = () => {
    navigation.navigate('Mapa');
  }

  const cadastrar = () =>{
    navigation.navigate('Cadastro');
  }
  return (
    <View style={styles.container}>
      <StatusBar hidden />
      
      <TextInput placeholder='E-mail...' keyboardType='email-address' style={styles.textInput} onChangeText={text=>setEmail(text)} />
      <TextInput placeholder='Senha...' secureTextEntry={true} style={styles.textInput} onChangeText={text=>setSenha(text)} />
      <Button title='Entrar'  color='#32a852' onPress={()=>entrar()}/>
      <TouchableOpacity style={styles.textCadastrar} onPress={()=>cadastrar()}>
          <Text style={styles.textCadastrarCor}>Cadastrar</Text>
      </TouchableOpacity>
    
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding:20,
    width:'100%'
  },
  textInput: {
    width: '100%',
    height:40,
    backgroundColor:'lightgrey',
    borderRadius: 20,
    paddingLeft:10,  
    marginBottom: 10
  },
  textCadastrar: {
    marginTop:20,
  },
  textCadastrarCor: {
      color: 'blue'
  }
});
