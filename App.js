import React from 'react';
import { View, Button, Image, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import WelcomeScreen from './screens/WelcomeScreen';
import SettingsScreen from './screens/SettingsScreen';
import StatsScreen from './screens/StatsScreen';
import CardsScreen from './screens/CardsScreen';
import { ThemeProvider, ThemeContext } from './config/themeContext';

const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <ThemeProvider>
      <NavigationContainer>
        <Tab.Navigator screenOptions={{ headerShown: false }}>
          <Tab.Screen
            name="Welcome"
            component={WelcomeScreen}
            options={{
              tabBarIcon: () => <Image source={require("./assets/home.png")} style={styles.icon} />,
            }}
          />
          <Tab.Screen
            name="Cards"
            component={CardsScreen}
            options={{
              tabBarIcon: () => <Image source={require("./assets/myCards.png")} style={styles.icon} />,
            }}
          />
          <Tab.Screen
            name="Statistics"
            component={StatsScreen}
            options={{
              tabBarIcon: () => <Image source={require("./assets/statistics.png")} style={styles.icon} />,
            }}
          />
          <Tab.Screen
            name="Settings"
            component={SettingsScreen}
            options={{
              tabBarIcon: () => <Image source={require("./assets/settings.png")} style={styles.icon} />,
            }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </ThemeProvider>
  );
};

const styles = StyleSheet.create({
  
});

export default App;
