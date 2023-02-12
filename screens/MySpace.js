import React, { useState } from "react"
import { useNavigation } from '@react-navigation/native';
import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity } from 'react-native';
export default function MySpace() {

    const navigation = useNavigation();
    return (
        <ScrollView>

            <View style={styles.container}>
                <TouchableOpacity
                    style={styles.picContainer}
                    onPress={() => navigation.navigate("Chat")}
                >
                    <Image
                        style={styles.image}
                        source={require("../assets/images/slika_friendlist_myspace.png")}
                    />
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => navigation.navigate("Note")}
                    style={styles.picContainer}
                >
                    <Image
                        style={styles.image}
                        source={require("../assets/images/slika_notes_myspace.png")}
                    />
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.picContainer}
                >
                    <Image
                        style={styles.image}
                        source={require("../assets/images/slika_games_myspace.png")}
                    />
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.picContainer}
                >
                    <Image
                        style={styles.image}
                        source={require("../assets/images/slika_timezones_myspace.png")}
                    />
                </TouchableOpacity>

            </View>
        </ScrollView>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "space-around",
        alignItems: "center",
        backgroundColor: "#46b0fb"

    },
    picContainer: {
        paddingTop: 10,
        paddingBottom: 20
    },
    image: {
        width: 350,
        height: 200,

    },
    center: {

    }
})