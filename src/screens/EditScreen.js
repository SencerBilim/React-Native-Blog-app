import React from "react";
import { View, Text, StyleSheet} from "react-native";


const EditScreen = () => {
   
    return (
    <View>
        <Text style={styles.label}> Selam </Text>
        
    </View>
)}



const styles = StyleSheet.create({
    input: {
        fontSize: 18,
        borderWidth:1,
        borderColor: "black",
        marginBottom: 15,
        padding: 5,
        margin: 5
        
    },
    label: {
        fontSize: 20,
        marginBottom: 5,
        marginLeft: 5
        
    }
});

export default EditScreen;