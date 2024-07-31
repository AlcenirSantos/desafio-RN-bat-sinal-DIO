import { StatusBar } from 'expo-status-bar';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { Home } from './src/components/home';
import { useState } from 'react';
import { FormInformation } from './src/components/formInformation';

export default function App() {
  const [visible, setVisible] = useState(false);
  const alterValueVisible = () => {
    setVisible(!visible)
  }
  return (
    <ScrollView style={styles.container}>
      <StatusBar style="auto" />
      {!visible ? <Home setVisible={alterValueVisible} /> : <FormInformation setVisible={alterValueVisible} />}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
