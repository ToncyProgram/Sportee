import React from 'react';
import { StyleSheet, View, Text, ScrollView } from 'react-native';

const Bracket = ({ route }) => {
  const tournamentData = route.params?.tournamentData || {};
  const participants = tournamentData.participants || [];
  const bracket = generateBracket(participants);

  return (
    <ScrollView style={styles.container}>
      <View style={styles.contentContainer}>
        <Text style={styles.title}>{tournamentData.tournamentName}</Text>
        <Text style={styles.subtitle}>Popis sudionika:</Text>
        {participants.map((participant, index) => (
          <Text key={index} style={styles.participant}>
            {participant}
          </Text>
        ))}
        <Text style={styles.subtitle}>Ime igre:</Text>
        <Text style={styles.gameName}>{tournamentData.gameName}</Text>
        <Text style={styles.subtitle}>Datum i vrijeme:</Text>
        <Text style={styles.datetime}>{tournamentData.datetime}</Text>
        <View style={styles.bracket}>
          {bracket.map((round, index) => (
            <View key={index} style={styles.round}>
              <Text style={styles.roundLabel}>Krug {index + 1}</Text>
              {round.map((match, matchIndex) => (
                <View key={matchIndex} style={styles.match}>
                  <Text style={styles.matchText}>{match[0]}</Text>
                  <Text style={styles.vsText}>vs</Text>
                  <Text style={styles.matchText}>{match[1]}</Text>
                </View>
              ))}
            </View>
          ))}
        </View>
      </View>
      <View style={{padding: 20}}/>
    </ScrollView>
  );
};

const generateBracket = participants => {
  const bracket = [];

  if (participants.length % 2 !== 0) {
    participants.push('Bye');
  }

  const numRounds = participants.length - 1;
  const halfSize = participants.length / 2;

  for (let round = 0; round < numRounds; round++) {
    const roundMatches = [];

    for (let i = 0; i < halfSize; i++) {
      const match = [participants[i], participants[participants.length - 1 - i]];
      roundMatches.push(match);
    }

    bracket.push(roundMatches);

    participants.splice(1, 0, participants.pop());
  }

  return bracket;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  contentContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  subtitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 16,
  },
  participant: {
    fontSize: 14,
    marginBottom: 8,
  },
  gameName: {
    fontSize: 16,
    marginBottom: 8,
  },
  datetime: {
    fontSize: 16,
    marginBottom: 16,
  },
  bracket: {
    alignSelf: 'stretch',
    borderWidth: 1,
    borderColor: 'gray',
    padding: 8,
    borderRadius: 8,
  },
  round: {
    marginBottom: 16,
  },
  roundLabel: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  match: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
    padding: 4,
    backgroundColor: '#f2f2f2',
    borderRadius: 4,
  },
  matchText: {
    flex: 1,
    textAlign: 'center',
  },
  vsText: {
    marginHorizontal: 8,
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default Bracket;
