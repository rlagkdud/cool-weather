import React from "react";
import {StyleSheet, View, Text} from "react-native";

export default function Loading(){
    return(
        <View style={styles.container}>
            <Text style={styles.text}>Getting the fucking weather</Text>
        </View>
    )
}
    

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent:"flex-end",
        paddingHorizontal:30,
        paddingVertical:100,
        backgroundColor: "#f1e189"
    },
    text:{
        color:"#2c2c2c",
        fontSize:30
    }
})