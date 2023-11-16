import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, Pressable } from 'react-native';
import { Modal } from 'react-native-web';
import React, {useState} from 'react';
import Formulario from './src/components/Formulario';

export default function App() {

  /* <-- Hooks --> */ 

  const [modalVisible, setModalVisible] = useState(false)

  console.log(modalVisible)

  const nuevaCita = () => {
    console.log('Presionaste el botón')
  }

  return (
    <View style = {styles.container}>
      <Text style = {styles.titulo}>
        Administrador de Citas 
        <Text style = {styles.tituloBold}>Veterinaria</Text>
      </Text>
      <Pressable onPress={() => setModalVisible(true)} style = {styles.btnNuevaCita}>
        <Text style = {styles.btnTextNuevasCitas}>Nueva Cita</Text>
      </Pressable>

      <Formulario 
      modalVisible = {modalVisible}
      setModalVisible = {setModalVisible}/>
    </View>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  titulo: {
    margin: 24,
    fontSize: 30,
    textTransform: 'uppercase',
    fontWeight: 600,
    color: '#374151',
    textAlign: 'center',
  },

  tituloBold: {
    fontWeight: 900,
    color: '#6D28D9',
  },

  btnNuevaCita: {
    backgroundColor: '#6D28D9',
    padding: 15,
    marginTop: 30,
    marginLeft: 20,
    marginRight: 20,
    borderRadius: 10,
  },

  btnTextNuevasCitas: {
    textAlign: 'center',
    color: '#FFF',
    fontSize: 20,
    fontWeight: 900,
    textTransform: 'uppercase',
  },
});
