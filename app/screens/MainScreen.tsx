import React from 'react';
import {
    Text,
    View,
    Button
} from 'react-native';
import * as SecureStore from 'expo-secure-store';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import * as Permissions from 'expo-permissions';

import LoginScreen from './LoginScreen';
import HomeScreen from './HomeScreen';

const Stack = createStackNavigator();

const TOKEN_NAME = 'token';

export default class MainScreen extends React.Component {
    componentDidMount() {
        this.getLocationPermissionAsync()
    }

    getLocationPermissionAsync = async () => {
        // permissions returns only for location permissions on iOS and under certain conditions, see Permissions.LOCATION
        const { status, permissions } = await Permissions.askAsync(Permissions.LOCATION);
        if (status != 'granted')
            alert('Location permission not granted');
    }

    render() {
        let isLogedIn = false;

        SecureStore.getItemAsync(TOKEN_NAME)
            .then(response => {
                if(response == null)
                    isLogedIn = false
                else
                    isLogedIn = true     
            })

        return (
            <NavigationContainer>
                <Stack.Navigator>
                { isLogedIn == false ? ( 
                    <>
                    <Stack.Screen name="LoginScreen" component={HomeScreen} />
                    </>  
                ) : (
                    <>
                    <Stack.Screen name="Home" component={HomeScreen} />
                    </>
                )}
                </Stack.Navigator>
            </NavigationContainer>
        )
    }
}