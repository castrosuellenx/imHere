import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  FlatList,
  Alert,
} from 'react-native';

import {styles} from './styles';
import {Participant} from '../../components/Participant';

export default function Home() {
  const [participants, setParticipants] = useState<string[]>([]);
  const [participantName, setParticipantName] = useState('');

  function handleParticipantAdd() {
    if (participants.includes(participantName)) {
      return Alert.alert(
        'Participant already exists',
        'There is already one participant with this name on the list.'
      );
    }

    if (!participantName.replace(/\s/g, '')) {
      return Alert.alert('Invalid name', 'Participant name cannot be empty.');
    }

    setParticipants((prevState) => [...prevState, participantName]);
    setParticipantName('');
  }

  function handleParticipantRemove(name: string) {
    Alert.alert('Remove', `Do you want to remove the participant ${name}?`, [
      {
        text: 'Yes',
        onPress: () =>
          setParticipants((prevState) =>
            prevState.filter((participant) => participant !== name)
          ),
      },
      {text: 'no', style: 'cancel'},
    ]);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.eventName}>Event name</Text>
      <Text style={styles.eventDate}>Thursday, September 15, 2022</Text>

      <View style={styles.form}>
        <TextInput
          placeholder="Participant name"
          placeholderTextColor="#6B6B6B"
          value={participantName}
          onChangeText={setParticipantName}
          style={styles.input}
        />

        <TouchableOpacity
          activeOpacity={0.7}
          onPress={handleParticipantAdd}
          style={styles.button}
        >
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={participants}
        keyExtractor={(item) => `${item}`}
        renderItem={({item}) => (
          <Participant
            name={item}
            onRemove={() => handleParticipantRemove(item)}
          />
        )}
        ListEmptyComponent={() => (
          <Text style={styles.listEmptyText}>
            No one has arrived the event yet? Add participants to your list
          </Text>
        )}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}
