import { useState, useEffect } from "react";
import { useNavigation } from '@react-navigation/core';

import { View, StyleSheet, Text, ScrollView, ActivityIndicator, Image, TouchableOpacity, Dimensions, Modal } from 'react-native';
import axios from "axios";
export default function Lec() {



    const currentWidth = Dimensions.get("screen").width;
    const navigation = useNavigation();

    const [result, setResult] = useState(null);
    const [loading, setLoading] = useState(false);

    const getLcsStandings = () => {

        setLoading(true);
        axios
            .get(
                'https://league-of-legends-esports.p.rapidapi.com/teams',
                {
                    headers: {
                        'X-RapidAPI-Key': '1c78a37e73mshf7922a8ef7a52ffp114848jsna13a4da90e9a',
                        'X-RapidAPI-Host': 'league-of-legends-esports.p.rapidapi.com'
                    }
                }
            )
            .then((response) => {
                let data = response.data.data.teams;
                let lecTeams = data.filter(element =>
                    element?.slug === "team-vitality"
                    || element?.slug === "mad-lions"
                    || element?.slug === "sk-gaming"
                    || element?.slug === "g2-esports"
                    || element?.slug === "team-bds"
                    || element?.slug === "rogue"
                    || element?.slug === "astralis"
                    || element?.slug === "fnatic"
                    || element?.slug === "excel"
                    || element?.slug === "team-heretics-lec"
                );
                setResult(lecTeams);
            })
            .catch((error) => {
                console.log(error);
            })
            .finally(() => {
                setLoading(false);
            });
    };

    useEffect(() => {
        getLcsStandings();
    }, []);

    return (
        <View style={styles.container}>
            {loading && <ActivityIndicator size={"large"} />}
            {result && result.length > 0 && (
                <View>

                    <ScrollView>
                        <View style={{ width: currentWidth, height: 2, backgroundColor: "#4156e9", marginTop: 20 }} />
                        {result.map((element, index) =>
                        (

                            <View key={index}>
                                <View >
                                    <View
                                        style={styles.row}>
                                        <Text style={styles.title}>{element.name}</Text>
                                        <View style={{ marginHorizontal: 10 }} />
                                        <Image
                                            source={{ uri: element.image }}
                                            style={styles.image}
                                        />
                                    </View>
                                    {element.players &&
                                        element.players.length > 0 &&
                                        element.players.map((element2, index2) => (
                                            <View
                                                style={styles.row2}
                                                key={index2}>
                                                <Image
                                                    source={{ uri: element2.image }}
                                                    style={styles.image2}
                                                />
                                                <View style={{ paddingRight: 12 }} />
                                                <Text style={styles.title}>
                                                    {element2.summonerName}
                                                </Text>
                                                <Text style={{ color: "white", fontSize: 15, paddingLeft: 15 }}>
                                                    role: {element2.role}
                                                </Text>

                                            </View>
                                        ))}
                                </View>
                                <View style={{ width: currentWidth, height: 2, backgroundColor: "#4156e9", marginTop: 20 }} />
                            </View>
                        ))}

                    </ScrollView>
                </View>
            )}
        </View>
    )
}
const currentWidth = Dimensions.get("screen").width;
const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: "#060b30",
        alignItems: "center",
    },
    title: {
        color: "white",
        fontSize: 20
    },
    image: {
        width: 75,
        height: 75
    },
    row: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        padding: 10,
        marginTop: 10
    },
    modal: {
        flex: 1,
        backgroundColor: "black"
    },
    image2: {
        width: 50,
        height: 50
    },
    row2: {
        flexDirection: "row",
        alignItems: "center",
        padding: 10
    },
    center: {
        justifyContent: "center",
        alignItems: "center",
    },
    section: {
        backgroundColor: "#dcb6f2",

    },
    background: {
        backgroundColor: "#4156e9",
        height: 500,
        width: currentWidth - 50,
        borderRadius: 20,
        alignItems: "center",
        alignSelf: "center",
        marginTop: 150
    },
    imageExit: {
        width: 50,
        height: 50,
    }
});