import React, { useState } from "react"
import { View, Text, StyleSheet, Image, FlatList, TouchableOpacity } from 'react-native';

import GoalItem from '../components/Goalitem';
import GoalInput from '../components/Goalinput';

export default function Note() {

    const [modalIsVisible, setModalIsVisible] = useState(false);
    const [Goals, setGoals] = useState([]);
    const prviAlert = () => {
        Alert.alert(
            'Želite li izraditi bilješku?',
            "",
            [
                {
                    text: 'Da',
                    onPress: (startAddGoalHandler)
                },
                {
                    text: 'Ne',
                    onPress: () => console.log('No Pressed'), style: 'cancel'
                },
            ],
            { cancelable: false },
        );
    };


    function startAddGoalHandler() {
        setModalIsVisible(true);
    }
    function endAddGoalHandler() {
        setModalIsVisible(false);
    }
    function addGoalHandler(enteredGoalText) {
        setGoals((currentCourseGoals) => [
            ...currentCourseGoals,
            { text: enteredGoalText, id: Math.random().toString() },
        ]);
        endAddGoalHandler();
    }
    function deleteGoalHandler(id) {
        setGoals((currentCourseGoals) => {
            return currentCourseGoals.filter((goal) => goal.id !== id);
        });
    }


    return (
        <View style={styles.appContainer}>
            <View style={styles.addNoteContainer}>
                <TouchableOpacity
                onPress={startAddGoalHandler}
                >
                    <Image
                        style={styles.image}
                        source={require("../assets/images/addNote.png")}
                    />
                </TouchableOpacity>
            </View>
            <GoalInput
                visible={modalIsVisible}
                onAddGoal={addGoalHandler}
                onCancel={endAddGoalHandler}
            />
            <View style={styles.goalsContainer}>
                <FlatList
                    data={Goals}
                    renderItem={(itemData) => {

                        return (
                            <GoalItem
                                text={itemData.item.text}
                                id={itemData.item.id}
                                onDeleteItem={deleteGoalHandler} />
                        );
                    }}
                    keyExtractor={(item, index) => {
                        return item.id;
                    }}
                    alwaysBounceVertical={false}
                />
                <View>

                </View>
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    appContainer: {
        flex: 1,
        backgroundColor: '#aabcd8',
        justifyContent: "center",
        alignItems: "center"
    },
    goalsContainer: {
        flex: 6,
    },
    addNoteContainer: {
        paddingTop: "5%"
    },
    image: {
        borderRadius: 10
    }
});