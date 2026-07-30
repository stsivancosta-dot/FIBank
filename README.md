FIBank
## README.md Inicial Extensivo sobre o código.

---

# Link do Figma
https://www.figma.com/design/Dhj12djjp8zhkk1VE0Rd2H/Fibank.v2?m=auto&t=RDBN5IbDqfT6VIQL-6
---

# Estrutura do Projeto

```text
app/
├── _layout.tsx
├── index.tsx
├── cadastro.tsx
└── home.tsx

assets/
├── logo.png
├── google.png
├── apple.png
└── outlook.png
```

## Função dos arquivos

```text
_layout.tsx     # Configuração da navegação com Expo Router
index.tsx       # Tela de Login
cadastro.tsx    # Tela de Cadastro
home.tsx        # Tela de Menu/Home
```

---

# Tecnologias Utilizadas

* React Native
* Expo
* Expo Router
* TypeScript
* Expo Go

---

# Design System

## Cores

* Background: `#121212`
* Background dos inputs: `#222222`
* Botão principal: `#FFD600`
* Texto principal: `#FFFFFF`
* Texto secundário: `#999999`
* Texto de destaque: `#FFD600`
* Background dos ícones: `#1F1F1F`
  (Com Micro alterações)
  
## Tipografia

* Fonte: Nenhuma(Padrão do sistema de quem navega)
* Tamanhos:

  * Texto pequeno: `15px`
  * Texto padrão: `16px`
  * Botões: `18px`
  * Títulos: `28px`
* Peso dos títulos e botões: `bold`

## Espaçamentos

Os espaçamentos são controlados principalmente por:

```tsx
marginTop
marginBottom
marginLeft
marginRight
padding
gap
```

Exemplo:

```tsx
titulo: {
  color: '#fff',
  fontSize: 28,
  fontWeight: 'bold',
  marginBottom: 30
}
```
detalhe(aprendizado)
O `marginBottom` cria um espaço abaixo do título e empurra o próximo componente para baixo.

---

# Instalação

## Instalar as dependências

```bash
npm install
```

## Executar o projeto

```
npx expo start/npm start
```

O aplicativo pode ser aberto pelo **Expo Go**, utilizando o QR Code exibido no terminal.

## Executar limpando o cache

```bash
npx expo start -c
```

Esse comando pode ser utilizado quando o Expo apresenta erros antigos ou não reconhece alterações recentes.
(em caso de muitos teste contínuos)
---

# Telas
## Login

A tela de Login contém:

* logotipo;(não foi bem editado)
* campo de email;
* campo de senha;
* botão Entrar;
* botão Novo usuário;(problemas com alinhamneto)
* ícones de login rápido;(padding-internal não funciona ou border-radius)
* validação simples dos campos;
* navegação para Cadastro e Home.

Os dados digitados são armazenados utilizando `useState`: (Na mesma sessão)

```tsx
const [email, setEmail] = React.useState('');
const [senha, setSenha] = React.useState('');
```

Os campos atualizam os estados conforme o usuário digita:

```tsx
<TextInput
  value={email}
  onChangeText={setEmail}
/>
```

```tsx
<TextInput
  value={senha}
  onChangeText={setSenha}
  secureTextEntry
/>
```

O atributo:

```tsx
secureTextEntry
```

esconde os caracteres digitados no campo de senha.

## Cadastro

A tela de Cadastro contém:

* título;
* texto de obrigatoriedade;
* campo de nome;
* cpf/cnpj;
* data de nascimento
* campo de email;
* campo de senha;
* botão Cadastrar;
* botão Voltar;
* navegação para Home;
* retorno para a tela anterior.

## Menu/Home

A tela de Menu foi baseada no protótipo desenvolvido no Figma e contém:

* cabeçalho;
* avatar do usuário;
* saudação;
* botões superiores;
* saldo;
* rendimento passivo;
* opções principais;
* área de caixas;
* botões interativos.

Entre as opções do menu estão:

* Rendimento Passivo
* Pix;
* Empréstimos;
* Ações;
* cartões
* Cartões;
* Caixa 1;
* Caixa 2;
* Caixa 3;
* Caixa 4.

Atualmente, os botões podem utilizar alertas para demonstrar a interação:

```tsx
function mostrarMensagem(nome: string) {
  Alert.alert(nome, `Você clicou em ${nome}`);
}
```

---

# Componentes Utilizados

## View

Utilizado para criar caixas, blocos e organizar os elementos da interface.

```tsx
<View style={styles.container}>
  {/* Conteúdo */}
</View>
```

## Text

Utilizado para exibir textos.

