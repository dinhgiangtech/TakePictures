import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import CameraView from '../Screens/CameraView'
import ImageView from '../Screens/ImageView'

const Stack=createStackNavigator();
export default function RootNavigation(){
    return(
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Camera">
            <Stack.Screen headerTitle={{headerShown:false}} name="Camera" component={CameraView}/>
            <Stack.Screen headerTitle={{headerShown:false}} name="Image" component={ImageView}/>
            </Stack.Navigator>
        </NavigationContainer>
    )

}