import { useState, useEffect } from "react";

import { View, StyleSheet, Text, ScrollView, ActivityIndicator, Image, TouchableOpacity, Dimensions, Modal } from 'react-native';
import axios from "axios";
export default function Lec() {

    const [result, setResult] = useState(null);
    const [loading, setLoading] = useState(false);

    const getLcsStandings = () => {

        setLoading(true);
        axios
            .get(
                'https://league-of-legends-esports.p.rapidapi.com/schedule',
                {
                    params: { leagueId: '98767991302996019' },
                    headers: {
                        'X-RapidAPI-Key': '31cc375bc5msh72e8bb0291f5f2cp15ddecjsne7d9fac2d123',
                        'X-RapidAPI-Host': 'league-of-legends-esports.p.rapidapi.com'
                    }
                }
            )
            .then((response) => {
                let data = response.data.schedule;
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
                <View>
                    {result.map((element, index) => (
                        <View>

                        </View>
                    ))}
                </View>
            )}
        </View>
    )

}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: "#060b30",
        alignItems: "center",
    },


});