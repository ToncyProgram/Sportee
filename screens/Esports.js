import { View, ScrollView, Image, StyleSheet, TouchableOpacity, Text } from 'react-native';
import { useNavigation } from '@react-navigation/core';

export default function Esports() {
    const navigation = useNavigation();


    return (
        <ScrollView style={styles.container}>
            <View>

                    <TouchableOpacity onPress={() => navigation.navigate('Tournament')}>
                        <Text style={styles.authText}>Make your online tournament!</Text>
                    </TouchableOpacity>

                <View style={styles.picStyle}>
                    <TouchableOpacity onPress={() => navigation.navigate('Lol')}>
                        <Image
                            style={styles.image}
                            source={require('../assets/images/Games/lol.jpg')}
                        />
                    </TouchableOpacity>
                    <View style={styles.spaceBetween} />
                    <TouchableOpacity onPress={() => navigation.navigate('CounterStrike')}>
                        <Image
                            style={styles.image}
                            source={require('../assets/images/Games/csgo.jpg')}
                        />
                    </TouchableOpacity>
                </View>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#080f41',
    },
    picStyle: {
        paddingLeft: 25,
        paddingTop: 25,
        flexDirection: 'row',
    },
    spaceBetween: {
        paddingRight: 20,
    },
    image: {
        width: 170,
        height: 200,
        borderTopRightRadius: 25,
        borderBottomRightRadius: 25,
    },
    authText: {
        color: '#4d64ff',
        fontSize: 20,
        textAlign: 'center',
        paddingTop: 20,
    },
});
