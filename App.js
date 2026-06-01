import React from 'react';
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Home from "./src/Pages/Home";


const Stack = createNativeStackNavigator ();

export default function app() {
  return( 
    <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen name='Home' component={Home} 
        options={{
            title: "Menu 🏞🏞🏠",
            headerStyle:{backgroundColor: 'rgb(43, 135, 255)'},
            headerTintColor:"#ffffffff"
        }} 
      />
    
      
      </Stack.Navigator>
    </NavigationContainer>

  );

}

