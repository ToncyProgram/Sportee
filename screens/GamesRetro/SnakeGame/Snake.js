import React, { Component } from "react";
import { AppRegistry, StyleSheet, StatusBar, SafeAreaView, View, Alert, Button, TouchableOpacity, Text } from "react-native";
import { GameEngine, dispatch } from "react-native-game-engine";
import { Head } from "./Head";
import { Food } from "./Food";
import { Tail } from "./Tail";
import { GameLoop } from "./GameLoop";
import Constants from './Constants';

export default class Snake extends Component {
  constructor(props) {
    super(props);
    this.boardSize = Constants.GRID_SIZE * Constants.CELL_SIZE;
    this.engine = null;
    this.state = {
      running: true
    }
  }

  randomBetween = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  onEvent = (e) => {
    if (e.type === "game-over"){
      this.setState({
        running: false
      });
      Alert.alert("Game Over");
    }
  }

  reset = () => {
    this.engine.swap({
      head: { position: [0,  0], xspeed: 1, yspeed: 0, nextMove: 10, updateFrequency: 10, size: 20, renderer: <Head />},
      food: { position: [this.randomBetween(0, Constants.GRID_SIZE - 1), this.randomBetween(0, Constants.GRID_SIZE - 1)], size: 20, renderer: <Food />},
      tail: { size: 20, elements: [], renderer: <Tail /> }
    });
    this.setState({
      running: true
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <GameEngine
          ref={(ref) => { this.engine = ref; }}
          style={[{ width: this.boardSize, height: this.boardSize, backgroundColor: '#ffffff', flex: null }]}
          systems={[ GameLoop ]}
          entities={{
            head: { position: [0,  0], xspeed: 1, yspeed: 0, nextMove: 10, updateFrequency: 10, size: 20, renderer: <Head />},
            food: { position: [this.randomBetween(0, Constants.GRID_SIZE - 1), this.randomBetween(0, Constants.GRID_SIZE - 1)], size: 20, renderer: <Food />},
            tail: { size: 20, elements: [], renderer: <Tail /> }
          }}
          running={this.state.running}
          onEvent={this.onEvent}>

          <StatusBar hidden={true} />

        </GameEngine>
<View style={{padding: 10}}/>
        <TouchableOpacity style={styles.button} onPress={this.reset}>
          <Text style={styles.buttonText}>New Game</Text>
        </TouchableOpacity>

        <View style={styles.controls}>
          <View style={styles.controlRow}>
            <TouchableOpacity onPress={() => { this.engine.dispatch({ type: "move-up" })} }>
              <View style={styles.control} />
            </TouchableOpacity>
          </View>
          <View style={styles.controlRow}>
            <TouchableOpacity onPress={() => { this.engine.dispatch({ type: "move-left" })} }>
              <View style={styles.control} />
            </TouchableOpacity>
            <View style={[styles.control, { backgroundColor: null}]} />
            <TouchableOpacity onPress={() => { this.engine.dispatch({ type: "move-right" })}}>
              <View style={styles.control} />
            </TouchableOpacity>
          </View>
          <View style={styles.controlRow}>
            <TouchableOpacity onPress={() => { this.engine.dispatch({ type: "move-down" })} }>
              <View style={styles.control} />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
    alignItems: 'center',
    justifyContent: 'center'
  },
  controls: {
    width: 300,
    height: 300,
    flexDirection: 'column',

  },
  controlRow: {
    height: 100,
    width: 300,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',

  },
  control: {
    width: 100,
    height: 100,
    backgroundColor: "#46b0fb"
  },
  button: {
    backgroundColor: '#46b0fb',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5,
    marginBottom: 20
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center'
  }
});
