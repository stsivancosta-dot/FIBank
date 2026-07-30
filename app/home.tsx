import * as React from 'react';

import {
  SafeAreaView,
  ScrollView,
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Alert
} from 'react-native';

import { router } from 'expo-router';


export default function Home() {

  function mostrarMensagem(nome: string) {
    Alert.alert(nome, `Você clicou em ${nome}`);
  }
//top reações skakaaka

  return (

    <SafeAreaView style={styles.container}>

      <ScrollView
        contentContainerStyle={styles.conteudo}
        showsVerticalScrollIndicator={false}
      >

        {/* CABEÇALHO */}
        <View style={styles.cabecalho}>

          <View style={styles.usuario}>

            <View style={styles.avatar}>
              <Text style={styles.avatarEmoji}>
                🧑‍💻
              </Text>
            </View>
            //IA

            
            <Text style={styles.saudacao}>
              Olá, Usuário!
            </Text>

          </View>


          <View style={styles.iconesCabecalho}>

            <TouchableOpacity
              style={styles.botaoCabecalho}
              onPress={() => mostrarMensagem('Mensagens')}
            >
              <Text style={styles.iconeCabecalho}>
                ✉
              </Text>
            </TouchableOpacity>


            <TouchableOpacity
              style={styles.botaoCabecalho}
              onPress={() => router.back()}
            >
              <Text style={styles.iconeCabecalho}>
                ↩
              </Text>
            </TouchableOpacity>


            <TouchableOpacity
              style={styles.botaoCabecalho}
              onPress={() => mostrarMensagem('Configurações')}
            >
              <Text style={styles.iconeCabecalho}>
                ⚙
              </Text>
            </TouchableOpacity>

          </View>

        </View>


        <View style={styles.areaSaldo}>

          <Text style={styles.textoSaldo}>
            Saldo:
          </Text>

          <Text style={styles.valorSaldo}>
            R$ ****,**
          </Text>

        </View>


        <View style={styles.rendimento}>

          <Text style={styles.textoRendimento}>
            Rendimento Passivo:
          </Text>

          <Text style={styles.setaRendimento}>
            ▲
          </Text>

          <Text style={styles.valorRendimento}>
            **,**
          </Text>

        </View>





// separação visual de codigo.





        <View style={styles.opcoes}>

          <TouchableOpacity
            style={styles.opcao}
            onPress={() => mostrarMensagem('Pix')}
          >

            <View style={styles.circuloOpcao}>
              <Text style={styles.iconeOpcao}>
                ⇧
              </Text>
            </View>

            <Text style={styles.nomeOpcao}>
              Pix
            </Text>

          </TouchableOpacity>


          <TouchableOpacity
            style={styles.opcao}
            onPress={() => mostrarMensagem('Empréstimos')}
          >

            <View style={styles.circuloOpcao}>
              <Text style={styles.iconeOpcao}>
                ⇄
              </Text>
            </View>

            <Text style={styles.nomeOpcao}>
              Empréstimos
            </Text>

          </TouchableOpacity>


          <TouchableOpacity
            style={styles.opcao}
            onPress={() => mostrarMensagem('Ações')}
          >

            <View style={styles.circuloOpcao}>
              <Text style={styles.iconeOpcao}>
                ↕
              </Text>
            </View>

            <Text style={styles.nomeOpcao}>
              Ações
            </Text>

          </TouchableOpacity>


          <TouchableOpacity
            style={styles.opcao}
            onPress={() => mostrarMensagem('Cartões')}
          >

            <View style={styles.circuloOpcao}>
              <Text style={styles.iconeCartao}>
                💳
              </Text>
            </View>

            <Text style={styles.nomeOpcao}>
              Cartões
            </Text>

          </TouchableOpacity>

        </View>







// separação visual de codigo.





        <View style={styles.areaCaixas}>

          <TouchableOpacity
            style={styles.caixa}
            onPress={() => mostrarMensagem('Caixa 1')}
          >

            <View style={styles.quadroCaixa}>
              <Text style={styles.iconePasta}>
                💰
              </Text>
            </View>

            <Text style={styles.nomeCaixa}>
              Reservas
            </Text>

          </TouchableOpacity>


          <TouchableOpacity
            style={styles.caixa}
            onPress={() => mostrarMensagem('Caixa 2')}
          >

            <View style={styles.quadroCaixa}>
              <Text style={styles.iconePasta}>
                💰
              </Text>
            </View>

            <Text style={styles.nomeCaixa}>
              Roles
            </Text>

          </TouchableOpacity>


          <TouchableOpacity
            style={styles.caixa}
            onPress={() => mostrarMensagem('Caixa 3')}
          >

            <View style={styles.quadroCaixa}>
              <Text style={styles.iconePasta}>
                💰
              </Text>
            </View>

            <Text style={styles.nomeCaixa}>
              Celular novo
            </Text>

          </TouchableOpacity>


          <TouchableOpacity
            style={styles.caixa}
            onPress={() => mostrarMensagem('Caixa 4')}
          >

            <View style={styles.quadroCaixa}>
              <Text style={styles.iconePasta}>
                💰
              </Text>
            </View>

            <Text style={styles.nomeCaixa}>
              Viagem
            </Text>

          </TouchableOpacity>

        </View>

      </ScrollView>

    </SafeAreaView>

  );
}





