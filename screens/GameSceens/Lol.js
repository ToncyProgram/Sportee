import { useState, useEffect } from "react";

import { View, StyleSheet, Text, ActivityIndicator } from 'react-native';
import axios from "axios";
export default function Lol() {

    const [result, setResult] = useState(null);
    const [loading, setLoading] = useState(false);

    const getLcsStandings = () => {

        setLoading(true);
        axios
            .get(
                'https://league-of-legends-esports.p.rapidapi.com/teams',
                {
                    params: { name: 'G2' },
                    headers: {
                        'X-RapidAPI-Key': '5125c5e510msh318246a45a78db3p14aa09jsn1c9681e4b154',
                        'X-RapidAPI-Host': 'league-of-legends-esports.p.rapidapi.com'
                    }
                }
            )
            .then((response) => {
                let data = response.data;
                setResult(data);
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
                <ScrollView>
                    {result.map((element, index) => (
                        <View
                            key={index}>
                            {
                                <View>
                                    <Text>{element.firsName}</Text>
                                </View>

                            }
                        </View>

                    ))}
                </ScrollView>
            )
            }
        </View>
    )
}
const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: "#060b30",
    },

});