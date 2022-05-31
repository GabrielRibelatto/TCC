import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View, TextInput, Switch, Button } from 'react-native';

export default function Cadastro() {

  const [email, setEmail] = useState('');
  const [nome, setNome] = useState('');
  const [senha, setSenha] = useState('');
  const [endereco, setEndereco] = useState('');
  const [tipoUsuario, setTipoUsuario] = useState('');
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  const cadastro = () => {
      alert('Funfa!')
  }

  return (
    <View style={styles.container}>
      <StatusBar hidden />

      <TextInput placeholder='Nome...' style={styles.textInput} onChangeText={text=>setNome(text)} />
      <TextInput placeholder='E-mail...' keyboardType='email-address' style={styles.textInput} onChangeText={text=>setEmail(text)} />
      <TextInput placeholder='Senha...' secureTextEntry={true} style={styles.textInput} onChangeText={text=>setSenha(text)} />
      <TextInput placeholder='Endereço...' style={styles.textInput} onChangeText={text=>setEndereco(text)} />
      <View style={styles.containerDois}>
        <Text style={styles.textColetor}>Coletor: </Text>
        <Switch
            style={styles.switch}
            trackColor={{ false: "#767577", true: "#7d7777" }}
            thumbColor={isEnabled ? "#32a852" : "#f4f3f4"}
            onValueChange={toggleSwitch}
            value={isEnabled}
        />
      </View>
                
        


      <Button 
        color='#32a852' 
        title='Cadastrar' 
        onPress={()=>cadastro()} />  
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
  textColetor: {
    height: 40,
    alignItems:'center',
    justifyContent:'center',
    marginTop:22

  },
  containerDois: {
    flexDirection: 'row',
    marginBottom:40
    
  },
  switch: {
    alignItems:'center',
    justifyContent: 'center'
  }
});
