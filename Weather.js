import React from "react";
import { View, Text, StyleSheet, StatusBar } from "react-native";
import propTypes from "prop-types";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';

const weatherOptions = {
    Thunderstorm:{
        iconName:"weather-lightning-rainy",
        gradient:["#003973","#E5E5BE"]
    },
    Drizzle:{
        iconName:"weather-rainy",
        gradient:["#E55D87","#5FC3E4"]
    },
    Rain:{
        iconName:"weather-rainy",
        gradient:["#292E49","#536976"]
    },
    Snow:{
        iconName:"weather-snowy",
        gradient:["#403B4A","#E7E9BB"]
    },
    Clear:{
        iconName:"weather-sunny",
        gradient:["#1A2980","#26D0CE"]
    },
    Clouds:{
        iconName:"weather-cloudy",
        gradient:["#FF8008","#FFC837"]
    },
    
    Haze:{
        iconName:"weather-hazy",
        gadient:["#334d50","#cbcaa5"]
    },
    Fog:{
        iconName:"weather-fog",
        gadient:["#757F9A","#D7DDE8"]
    },
    Squall:{
        iconName:"weather-pouring",
        gadient:["#00416A","#799F0C","#FFE000"]
    },
    Tornado:{
        iconName:"weather-tordano",
        gadient:["#2c3e50","#bdc3c7"]
    },
}
export default function Weather({ temp,condition }) {
    return(
        <LinearGradient
        colors={weatherOptions[condition].gradient} 
        style={styles.container}>
            <StatusBar barStyle="light-content" />
            <View style={styles.halfContainer}>
                <MaterialCommunityIcons name={weatherOptions[condition].iconName } size={96} color="white" />
                <Text style={styles.temp}>{temp}°</Text>
            </View>
            <View style={styles.halfContainer}/>
        </LinearGradient>
    )
};

Weather.propTypes = {
    temp: propTypes.number.isRequired,
    condition: propTypes.oneOf([
        "Thunderstorm",
        "Drizzle",
        "Rain",
        "Snow",
        "Clear",
        "Clouds",
        "Haze",
        "Fog",
        "Squall",
        "Tornado"
    ]).isRequired
};

const styles = StyleSheet.create({
    container: {
        flex:1,
        justifyContent:"center",
        alignItems:"center"
    },
    temp:{
        fontSize:30,
        color:"white"
    },
    halfContainer:{
        flex:1,
        alignItems:"center",
        justifyContent:"center"
    }
})