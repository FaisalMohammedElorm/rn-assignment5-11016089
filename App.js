import { View, Text, StyleSheet, Image } from 'react-native';
import React, { useState, useContext } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import WelcomeScreen from './screens/WelcomeScreen';
import SettingsScreen from './screens/SettingsScreen';
import { Feather } from '@expo/vector-icons';
import StatsScreen from './screens/StatsScreen';
import CardsScreen from './screens/CardsScreen';
import { AntDesign } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();



  






const App = () => {
  return (
        <NavigationContainer>
            <Tab.Navigator screenOptions={{ headerShown: false}}>
                <Tab.Screen name="Welcome" component={WelcomeScreen} 
                  options={{
                    tabBarIcon: () => <Image source={require("./assets/home.png")}/>

                }}/>
                <Tab.Screen name="Cards" component={CardsScreen}
                  options={{
                  tabBarIcon: () => <Image source={require("./assets/myCards.png")}/>
                  }}/>
                <Tab.Screen name="Statistics" component={StatsScreen} 
                  options={{
                  tabBarIcon: () => <Image source={require("./assets/statistics.png")}/>
                  }}/>
                
                <Tab.Screen name="Settings" component={SettingsScreen}
                options={{
                  tabBarIcon: () => <Image source={require("./assets/settings.png")}/>
                  }}/>
                </Tab.Navigator>
            </NavigationContainer>
                
                
    
    
  );
};


export default App;