import { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Modal, Image, Alert} from 'react-native';

function GoalInput(props) {
  const [enteredGoalText, setEnteredGoalText] = useState('');
  const drugiAlert = () => {
    Alert.alert(
      'Are you sure you want to cancel?',
      "Everything you wrote will be deleted!", 
      [
        {
          text: 'Yes',
          onPress: (props.onCancel)
        },
        {
          text: 'No',
          onPress: () => console.log('No Pressed'), style: 'cancel'
        },
      ],
      {cancelable: false},
    );
  };
  const treciAlert = () => {
    Alert.alert(
      'Are you sure you wrote everything?',
      "This button saves note!", 
      [
        {
          text: 'Yes',
          onPress: (addGoalHandler)
        },
        {
          text: 'No',
          onPress: () => console.log('No Pressed'), style: 'cancel'
        },
      ],
      {cancelable: false},
    );
  };
  function goalInputHandler(enteredText) {
    setEnteredGoalText(enteredText);
  };

  function addGoalHandler() {
    props.onAddGoal(enteredGoalText);
    setEnteredGoalText('');
  }
  return (
    <Modal visible={props.visible} animationType="slide">
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          placeholder='Upišite svoju bilješku!!'
          onChangeText={goalInputHandler}
          value={enteredGoalText}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button title="Cancel" onPress={drugiAlert} color="#060b30" />
          </View>
          <View style={styles.button}>
            <Button title="Add" onPress={treciAlert} color="#060b30"/>
          </View>
        </View>
      </View>
    </Modal>
  );
}
export default GoalInput;

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor:'#aabcd8',
  },
  image:{
    width:100,
    height:100,
    margin:20,
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#d3d3d3',
    backgroundColor: '#060b30',
    color: '#d3d3d3',
    borderRadius: 12,
    width: '100%',
    marginRight: 8,
    padding: 8,

  },
  buttonContainer: {
    marginTop: 16,
    flexDirection: 'row'

  },
  button: {
    width: 100,
    marginHorizontal: 15
  }
});


