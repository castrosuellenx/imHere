import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  FlatList,
  Alert,
} from 'react-native';
import {StatusBar} from 'expo-status-bar';

import {styles} from './styles';
import {Participant} from '../../components/Participant';

export default function Home() {
  const participants = [
    'Suellen',
    'Rodrigo',
    'Diego',
    'Jake',
    'Ana',
    'Isa',
    'Mayk',
    'Jonathan',
    'Maria',
    'Joana',
  ];

  function handleParticipantAdd() {
    if (participants.includes('Rodrigo')) {
      return Alert.alert(
        'Participant already exists',
        'There is already one participant with this name on the list.'
      );
    }

    console.log('You clicked on the button');
  }

  function handleParticipantRemove(name: string) {
    Alert.alert('Remove', `Do you want to remove the participant ${name}?`, [
      {
        text: 'Yes',
        onPress: () => console.log(`You removed the participant ${name}`),
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
          style={styles.input}
          placeholder="Participant name"
          placeholderTextColor="#6B6B6B"
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
        keyExtractor={(item, index) => `${index}-${item}`}
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
      />
    </View>
  );
}
