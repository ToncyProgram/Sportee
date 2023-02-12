import { useNavigation } from '@react-navigation/core';
import { View, StyleSheet, Text, Image, TouchableOpacity } from 'react-native';
export default function Lol() {
    const navigation = useNavigation();
    return (
        <View style={styles.container}>
            <View style={styles.spacing}>
                <View style={styles.row}>
                    <TouchableOpacity
                        onPress={() => navigation.navigate("LEC")}
                    >
                        <Image
                            style={styles.image}
                            source={require("../../assets/images/LEC.png")}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => navigation.navigate("LCS")}
                    >
                        <Image
                            style={styles.image}
                            source={require("../../assets/images/LCS.png")}
                        />
                    </TouchableOpacity>
                </View>
            </View>

            <View style={{ flexDirection: "row", justifyContent: "space-between", paddingHorizontal: 55 }}>
                <Text style={styles.title}>LEC</Text>
                <Text style={styles.title}>LCS</Text>

            </View>
        </View>
    )
}
const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: "#060b30",
    },
    title: {
        color: "white",
        fontSize: 30,
        fontWeight: "bold"
    },
    image: {
        width: 150,
        height: 150,
        borderRadius: 35
    },
    spacing: {
        paddingTop: 25,
        paddingHorizontal: 10

    },
    row: {
        flexDirection: "row",
        justifyContent: "space-between",
    },

});