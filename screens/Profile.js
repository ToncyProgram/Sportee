import { useNavigation } from '@react-navigation/core';

import React from "react";
import { View, StyleSheet, Text, Image, TouchableOpacity } from 'react-native';
import { getAuth } from "firebase/auth";


export default function Profile() {
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
            <View style={styles.userContainer}>
                <Image
                    source={require("../assets/images/profile_user.png")}
                />
                <Text style={styles.userText}>Email: {auth.currentUser?.email}</Text>
                <TouchableOpacity
                    style={styles.logoutContainer}
                    onPress={handleSignOut}
                >
                    <Image
                        style={styles.imageLogout}
                        source={require("../assets/images/logout_profile.png")}
                    />
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#060b30"
    },
    userContainer: {
        justifyContent: "center",
        alignItems: "center",
        paddingTop: "30%"
    },
    userText: {
        color: "#c9c9cb",
        paddingTop: 4,
        fontSize: 25,
        fontWeight: "bold"
    },
    imageLogout: {
        width: 295,
        height: 85
    },
    logoutContainer: {
        paddingTop: 45,
    }
});
