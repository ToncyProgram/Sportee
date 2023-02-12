import { StyleSheet, View, Text, ScrollView, Image, TextInput, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/core'
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import React, { useEffect, useState } from 'react';


const SignUp = () => {

    const navigation = useNavigation();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const auth = getAuth();

    const handleSignUp = () => {
        createUserWithEmailAndPassword(auth, email, password)
            .then(userCredentials => {
                const user = userCredentials.user;
                console.log('Registered with:', user.email);
            })
            .catch(error => alert(error.message))
    }

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(user => {
            if (user) {
                navigation.replace("Home")
            }
        })

        return unsubscribe;
    }, [])
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
                        onPress={handleSignUp}
                    >
                        <Image
                                style={styles.image}
                                source={require("../assets/images/register.png")}
                            />
                    </TouchableOpacity>
                    <View style={styles.row}>
                        <Text style={styles.text}>You have an account? - </Text>

                        <TouchableOpacity onPress={() => navigation.navigate("LoginScreen")}>

                            <Text style={styles.text2}>Log In</Text>

                        </TouchableOpacity>
                    </View>

                    {/* <Image
                                style={styles.image}
                                source={require("../assets/images/register.png")}
                            />*/}

                </View>


            </View>
        </ScrollView>
    )
}


export default SignUp;

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