import { StatusBar } from 'expo-status-bar';
import { StyleSheet, TextInput, Text, Image, View, Picker, CheckBox } from 'react-native';
import { useState } from "react";

export default function App() {

  const [nome, setNome] = useState('')
  const [telefone, setTelefone] = useState('')
  const [endereco, setEndereco] = useState('')
  const [email, setEmail] = useState('')
  const [aceito, setAceito] = useState(false)
  const [hobby, setHobby] = useState('')

  return (
    
    <View style={styles.container}>

      <View style={styles.header}>
        <Image
          style={styles.image}
          source={require('./assets/fotoperfil.jpg')}
        />  
      </View>

      <View style={styles.main}>
        <View style={styles.dados}>
          <Text>Dados Pessoais</Text>

          <TextInput
            style={styles.input}
            placeholder="Digite seu nome"
            value={nome}
            onChangeText={(text) =>setNome(text)}
          />
          <TextInput
          style={styles.input}
          placeholder="Digite seu telefone"
          keyboardType="numeric"
          value={telefone}
            onChangeText={(text) =>setTelefone(text)}
          />
           <TextInput
            style={styles.input}
            placeholder="Digite seu Endereço"
            value={endereco}
            onChangeText={(text) =>setEndereco(text)}
          />
           <TextInput
            style={styles.input}
            placeholder="Digite seu Email"
            value={email}
            onChangeText={(text) =>setEmail(text)}
          />

       </View>

        <View style={styles.info}>
          <Text>Outras informações</Text>
          <Picker style={styles.select}
            selectedValue={hobby}
            onValueChange={(itemValue, itemIndex) => setHobby(itemValue)}
            >

            <Picker.Item  label="Programar" value="programar"/>
            <Picker.Item  label="Correr" value="correr"/>
            <Picker.Item  label="Dormir" value="dormir"/>
            <Picker.Item  label="Dançar" value="dançar"/>
            <Picker.Item  label="Jogar" value="jogar"/>
          </Picker>

          <View style={styles.check}>
           <CheckBox 
            value={aceito}
            onValueChange={() => setAceito(!aceito)}
           />
           
            <Text style={styles.size}>Aceito os termos de Serviço</Text>
          </View>
             
        </View>

        <View style={styles.modal}>
          <Text>Nome: {nome}</Text>
          <Text>Telefone: {telefone}</Text>
          <Text>Endereço: {endereco}</Text>
          <Text>Email: {email}</Text>
          <Text>Hobby: {hobby}</Text>
          <Text>Aceito: {aceito ? '👍' : '👎'}</Text>
               
        </View>
        
    </View>
      
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFC0CB',
    padding: 10,
    width: "100%",

  },

  header: {
    flex: 0.5,
    width: '100%',
    alignItems: 'center',
  },

  image: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginTop: 10,

  },

  main: {
    flex: 3,
    alignItems: 'center',
    padding: 5,
    justifyContent: "center",
  },

  dados: {
    flex: 0.44,
    gap: 10,
    border: 'solid',
    borderRadius: 5,
    padding: 10,
    margin: 10,
    width: "100%",

  },

  input: {
    borderColor: '#708090',
    border: 'solid',
    width: "100%",
    padding: 10,

  },

  select: {
    borderColor: '#708090',
    border: 'solid',
    backgroundColor: '#FFC0CB',
    padding: 5,
  },

  info: {
    flex: 0.21,
    border: 'solid',
    borderRadius: 5,
    padding: 10,
    gap: 10,
    margin: 10,
    width: "100%",
    
  },

  check: {
    display: "flex",
    flexDirection: "row",
    gap: 5,
    marginTop: 5,
  },

  size: {
    fontSize: 13,

  },

  modal: {
    flex: 0.3,
    border: 'solid',
    borderRadius: 5,
    width: 320,
    padding: 10,
    gap: 10,
    margin: 10,
    width: "100%",
  }
});
