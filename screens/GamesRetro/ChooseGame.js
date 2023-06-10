import React from 'react';
import { StyleSheet, View, TouchableOpacity, Image, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function ChooseGame() {

    const navigation = useNavigation();
    return (
        <ScrollView>

            <View style={styles.container}>
                <TouchableOpacity
                    style={styles.picContainer}
                    onPress={() => navigation.navigate("Snake")}
                >
                    <Image
                        style={styles.image}
                        source={require("../../assets/images/snake.png")}
                    />
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => navigation.navigate("FlappyBirdGame")}
                    style={styles.picContainer}
                >
                    <Image
                        style={styles.imageBall}
                        source={require("../../assets/images/game_icon1.png")}
                    />
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.picContainer}
                    onPress={() => navigation.navigate("ChooseGame")}
                >
                    <Image
                        style={styles.image}
                        
                    />
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.picContainer}
                    onPress={() => navigation.navigate("TimeZones")}
                >
                    <Image
                        style={styles.image}

                        
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
    imageBall: {
        width: 180,
        height: 180,

    },
    image: {
        width: 180 ,
        height: 180,

    }
})