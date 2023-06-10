import React, { useState } from 'react';
import { StyleSheet, View, TextInput, TouchableOpacity, Text } from 'react-native';
import { useNavigation } from '@react-navigation/core';

const Tournament = () => {
  const navigation = useNavigation();
  const [tournamentName, setTournamentName] = useState('');
  const [participants, setParticipants] = useState('');
  const [gameName, setGameName] = useState('');
  const [datetime, setDatetime] = useState('');

  const handleSubmit = () => {
    const participantList = participants.split(',').map(name => name.trim());
    const tournamentData = {
      tournamentName,
      participants: participantList,
      gameName,
      datetime,
    };
    navigation.navigate('Bracket', {
      tournamentData,
    });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Create New Tournament</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter Tournament Name"
        value={tournamentName}
        onChangeText={text => setTournamentName(text)}
      />
      <TextInput
        style={[styles.input, styles.participantsInput]}
        placeholder="Enter Participants List (comma-separated)"
        value={participants}
        onChangeText={text => setParticipants(text)}
        multiline={true}
        numberOfLines={4}
      />
      <TextInput
        style={styles.input}
        placeholder="Enter Game Name"
        value={gameName}
        onChangeText={text => setGameName(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Enter Date and Time"
        value={datetime}
        onChangeText={text => setDatetime(text)}
      />
      <TouchableOpacity style={styles.button} onPress={handleSubmit}>
        <Text style={styles.buttonText}>Generate Bracket</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#F5F5F5',
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  input: {
    height: 40,
    width: '100%',
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 12,
    paddingHorizontal: 8,
    backgroundColor: 'white',
  },
  participantsInput: {
    height: 80,
    textAlignVertical: 'top',
  },
  button: {
    backgroundColor: '#4287f5',
    borderRadius: 4,
    paddingVertical: 12,
    paddingHorizontal: 24,
    marginTop: 24,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default Tournament;
