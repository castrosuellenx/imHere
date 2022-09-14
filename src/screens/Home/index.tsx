import {View, Text, TextInput, TouchableOpacity} from 'react-native';
import {StatusBar} from 'expo-status-bar';

import {styles} from './styles';

export default function Home() {
  function handleParticipantAdd() {
    console.log('Voce clicou no botao');
  }

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />

      <Text style={styles.eventName}>Nome do evento</Text>
      <Text style={styles.eventDate}>Sexta, 4 de Novembro de 2022</Text>

      <TextInput
        style={styles.input}
        placeholder="Nome do participante"
        placeholderTextColor="#6B6B6B"
      />

      <TouchableOpacity onPress={handleParticipantAdd} style={styles.button}>
        <Text style={styles.buttonText}>+</Text>
      </TouchableOpacity>
    </View>
  );
}
