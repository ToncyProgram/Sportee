import React from 'react';
import { StyleSheet, View, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/core';

export default function AddContent() {
    
    const navigation = useNavigation();
    return (
        <View style={styles.container}>
            <TouchableOpacity
                style={styles.button}
                onPress={() => navigation.navigate("Esports")}
            >
                <Image
                style={styles.image}
                source={require("../assets/images/icons/add.png")}
                />
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#080f41"
    },
    image:{
        width: 50,
        height: 50,
        alignSelf: 'center',
        marginTop: 15
    }
});
