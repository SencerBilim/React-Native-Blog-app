import React, { useContext, useLayoutEffect } from "react";
import { View, Text, StyleSheet, TouchableOpacity} from "react-native";
import { Context } from "../context/BlogContext";
import AntDesign from '@expo/vector-icons/AntDesign';

const ShowScreen = ({ route, navigation }) => {
    const { state } = useContext(Context);

    const blogPost = state.find((blogPost) => blogPost.id === route.params?.id);

    useLayoutEffect(() => {
        navigation.setOptions({
            headerRight: () => (
                <TouchableOpacity onPress={() => navigation.navigate("Edit", { id: route.params?.id})}>
                    <AntDesign name="edit" size={24} color="black" style={{ marginRight: 15 }} />
                </TouchableOpacity>
            ),
        });
    }, [navigation]);


    return <View>
        <Text> {blogPost.title} </Text>
        <Text> {blogPost.content} </Text>
    </View>
}



const styles = StyleSheet.create({

});

export default ShowScreen;