```tsx
<Text style={styles.titulo}>
  Entrar
</Text>
```

## TextInput

Utilizado para permitir que o usuário digite informações.

```tsx
<TextInput
  placeholder="Email"
  value={email}
  onChangeText={setEmail}
/>
```

## TouchableOpacity

Utilizado para criar botões clicáveis.

```tsx
<TouchableOpacity onPress={entrar}>
  <Text>Entrar</Text>
</TouchableOpacity>
```

## Image

Utilizado para exibir imagens armazenadas na pasta `assets`.

```tsx
<Image
  source={require('../assets/logo.png')}
  style={styles.logo}
/>
```

## StyleSheet

Utilizado para organizar os estilos das telas.

```tsx
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212'
  }
});
```

## Alert

Utilizado para exibir avisos ao usuário.

```tsx
Alert.alert('Aviso', 'Preencha email e senha');
```

---

# Ícones de Login Rápido

Os ícones de Google, Apple e Outlook ficam armazenados na pasta:

```text
assets/
```

Cada imagem pode ser colocada dentro de um círculo:

```tsx
<View style={styles.circulo}>
  <Image
    source={require('../assets/google.png')}
    style={styles.icon}
  />
</View>
```

Estilo do círculo:

```tsx
circulo: {
  width: 60,
  height: 60,
  borderRadius: 30,
  backgroundColor: '#1F1F1F',
  alignItems: 'center',
  justifyContent: 'center'
}
```

O valor de `borderRadius` corresponde à metade do tamanho do componente, criando o formato circular. (viavel a mudanças)

---

# Validações

## Login

O Login verifica se os campos de email e senha estão preenchidos:

```tsx
function entrar() {
  if (email === '' || senha === '') {
    Alert.alert('Aviso', 'Preencha email e senha');
    return;
  }

  router.push('/home');
}
```

Se algum campo estiver vazio, o aplicativo exibe um alerta.

Se os dois campos estiverem preenchidos, o usuário é direcionado para a Home. (Implementar na tela de Cadastro)

## Cadastro

---

# Navegação

A navegação foi implementada utilizando o **Expo Router**.

Cada arquivo dentro da pasta `app` representa uma rota:

```text
index.tsx       → /
cadastro.tsx    → /cadastro
home.tsx        → /home
```

O Router é importado assim:

```tsx
import { router } from 'expo-router';
```

## Login para Home

```tsx
router.push('/home');
```

## Login para Cadastro

```tsx
router.push('/cadastro');
```

## Cadastro para Home

```tsx
router.push('/home');
```

## Voltar para a tela anterior

```tsx
router.back();
```

---

# Fluxo de Navegação

```text
Login
├── Entrar ─────────► Home/Menu
└── Novo usuário ───► Cadastro
                         ├── Cadastrar ─► Home/Menu
                         └── Voltar ─────► Login
```

---

# Configuração do Expo Router

O arquivo `_layout.tsx` configura as telas da aplicação:

```tsx
import { Stack } from 'expo-router';

export default function Layout() {
  return (
    <Stack
      screenOptions={{
        headerShown: false
      }}
    />
  );
}
```

A configuração:

```tsx
headerShown: false
```

remove o cabeçalho padrão do Expo Router para manter o layout fiel ao Figma.

---

# Fidelidade ao Design(Média)

O layout das telas foi desenvolvido com base no protótipo criado no Figma.

Foram considerados:

* cores;
* tamanhos;
* imagens;(similares)
* ícones;(similares)
* bordas arredondadas;
* posição dos elementos;
* espaçamentos;
* alinhamentos;
* componentes interativos.

Os estilos foram organizados utilizando `StyleSheet.create()`.

Exemplo de estilo de campo:

```tsx
input: {
  width: '100%',
  height: 50,
  backgroundColor: '#222',
  color: '#fff',
  borderRadius: 10,
  paddingHorizontal: 15,
  marginBottom: 15
}
```

Exemplo de botão principal:

```tsx
botao: {
  width: '100%',
  height: 50,
  backgroundColor: '#FFD600',
  borderRadius: 10,
  alignItems: 'center',
  justifyContent: 'center'
}
```

---

# Funcionalidades Implementadas

* abertura do aplicativo no Expo Go;
* navegação com Expo Router;
* tela de Login;
* tela de Cadastro;
* tela de Menu/Home;
* digitação nos campos;
* proteção visual do campo de senha;
* validação de campos vazios no Login;
* botão Entrar;
* botão Novo usuário;
* botão Cadastrar;
* botão Voltar;
* carregamento de imagens locais;
* ícones de login rápido;
* botões interativos no Menu;
* layout baseado no Figma.
