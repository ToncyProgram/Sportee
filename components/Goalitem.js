import { StyleSheet, View, Text, Pressable } from "react-native";

function GoalItem(props) {

  return (

    <View style={styles.goalItem}>

      <Pressable
        android_ripple={{ color: '#dddddd' }}
        onPress={props.onDeleteItem.bind(this, props.id)}
        style = {({ pressed }) => pressed && styles.pressedItem}
        >
        <Text
          style={styles.goalText}>{props.text ? props.text : ""}
        </Text>
      </Pressable>

    </View>

  );
}

export default GoalItem;

const styles = StyleSheet.create({
  goalItem: {
    color: 'white',
    margin: 10,
    padding: 10,
    borderRadius: 20, 
    backgroundColor: '#060b30',
  },
  pressedItem: {
    opacity: 0.5,
  },
  goalText: {
    color: '#e1e0de',
  }
});