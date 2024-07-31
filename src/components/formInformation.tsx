import { Alert, Image, StyleSheet, Text, TouchableOpacity, View } from "react-native"
import Logo from '../../assets/batsinal.jpg'
import { InputText } from "./inpuText";
import { useState } from "react";

interface Props {
    setVisible: Function;
}

export const FormInformation = ({ setVisible }: Props) => {
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [address, setAddress] = useState('');
    const [observation, setObservation] = useState('');

    const sendBatSignal = () => {
        console.log({
            name,
            description,
            address,
            observation
        });
    }
    return (
        <View style={styles.container}>
            <View style={styles.containerImage}>
                <Image style={styles.image} source={Logo} />
            </View>
            <InputText title="Nome" setValue={setName} value={name} />
            <InputText title="Descrição" setValue={setDescription} value={description} />
            <InputText title="Endereço" setValue={setAddress} value={address} textArea />
            <InputText title="descrição do meliante" setValue={setObservation} value={observation} textArea />
            <TouchableOpacity style={styles.button} onPress={() => {
                Alert.alert("Atenção", `
                    ${name} - ,
                    ${description} - ,
                    ${address} - ,
                    ${observation} `)
                sendBatSignal()
                setVisible()
            }}>
                <Text style={styles.buttonText}>Enviar</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingTop: 40,
        width: '100%',
        justifyContent: "center",
        alignItems: "center"
    },
    containerImage: {
        width: 70,
        height: 70,
        borderWidth: 2,
        borderColor: 'grey',
        borderRadius: 10,
        alignSelf: "flex-start",
        marginStart: '10%',
        marginBottom: 20
    },
    containerForm: {
        width: '100%',
        height: '100%'
    },
    image: {
        width: '100%',
        height: '100%',
    },
    button: {
        backgroundColor: '#000',
        color: '#fff',
        width: '80%',
        height: 50,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 30
    },
    buttonText: {
        color: '#fff',
    }
})