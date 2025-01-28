import React, { useContext } from "react";
import { View, Text, StyleSheet, FlatList, Button } from "react-native";
import { Context } from "../context/BlogContext";
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';



const IndexScreen = () => {
    const { state, addBlogPost } = useContext(Context)

    return <View>
        <Button title="Add Post" onPress={addBlogPost}/>
        <FlatList 
        data={state}
        keyExtractor={(blogPosts) => blogPosts.title}
        renderItem={({item}) => {
            return <View style={styles.row}> 
                <Text style={styles.title}> {item.title}</Text>
                <MaterialCommunityIcons name="delete" style={styles.icon} />
            </View>
        }}
        />
    
    </View>
}

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