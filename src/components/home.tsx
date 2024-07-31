import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native"
import Logo from '../../assets/batsinal.jpg'

interface Props {
    setVisible: Function;
}

export const Home = ({ setVisible }: Props) => {
    return (
        <View style={styles.container}>
            <View style={styles.containerImage}>
                <Image style={styles.image} source={Logo} />
            </View>
            <TouchableOpacity style={styles.button} onPress={() => setVisible()}>
                <Text style={styles.buttonText}>Batman Socorro</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%'
    },
    containerImage: {
        width: '80%',
        height: 200,
        borderWidth: 2,
        borderColor: 'grey',
        borderRadius: 10,
        marginTop: 120
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
        marginTop: 150
    },
    buttonText: {
        color: '#fff',

    }
})