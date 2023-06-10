import React from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/core';


export default function CounterStrike() {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.buttonContainer}>
        <TouchableOpacity 
        onPress={() => navigation.navigate("UpcomingMatches")}
        style={styles.button}>
          <Text style={{ color: "white", fontSize: 20, textAlign: "center" }}>See Upcoming Matches!</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button}
                onPress={() => navigation.navigate("PlayedMatches")}
        >
          <Text style={{ color: "white", fontSize: 20, textAlign: "center" }}>See Matches Mlayed!</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#080f41"
  },
  button: {
    marginLeft: 10,
    backgroundColor: '#4156e9',
    borderRadius: 5,
    paddingHorizontal: 15,
    paddingVertical: 10,
    width: "50%",
    borderRadius: 20
  },
  buttonContainer: {
    justifyContent: "center",
    alignItems: "center",
    padding: 25
  }
});
