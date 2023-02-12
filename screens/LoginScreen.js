import { useNavigation } from '@react-navigation/core'
import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, ScrollView, Image } from 'react-native';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { app as firebase } from "../config/firebase";

const LoginScreen = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const auth = getAuth();

    const navigation = useNavigation();

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(user => {
            if (user) {
                navigation.replace("Home")
            }
        })

        return unsubscribe;
    }, [])


    const handleLogIn = () => {
        signInWithEmailAndPassword(auth, email, password)
            .then(userCredentials => {
                const user = userCredentials.user;
                console.log('Logged in with:', user.email);
            })
            .catch(error => alert(error.message))
    }

    return (
        <ScrollView
            style={styles.container}
        >
            <View
                style={styles.containerStyle}
            >
                <View>
                    <Image
                        source={require("../assets/images/profile_user.png")}
                    />
                </View>
                <View style={styles.inputContainer}>
                    <TextInput
                        placeholder="Email"
                        value={email}
                        onChangeText={text => setEmail(text)}
                        style={styles.input}
                    />

                    <TextInput
                        placeholder="Password"
                        value={password}
                        onChangeText={text => setPassword(text)}
                        style={styles.input}
                        secureTextEntry
                    />
                </View>
                <View style={styles.buttonContainer}>
                    <TouchableOpacity
                        onPress={handleLogIn}
                    >
                        <Image
                            style={styles.image}
                            source={require("../assets/images/login.png")}
                        />
                    </TouchableOpacity>
                    <View style={styles.row}>
                        <Text style={styles.text}>You don't have an account? - </Text>

                        <TouchableOpacity onPress={() => navigation.navigate("SignUp")}>

                            <Text style={styles.text2}>Sign Up</Text>

                        </TouchableOpacity>
                    </View>


                </View>


            </View>
        </ScrollView>
    )
}

export default LoginScreen;
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#060b30"
    },
    containerStyle: {
        paddingTop: "25%",
        alignItems: "center"
    },
    inputContainer: {
        width: '80%',
        paddingTop: 35
    },
    input: {
        backgroundColor: "#d4d4d4",
        paddingHorizontal: 15,
        paddingVertical: 10,
        borderRadius: 10,
        marginTop: 5
    },
    buttonContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 25
    },
    button: {
        backgroundColor: "#0782F9",
        width: "100%",
        padding: 15,
        borderRadius: 10,
        alignItems: "center",
    },
    image: {
        borderRadius: 15,
        width: 210,
        height: 60
    },
    text: {
        color: "white",
        paddingTop: 10
    },
    text2: {
        color: "white",
        paddingTop: 10,
        fontWeight: "bold"
    },
    row: {
        flexDirection: "row"
    }


})