import { View, Text, TextInput, StyleSheet } from "react-native"

interface Props {
    title?: string;
    value?: string;
    setValue?: Function;
    textArea?: boolean;
}

export const InputText = ({ setValue = () => { }, textArea = false, title, value, }: Props) => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>{title}</Text>
            <TextInput
                style={styles.input}
                value={value}
                onChange={(e) => setValue(e.nativeEvent.text)}
                multiline={textArea}
                numberOfLines={textArea ? 4 : 1} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 18
    },
    input: {
        borderWidth: 2,
        borderColor: '#000',
        width: '80%',
        borderRadius: 10,
        paddingStart: 16,
        paddingBottom: 8,
        paddingTop: 8,
        paddingEnd: 16
    },
    title: {
        width: '80%',
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: "left"
    }
})