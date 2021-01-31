import React from "react";
import { View, Text, StyleSheet, StatusBar } from "react-native";
import propTypes from "prop-types";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';

const weatherOptions = {
    Thunderstorm:{
        iconName:"weather-lightning-rainy",
        gradient:["#003973","#E5E5BE"],
        title:"Thunderstorm",
        subtitle:"Stay home"
    },
    Drizzle:{
        iconName:"weather-rainy",
        gradient:["#E55D87","#5FC3E4"],
        title:"Drizzle",
        subtitle:"Bring an unbrella!"
    },
    Rain:{
        iconName:"weather-rainy",
        gradient:["#292E49","#536976"],
        title:"Rain",
        subtitle:"Bring an unbrella!"
    },
    Snow:{
        iconName:"weather-snowy",
        gradient:["#403B4A","#E7E9BB"],
        title:"Snow",
        subtitle:"Watch your steps!"
    },
    Clear:{
        iconName:"weather-sunny",
        gradient:["#1A2980","#26D0CE"],
        title:"Sunny",
        subtitle:"Let's go out and play!"
    },
    Clouds:{
        iconName:"weather-cloudy",
        gradient:["#FF8008","#FFC837"],
        title:"Clouds",
        subtitle:"Cloudy cloudy cloudy"
    },
    
    Haze:{
        iconName:"weather-hazy",
        gradient:["#334d50","#cbcaa5"],
        title:"Haze",
        subtitle:"Hazy hazy hazy"
    },
    Fog:{
        iconName:"weather-fog",
        gradient:["#757F9A","#D7DDE8"],
        title:"Fog",
        subtitle:"Foggy foggy foggy"
    },
    Squall:{
        iconName:"weather-pouring",
        gradient:["#00416A","#799F0C","#FFE000"],
        title:"Squall",
        subtitle:"Stay home"
    },
    Tornado:{
        iconName:"weather-tornado",
        gradient:["#2c3e50","#bdc3c7"],
        title:"Tornado",
        subtitle:"Don't go outside"
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
            <View style={styles.textContent}>
                <Text style={styles.title}>{weatherOptions[condition].title}</Text>
                <Text style={styles.subtitle}>{weatherOptions[condition].subtitle}</Text>
            </View>
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
        flex:1
    },
    temp:{
        fontSize:30,
        color:"white"
    },
    halfContainer:{
        flex:1,
        alignItems:"center",
        justifyContent:"center"
    },
    title:{
        color:"white",
        fontWeight:"300",
        fontSize:44,
        marginBottom:10,
        textAlign:"left"
    },
    subtitle:{
        color:"white",
        fontWeight:"600",
        fontSize:24,
        textAlign:"left"
    },
    textContent:{
        alignItems:"flex-start",
        paddingHorizontal:40,
        justifyContent:"center",
        flex:1

    }
})