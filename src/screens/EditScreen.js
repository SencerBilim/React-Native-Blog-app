import { Context } from "../context/BlogContext";
import { StyleSheet } from "react-native";
import React, { useContext } from "react";
import BlogPostForm from "../components/BlogPostForm";

const EditScreen = ( { route }) => {

    const { state } = useContext(Context);

    const blogPost = state.find((blogPost) => blogPost.id === route.params?.id);
   




    return <BlogPostForm onSubmit={() => {
        
    }} />

}



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