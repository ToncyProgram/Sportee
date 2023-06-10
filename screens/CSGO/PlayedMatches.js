import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, TouchableOpacity, Image, StyleSheet } from 'react-native';
import axios from 'axios';


const CounterStrike = () => {
  const [matches, setMatches] = useState([]);

  useEffect(() => {
    fetchMatches();
  }, []);

  const fetchMatches = async () => {
    try {
      const response = await axios.get('https://csgo-matches-and-tournaments.p.rapidapi.com/matches', {
        headers: {
          'X-RapidAPI-Key': 'c521c65fb4msh466513ef3ffc3b2p1bb15ajsn577620e5ea7f',
        },
        params: {
          page: '1',
          limit: '2'
        }
      });
      const data = response.data.data;
      setMatches(data);
    } catch (error) {
      console.error(error);
    }
  };

  const renderMatch = ({ item }) => (
    <TouchableOpacity onPress={() => showMatchDetails(item)}>
      <View style={styles.matchContainer}>
        <Image source={item.team_won.image_url ? { uri: item.team_won.image_url } : require('../../assets/images/unkown.png')} style={{ width: 50, height: 50 }} />
        <Text style={styles.teamText}>{item.team_won.title}</Text>
        <Text style={styles.scoreText}>{item.score_won}</Text>
        <Text style={styles.vsText}>vs.</Text>
        <Text style={styles.scoreText}>{item.score_lose}</Text>
        <Text style={styles.teamText}>{item.team_lose.title}</Text>
        <Image source={item.team_lose.image_url ? { uri: item.team_lose.image_url } : require('../../assets/images/unkown.png')} style={{ width: 50, height: 50 }} />
      </View>
      <Text style={styles.matchDetails}>Played at: {item.played_at}</Text>
      <Text style={styles.matchDetails}>Location: {item.location}</Text>
    </TouchableOpacity>
  );

  const showMatchDetails = (match) => {
    console.log(match);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>CS:GO Matches</Text>
      <FlatList
        data={matches}
        renderItem={renderMatch}
        keyExtractor={(item) => item.id.toString()}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
    padding: 10,
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  matchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderRadius: 8,
    padding: 10,
  },
  teamLogo: {
    width: 50,
    height: 50,
    resizeMode: 'contain',
    marginRight: 10,
  },
  teamText: {
    fontSize: 16,
    marginRight: 10,
  },
  scoreText: {
    fontSize: 16,
    fontWeight: 'bold',
    marginHorizontal: 5,
  },
  vsText: {
    fontSize: 16,
    marginHorizontal: 10,
  },
  matchDetails: {
    fontSize: 14,
    marginLeft: 60,
    marginBottom: 5,
    color: '#888888',
  },
  separator: {
    height: 1,
    backgroundColor: '#DDDDDD',
    marginVertical: 10,
  },
});

export default CounterStrike;