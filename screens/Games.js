import { View, Text, StyleSheet, Image } from 'react-native';

export default function Games() {
    return (
        <View style={styles.container}>
            <View style={styles.gamesContainer}>
                <View style={styles.spiderManContainer}>
                    <Image
                        style={styles.image}
                        source={require("../assets/images/Games/spiderMan.png")}
                    />
                    <View style={styles.cijeneContainer}>
                        <Text style={styles.textOpisa}>Not out yet</Text>
                        <Text style={styles.textOpisa}>Release date:</Text>
                        <Text style={styles.textOpisa}>Fall 2023</Text>
                    </View>
                </View>

                <View style={styles.space} />
                <View style={styles.spiderManContainer}>
                    <Image
                        style={styles.image}
                        source={require("../assets/images/Games/RDR.jpg")}
                    />
                    <View style={styles.cijeneContainer}>
                        <Text style={styles.textCijene}>59,99€</Text>
                        <Text style={styles.textPopusta}>19,79€.</Text>
                        <Text style={styles.textOpisa3}>Get it on steam!</Text>

                    </View>
                </View>
                <View style={styles.space} />
                <View style={styles.spiderManContainer}>
                    <Image
                        style={styles.image}
                        source={require("../assets/images/Games/GOW.png")}
                    />
                    <View style={styles.cijeneContainer}>
                        <Text style={styles.textOpisa4}>Game award for</Text>
                        <Text style={styles.textOpisa2}>best story of 2023</Text>
                        <Text style={styles.textPopusta}>80,00€</Text>
                    </View>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#430b63"
    },
    spiderManContainer: {
        flexDirection: "row",
    },
    textCijene: {
        color: "#9650e9",
        textDecorationLine: 'line-through',
        fontSize: 20,
        paddingLeft: 65
    },
    textPopusta: {
        color: "#9650e9",
        fontSize: 20,
        paddingLeft: 65
    },
    textOpisa: {
        color: "#9650e9",
        fontSize: 20,
        textAlign: "center",
        paddingLeft: 30
    },
    textOpisa2: {
        color: "#9650e9",
        fontSize: 20,
        paddingLeft: 10
    },
    textOpisa3: {
        color: "#9650e9",
        fontSize: 20,
        textAlign: "center",
        paddingLeft: 20
    },
    textOpisa4: {
        color: "#9650e9",
        fontSize: 20,
        textAlign: "center",
        paddingLeft: 8
    },
    cijeneContainer: {
        flexDirection: "column",
        justifyContent: "center"
    },
    gamesContainer: {
        paddingTop: "11%",
        paddingLeft: "5%",
    },
    space: {
        paddingTop: "5%"
    },
    image: {
        height: 200,
        width: 180,
        borderRadius: 10,
    },
});