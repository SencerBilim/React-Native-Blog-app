import React, { useContext, useLayoutEffect } from "react";
import { View, Text, StyleSheet, FlatList, Button, TouchableOpacity } from "react-native";
import { Context } from "../context/BlogContext";
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import ShowScreen from "./ShowScreen";
import AntDesign from '@expo/vector-icons/AntDesign';



const IndexScreen = ({navigation}) => {
    const { state,  deleteBlogPost } = useContext(Context)

    useLayoutEffect(() => {
        navigation.setOptions({
            headerRight: () => (
                <TouchableOpacity onPress={() => navigation.navigate("Create")}>
                    <AntDesign name="plus" size={24} color="black" style={{ marginRight: 15 }} />
                </TouchableOpacity>
            ),
        });
    }, [navigation]);

    return <View>
        
        <FlatList 
        data={state}
        keyExtractor={(blogPosts) => blogPosts.title}
        renderItem={({item}) => {
            return (
            <TouchableOpacity onPress={() => navigation.navigate("Show", { id: item.id })}>
                <View style={styles.row}> 
                    <Text style={styles.title}>
                        {item.title} - {item.id}
                    </Text>
                    <TouchableOpacity onPress={() => deleteBlogPost(item.id)}>
                        <MaterialCommunityIcons name="delete" style={styles.icon}/>
                    </TouchableOpacity>
                    
                </View>    
            </TouchableOpacity>
           
            );
        }}
        />
    </View>
    
};


IndexScreen.navigationOptions = () => {}




const styles = StyleSheet.create({
    row: {
        flexDirection: "row",
        justifyContent: "space-between",
        paddingVertical: 15,
        paddingHorizontal: 15,
        borderTopWidth: 1,
        borderColor: "gray",
        
    },
    title: {
        fontSize: 18
    },
    icon: {
        fontSize: 24,
        color: "grey"
    }
});

export default IndexScreen;