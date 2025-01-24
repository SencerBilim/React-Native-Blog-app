import { StyleSheet } from 'react-native';
import IndexScreen from './src/screens/IndexScreens';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { BlogProvider } from './src/context/BlogContext';




const Stack = createStackNavigator();

export default function App() {
  return (
    <BlogProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Blog">
          <Stack.Screen name="Blog" component={IndexScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </BlogProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
