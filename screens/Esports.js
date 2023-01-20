import { View, ScrollView, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/core';


export default function Esports() {
    const navigation = useNavigation();

    return (
        <ScrollView>
            <View style={styles.container}>
                <View style={styles.picStyle}>
                    <TouchableOpacity
                        onPress={() => navigation.navigate("Lol")}
                    >
                        <Image
                            style={styles.image}
                            source={require("../assets/images/Games/lol.jpg")}
                        />
                    </TouchableOpacity>
                    <View style={styles.spaceBetween} />
                    <Image
                        style={styles.image}
                        source={require("../assets/images/Games/csgo.jpg")}
                    />
                </View>
                <View style={styles.picStyle}>
                    <Image
                        style={styles.image}
                        source={require("../assets/images/Games/PUBG.jpg")}
                    />
                    <View style={styles.spaceBetween} />
                    <Image
                        style={styles.image}
                        source={require("../assets/images/Games/RSS.jpg")}
                    />
                </View>
                <View style={styles.picStyle}>
                    <Image
                        style={styles.image}
                        source={require("../assets/images/Games/Apex.jpg")}
                    />
                    <View style={styles.spaceBetween} />
                    <Image
                        style={styles.image}
                        source={require("../assets/images/Games/Dota2.jpg")}
                    />
                </View>
                <View style={styles.picStyle}>
                    <Image
                        style={styles.image}
                        source={require("../assets/images/Games/SSB.jpg")}
                    />
                    <View style={styles.spaceBetween} />
                    <Image
                        style={styles.image}
                        source={require("../assets/images/Games/COD.jpg")}
                    />
                </View>
                <View style={styles.bottomSpace} />
            </View>
        </ScrollView>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
backgroundColor: "#080f41"
    },
    picStyle: {
        paddingLeft: 25,
        paddingTop: 25,
        flexDirection: "row",
    },
    spaceBetween: {
        paddingRight: 20
    },
    image: {
        width: 170,
        height: 200,
        borderTopRightRadius: 25,
        borderBottomRightRadius: 25
    },
    bottomSpace: {
        marginBottom: 25
    },
});