// separação visual de codigo.






const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#000'
  },


  conteudo: {
    flexGrow: 1,
    paddingTop: 30,
    paddingBottom: 30
  },


  cabecalho: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 18
  },


  usuario: {
    flexDirection: 'row',
    alignItems: 'center'
  },


  avatar: {
    width: 58,
    height: 58,
    borderRadius: 29,
    backgroundColor: '#9ec5ff',
    alignItems: 'center',
    justifyContent: 'center'
  },


  avatarEmoji: {
    fontSize: 34
  },


  saudacao: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    marginLeft: 10
  },


  iconesCabecalho: {
    flexDirection: 'row',
    alignItems: 'center'
  },


  botaoCabecalho: {
    width: 42,
    height: 42,
    alignItems: 'center',
    justifyContent: 'center'
  },


  iconeCabecalho: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold'
  },


  areaSaldo: {
    marginTop: 36,
    paddingHorizontal: 14
  },


  textoSaldo: {
    color: '#fff',
    fontSize: 26
  },


  valorSaldo: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 4,
    marginLeft: 14
  },


  rendimento: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    marginTop: 85,
    paddingHorizontal: 14
  },


  textoRendimento: {
    color: '#fff',
    fontSize: 15
  },


  setaRendimento: {
    color: '#fff',
    fontSize: 15,
    marginLeft: 8
  },


  valorRendimento: {
    color: '#fff',
    fontSize: 15,
    marginLeft: 8
  },


  opcoes: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 20,
    paddingHorizontal: 5
  },


  opcao: {
    width: '24%',
    alignItems: 'center'
  },


  circuloOpcao: {
    width: 74,
    height: 74,
    borderRadius: 37,
    backgroundColor: '#171717',
    alignItems: 'center',
    justifyContent: 'center'
  },


  iconeOpcao: {
    color: '#f1ff00',
    fontSize: 43,
    fontWeight: 'bold'
  },


  iconeCartao: {
    color: '#f1ff00',
    fontSize: 45,
    fontWeight: 'bold'
  },


  nomeOpcao: {
    color: '#fff',
    fontSize: 15,
    marginTop: 7,
    textAlign: 'center'
  },


  areaCaixas: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    borderWidth: 2,
    borderColor: '#fff',
    marginTop: 30,
    paddingHorizontal: 8,
    paddingVertical: 24
  },


  caixa: {
    width: '23%',
    alignItems: 'center'
  },


  quadroCaixa: {
    width: '100%',
    height: 80,
    borderWidth: 3,
    borderColor: '#171717',
    borderRadius: 4,
    alignItems: 'center',
    justifyContent: 'center'
  },


  iconePasta: {
    color: '#f1ff00',
    fontSize: 45,
    fontWeight: 'bold',
  },


  nomeCaixa: {
    color: '#fff',
    fontSize: 16,
    marginTop: 8,
    textAlign: 'center'
  }

});