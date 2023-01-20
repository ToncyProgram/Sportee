import React from "react";
import { View, StyleSheet, Text, Image, TouchableOpacity } from 'react-native';

export default function Lol() {

    return (
        <View style={styles.container}>
            <View style={styles.leagueContainer}>
                <Image
                    source={require("../../assets/images/icons/lecIcon.png")}
                    style={styles.image}
                />
                <Text style={styles.leagueName}>LEC</Text>
                <TouchableOpacity 
                
                >
                    <Text style={styles.tableText}>Pogledajte tablicu!</Text>
                </TouchableOpacity>
            </View>

        </View>
    )
}
const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: "#060b30",
    },
    leagueName: {
        fontSize: 40,
        paddingLeft: 5,
        color: "#4156e9"
    },
    tableText:{
        fontWeight: "bold",
        color: "#4156e9",
        fontSize: 15,
        paddingLeft: "15%"
    },
    leagueContainer: {
        flexDirection: "row",
        alignItems: 'center',
        padding: 10,
        
    }
});