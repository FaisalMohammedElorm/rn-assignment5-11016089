import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'

const WelcomeScreen = () => {
  return (
    <View style={styles.wholeScreen}>
      <View style={styles.headerContainer}>
        <Image source={require("../assets/profile.png")}/>
        <Text>Welcome Back,</Text>
        <Text>Eric Atsu</Text>
      </View>
    </View>
  )
}
const styles = StyleSheet.create({
  wholeScreen:{
    flex:1,
    
    backgroundColor:"#fff"
  
  },
  headerContainer:{
    flex:1,
    marginTop:30,
    justifyContent:"flex-start",
    marginLeft:25
  }
});
export default WelcomeScreen
      
