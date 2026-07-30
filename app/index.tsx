import * as React from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
  Alert,
} from 'react-native';

import { router } from 'expo-router';

export default function Login() {

  const [login, setLogin] = React.useState('');
  const [senha, setSenha] = React.useState('');

  function entrar() {

    if (login == '' || senha == '') {
      Alert.alert('Erro', 'Preencha todos os campos!');
      return;
    }

    router.push('/home');

  }

  return (

    <View style={styles.container}>

      <Image
        source={require('../assets/logo.png')}
        style={styles.logo}
      />

      <TextInput
        style={styles.input}
        placeholder="Login"
        placeholderTextColor="#BBBBBB"
        value={login}
        onChangeText={setLogin}
      />

      <TextInput
        style={styles.input}
        placeholder="Senha"
        placeholderTextColor="#BBBBBB"
        secureTextEntry
        value={senha}
        onChangeText={setSenha}
      />

      <TouchableOpacity
        style={styles.botao}
        onPress={entrar}
      >

        <Text style={styles.textoBotao}>
          Entrar
        </Text>

      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => router.push('/cadastro')}
      >

        <Text style={styles.novoUsuario}>
          Novo usuário
        </Text>

      </TouchableOpacity>

      <View style={styles.linha} />

      <Text style={styles.texto}>
        Ou entre com
      </Text>

      <View style={styles.icones}>

        <Image
          source={require('../assets/google.png')}
          style={styles.icone}
        />

        <Image
          source={require('../assets/apple.png')}
          style={styles.icone}
        />

        <Image
          source={require('../assets/outlook.png')}
          style={styles.icone}
        />

      </View>

    </View>

  );

}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#000000',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },

  logo: {
    width: 220,
    height: 220,
    resizeMode: 'contain',
    marginBottom: 40,
  },

  input:{
    width:'100%',
    height:55,
    backgroundColor:'#30302f',
    color:'#fff',
    borderRadius:10,
    paddingHorizontal:15,
    marginBottom:15
  },

  botao: {
    backgroundColor: '#FFD600',
    width: 180,
    height: 50,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },

  textoBotao: {
    fontSize: 22,
    fontWeight: 'bold',
    color: 'black',
  },

  novoUsuario:{
    alignSelf:'center',
    fontSize:14,
    marginTop:10,
    height:30,
    backgroundColor:'#30302f',
    color:'#fff',
    borderRadius:10,
    paddingHorizontal:15,
    marginBottom:20
    ///Não consigo alinhar o texto "Novo usuário" no centro do botão, mesmo com o alignSelf: 'center', ele continua desalinhado.
  },

  linha: {
    width: '100%',
    height: 1,
    backgroundColor: '#777',
    marginTop: 45,
    marginBottom: 25,
  },

  texto: {
    color: 'white',
    fontSize: 14,
    marginBottom: 20,
  },

  icones: {
    flexDirection: 'row',
    gap: 40,
    justifyContent: 'space-around',
    width: '80%',
    
  },

  icone: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#ffffff',

  },    ///Não consigo separar o icone do fundo branco, mesmo com o borderRadius, ele continua quadrado, como se fosse uma imagem quadrada.


});