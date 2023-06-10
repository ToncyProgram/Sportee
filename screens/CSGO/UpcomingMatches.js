import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, TouchableOpacity, Image, StyleSheet } from 'react-native';
import axios from 'axios';

export default function UpcomingMatches() {
  const [matches, setMatches] = useState([]);

  useEffect(() => {
    fetchMatches();
  }, []);

  const fetchMatches = async () => {
    try {
      const response = await axios.get('https://csgo-matches-and-tournaments.p.rapidapi.com/upcoming_matches', {
        headers: {
          'X-RapidAPI-Key': 'c521c65fb4msh466513ef3ffc3b2p1bb15ajsn577620e5ea7f',
        },
        params: {
          page: '1',
          limit: '2',
        },
      });
      const data = response.data.data.map(item => {
        return {
          id: item.id,
          played_at: item.play_at,
          location: item.location,
          team_won: {
            title: item.team1.title,
            image_url: item.team1.image_url
          },
          score_won: '', 
          score_lose: '', 
          team_lose: {
            title: item.team2.title,
            image_url: item.team2.image_url
          }
        };
      });
      setMatches(data);
    } catch (error) {
      console.error(error);
    }
  };

  const renderMatch = ({ item }) => (
    <TouchableOpacity onPress={() => showMatchDetails(item)}>
      <View style={styles.matchContainer}>
        <View style={styles.teamContainer}>
          <Image
            source={item.team_won.image_url ? { uri: item.team_won.image_url } : require('../../assets/images/unkown.png')}
            style={styles.teamImage}
          />
          <Text style={styles.teamText}>{item.team_won.title}</Text>
        </View>
        <Text style={styles.scoreText}>{item.score_won}</Text>
        <Text style={styles.vsText}>vs.</Text>
        <Text style={styles.scoreText}>{item.score_lose}</Text>
        <View style={styles.teamContainer}>
          <Text style={styles.teamText}>{item.team_lose.title}</Text>
          <View style={{paddingLeft: 10}}/>
          <Image
            source={item.team_lose.image_url ? { uri: item.team_lose.image_url } : require('../../assets/images/unkown.png')}
            style={styles.teamImage}
          />
        </View>
      </View>
      <Text style={styles.matchDetails}>Playing at: {item.played_at}</Text>
      <Text style={styles.matchDetails}>Location: {item.location}</Text>
    </TouchableOpacity>
  );

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
}

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
  },
  teamContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  teamImage: {
    width: 50,
    height: 50,
    marginRight: 10,
  },
  teamText: {
    fontWeight: 'bold',
  },
  scoreText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  vsText: {
    fontSize: 16,
    marginHorizontal: 10,
  },
  matchDetails: {
    fontSize: 12,
    fontStyle: 'italic',
    marginTop: 5,
  },
  separator: {
    height: 1,
    backgroundColor: '#DDDDDD',
    marginVertical: 10,
  },
});