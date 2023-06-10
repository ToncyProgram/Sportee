import React, { useState } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import axios from 'axios';

export default function TimeZones() {
    const [selectedLocation, setSelectedLocation] = useState(null);
    const [weatherData, setWeatherData] = useState(null);
    const [timezoneData, setTimezoneData] = useState(null);

    const handleMapPress = async (event) => {
        const { coordinate } = event.nativeEvent;
        setSelectedLocation(coordinate);

        try {
            const weatherApiKey = '2934d5ec0649dce085af1fc593ca6e50';
            const timezoneApiKey = 'SLIFNEWTDS2T';

            const weatherApiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${coordinate.latitude}&lon=${coordinate.longitude}&appid=${weatherApiKey}`;
            const timezoneApiUrl = `http://api.timezonedb.com/v2.1/get-time-zone?key=${timezoneApiKey}&format=json&by=position&lat=${coordinate.latitude}&lng=${coordinate.longitude}`;

            const [weatherResponse, timezoneResponse] = await Promise.all([
                axios.get(weatherApiUrl),
                axios.get(timezoneApiUrl)
            ]);

            const kelvinTemp = weatherResponse.data.main.temp;
            const celsiusTemp = kelvinTemp - 273.15;
            const roundedTemp = Math.round(celsiusTemp);

            setWeatherData({ ...weatherResponse.data, main: { ...weatherResponse.data.main, temp: roundedTemp } });
            setTimezoneData(timezoneResponse.data);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    const getTimeStringFromTimestamp = (timestamp) => {
        const date = new Date(timestamp * 1000);
        const hours = date.getHours();
        const minutes = `0${date.getMinutes()}`;
        return `${hours}:${minutes.substr(-2)}`;
    };

    return (
        <View style={styles.container}>
            <MapView
                style={styles.map}
                onPress={handleMapPress}
                initialRegion={{
                    latitude: 37.78825,
                    longitude: -122.4324,
                    latitudeDelta: 0.0922,
                    longitudeDelta: 0.0421,
                }}
            >
                {selectedLocation && (
                    <Marker coordinate={selectedLocation} />
                )}
            </MapView>

            {weatherData && timezoneData && (
                <View style={styles.weatherContainer}>
                    <Text style={styles.weatherText}>{weatherData.weather[0].description}</Text>
                    <Text style={styles.weatherText}>Temperature: {weatherData.main.temp}°C</Text>
                    <Text style={styles.weatherText}>Timezone: {timezoneData.zoneName}</Text>
                    <Text style={styles.weatherText}>Current Time: {getTimeStringFromTimestamp(timezoneData.timestamp)}</Text>
                </View>
            )}
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    map: {
        flex: 1,
    },
    weatherContainer: {
        position: 'absolute',
        bottom: 16,
        left: 16,
        right: 16,
        backgroundColor: 'rgba(255, 255, 255, 0.8)',
        padding: 16,
        borderRadius: 8,
    },
    weatherText: {
        fontSize: 16,
        marginBottom: 8,
    },
});