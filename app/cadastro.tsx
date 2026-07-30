import * as React from 'react';

import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet
} from 'react-native';

import { router } from 'expo-router';


export default function Cadastro() {

  return (

    <View style={styles.container}>

      <Text style={styles.titulo}>
        Cadastro
      </Text>
      
      <Text style={styles.info8}>
        "*" Indica campos obrigatórios
      </Text>

      <TextInput
        placeholder="Nome"
        placeholderTextColor="#999"
        style={styles.input}
      />

         <TextInput
        placeholder="Cpf/Cnpj"
        placeholderTextColor="#999"
        secureTextEntry
        style={styles.input}
      />
         <TextInput
        placeholder="Data de nascimento (DD/MM/AAAA)"
        placeholderTextColor="#999"
        secureTextEntry
        style={styles.input}
      />

      <TextInput
        placeholder="Email"
        placeholderTextColor="#999"
        style={styles.input}
      />


      <TextInput
        placeholder="Senha"
        placeholderTextColor="#999"
        secureTextEntry
        style={styles.exsenha}
      />


      <TouchableOpacity
        style={styles.botao}
        onPress={() => router.push('/home')}
      >

        <Text style={styles.botaoTexto}>
          Cadastrar
        </Text>

      </TouchableOpacity>


      <TouchableOpacity
        onPress={() => router.back()}
      >

        <Text style={styles.voltar}>
          Voltar
        </Text>

      </TouchableOpacity>


    </View>

  );
}


const styles = StyleSheet.create({

  container:{
    flex:1,
    backgroundColor:'#121212',
    justifyContent:'center',
    alignItems:'center',
    padding:20
  },


  titulo:{
    color:'#fff',
    fontSize:28,
    fontWeight:'bold',
    marginBottom:65,
    
  },

  
  info8:{
    color:'#fff',
    fontSize:14,
    fontWeight:'bold',
    marginBottom:12,
    alignSelf:'flex-start',
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


  botao:{
    width:'100%',
    height:50,
    backgroundColor:'#FFD600',
    justifyContent:'center',
    alignItems:'center',
    borderRadius:10
  },

   exsenha:{
    width:'100%',
    height:55,
    backgroundColor:'#30302f',
    color:'#fff',
    borderRadius:10,
    paddingHorizontal:15,
    marginBottom:55
  },


  botaoTexto:{
    color:'#000',
    fontWeight:'bold',
    fontSize:18
  },

  voltar:{
    color:'#FFD600',
    marginTop:20
  }

});