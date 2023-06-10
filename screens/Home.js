import { useNavigation } from '@react-navigation/core';

import React from 'react';
import { StyleSheet, TouchableOpacity, View, Image, StatusBar, Dimensions, ScrollView } from 'react-native';


function Home() {
    const navigation = useNavigation();

    return (
        <ScrollView style={styles.container}>
            <View style={styles.view}>
                {/*<View style={styles.signCointainer}>
                <Text>Email: {auth.currentUser?.email}</Text>
            </View>
            <TouchableOpacity
                onPress={handleSignOut}
                style={styles.button}
            >
                <Text style={styles.buttonText}>Sign out</Text>
            </TouchableOpacity>
    */}
                <View style={styles.row}>
                    <View style={styles.esportsContainer}>
                        <TouchableOpacity
                            onPress={() => navigation.navigate("Esports")}>
                            <Image
                                style={styles.image}
                                source={require("../assets/images/Esports_ikona.png")}
                            />
                        </TouchableOpacity>
                    </View>
                    <View style={styles.space}></View>

                </View>
                <View style={styles.row}>
                    <TouchableOpacity
                        onPress={() => navigation.navigate("Games")}
                    >
                        <Image
                            style={styles.image}
                            source={require("../assets/images/GameNews.png")}
                        />
                    </TouchableOpacity>
                    <View style={styles.space}></View>
                    <TouchableOpacity
                        onPress={() => navigation.navigate("MySpace")}>
                        <Image
                            style={styles.image}
                            source={require("../assets/images/mySpace.png")}
                        />
                    </TouchableOpacity>
                </View>
                <StatusBar style="auto" />
            </View>
        </ScrollView>
    )
}

export default Home;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#621b86',
    },
    view: {
        alignItems: 'center',
        paddingBottom: 15
    },
    esportsContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        paddingLeft: 17
    },
    image_esports: {
        width: 350,
        height: 340,
        borderRadius: 15,
    },
    image_Gamew_news: {
        width: 204,
        height: 264,
        borderRadius: 15,
    },
    image_notes: {
        width: 140,
        height: 250,
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
    },
});
