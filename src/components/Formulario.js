import React, { useState } from "react";
import {Modal, Text, Button, StyleSheet, View, TextInput, ScrollView, Alert, Pressable} from 'react-native';
import DatePicker from "react-native-date-picker";
//import DatePicker from "react-native-date-picker";
import DateTimePicker from 'react-native-ui-datepicker';

const Formulario = ({modalVisible, setModalVisible}) => {

    const [paciente, setPaciente] = useState('');
    const [propietario, setPropietario] = useState('')
    const [email, setEmail] = useState('')
    const [telefono, setTelefono] = useState('')
    const [fecha, setFecha] = useState(new Date())
    const [sintomas, setSintomas] = useState('')

    return (
        <Modal animationType = 'slide' visible = {modalVisible}>
            <View style = {styles.Contenido}>
                <ScrollView>
                    <Text style = {styles.Titulo}>
                        Nueva {''}
                        <Text style = {styles.TituloBold}>Cita</Text>
                    </Text>

                    {/* Botón */}

                    <Pressable 
                    style = {styles.BtnCancelar}
                    onPress={() => setModalVisible(!modalVisible)}>
                        <Text style = {styles.BtnCancelarTexto}>X Cancelar</Text>
                    </Pressable>

                    <View style = {styles.Campo}>
                        <Text style = {styles.Label}>Nombre Paciente</Text>
                        <TextInput 
                        style = {styles.Input} 
                        placeholder= "Nombre del Paciente"
                        placeholderTextColor={'#666'}
                        value = {paciente}
                        onChangeText = {setPaciente}/> 
                    </View>

                    <View style = {styles.Campo}>
                        <Text style = {styles.Label}>Nombre Propietario</Text>
                        <TextInput 
                        style = {styles.Input} 
                        placeholder= "Nombre del Propietario"
                        placeholderTextColor={'#666'}
                        value = {propietario}
                        onChangeText = {setPropietario} /> 
                    </View>

                    <View style = {styles.Campo}>
                        <Text style = {styles.Label}>Email Paciente</Text>
                        <TextInput 
                        style = {styles.Input} 
                        placeholder= "Email"
                        placeholderTextColor={'#666'}
                        keyboardType="email-address"
                        value = {email}
                        onChangeText = {setEmail} /> 
                    </View>

                    <View style = {styles.Campo}>
                        <Text style = {styles.Label}>Telefono Propietario</Text>
                        <TextInput 
                        style = {styles.Input} 
                        placeholder= "Telefono del Propietario"
                        placeholderTextColor={'#666'}
                        keyboardType="number-pad"
                        value = {telefono}
                        onChangeText = {setTelefono}
                        maxLength = {10} /> 
                    </View>

                    <View style = {styles.Campo}>
                        <Text style = {styles.Label}>Fecha Alta</Text>
                        <View style = {styles.FechaContenedor}>
                            <DateTimePicker
                            Date = {fecha}
                            locale = 'es'
                            mode = 'date'
                            onValueChange = {(date) => setFecha(date)}/>
                        </View>
                    </View>

                    <View style = {styles.Campo}>
                        <Text style = {styles.Label}>Sintomas</Text>
                        <TextInput 
                        style = {styles.SintomasInput} 
                        placeholder= "Sintomas del Paciente"
                        placeholderTextColor={'#666'}
                        keyboardType="number-pad"
                        value = {sintomas}
                        onChangeText = {setSintomas}
                        multiline = {true}
                        numberOfLines = {4} /> 
                    </View>

                    <Pressable  style={styles.BtnNuevaCita}>
                        <Text style = {styles.BtnNuevaCitaTexto}>Agregar Paciente</Text>
                    </Pressable>
                </ScrollView>
            </View>
        </Modal>
    )
}

const styles = StyleSheet.create({
    Contenido: {
        backgroundColor: '#6D28D9',
        flex: 1,
    },

    Titulo: {
        fontSize: 30,
        fontWeight: 600,
        textAlign: 'center',
        marginTop: 30,
        color: '#FFF',
    },

    TituloBold: {
        fontWeight: 900,
    },

    Campo: {
        marginTop: 10,
        marginHorizontal: 30,
    },
    
    Label: {
        color: '#FFF',
        marginBottom: 10,
        marginTop: 15,
        fontSize: 20,
        fontWeight: 600,
    },

    Input: {
        backgroundColor: "#FFF",
        padding: 15,
        borderRadius: 10,
    },

    SintomasInput: {
        height: 100,
        backgroundColor: "#FFF",
        padding: 15,
        borderRadius: 10,
    },

    FechaContenedor: {
        backgroundColor: "#FFF",
        borderRadius: 10,
    },

    BtnCancelar: {
        marginVertical: 30,
        backgroundColor: "#5827A4",
        marginHorizontal: 30,
        padding: 15,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: "#FFF",
    },

    BtnCancelarTexto: {
        color: "#FFF",
        textAlign: "center",
        fontWeight: "900",
        fontSize: 16,
        textTransform: "uppercase",
    },

    BtnNuevaCita: {
        marginVertical: 50,
        backgroundColor: "#F59E0B",
        paddingVertical: 10,
        paddingHorizontal: 30,
        borderRadius: 10,
    },

    BtnNuevaCitaTexto: {
        textAlign: "center",
        color: "#5827A4",
        textTransform: "uppercase",
        fontWeight: 900,
        fontSize: 16,
    },
})

export default Formulario