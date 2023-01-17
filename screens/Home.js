import { useNavigation } from '@react-navigation/core';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View, Image, StatusBar } from 'react-native';
import { getAuth } from "firebase/auth";

//"../config/firebase"

function Home() {
    const navigation = useNavigation();
    const auth = getAuth();
    const handleSignOut = () => {
        auth
            .signOut()
            .then(() => {
                navigation.replace("LoginScreen")
            })
            .catch(error => alert(error.message))
    }
    return (
        <View style={styles.container}>
            <View style={styles.signCointainer}>
                <Text>Email: {auth.currentUser?.email}</Text>
            </View>
            <TouchableOpacity
                onPress={handleSignOut}
                style={styles.button}
            >
                <Text style={styles.buttonText}>Sign out</Text>
            </TouchableOpacity>

            <View style={styles.row}>

                <TouchableOpacity
                    onPress={() => navigation.navigate("Esports")}>

                    <Image
                        style={styles.image}
                        source={require("../assets/images/esport.jpg")}
                    />
                </TouchableOpacity>

                <View style={styles.space}></View>

                <TouchableOpacity
                    onPress={() => navigation.navigate("Sports")}>

                    <Image
                        style={styles.image}
                        source={require("../assets/images/football.jpg")}
                    />
                </TouchableOpacity>
            </View>
            <View style={styles.row}>
                <TouchableOpacity
                    onPress={() => navigation.navigate("Games")}
                >
                    <Image
                        style={styles.image}
                        source={require("../assets/images/games.jpg")}
                    />
                </TouchableOpacity>
                <View style={styles.space}></View>
                <TouchableOpacity
                    onPress={() => navigation.navigate("Note")}>
                    <Image
                        style={styles.image}
                        source={require("../assets/images/note-taking.png")}
                    />
                </TouchableOpacity>
            </View>
            <StatusBar style="auto" />
        </View>
    )
}

export default Home;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
    },
    image: {
        width: 180,
        height: 150,
        borderRadius: 15,
    },
    space: {
        paddingHorizontal: 10
    },

    row: {
        flexDirection: "row",
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 50
    },
    notes: {
        alignItems: 'center',
    },
    button: {
        backgroundColor: '#0782F9',
        width: '35%',
        padding: 10,
        borderRadius: 15,
        alignItems: 'center',
        marginTop: 10,
    },
    buttonText: {
        color: 'white',
        fontWeight: '700',
        fontSize: 16,
    },
    signCointainer: {
        paddingTop: 25
    }
});
