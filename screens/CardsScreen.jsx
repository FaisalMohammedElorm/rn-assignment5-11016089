import { View, Text , StyleSheet} from 'react-native'
import React, { useContext } from 'react'
import colors from '../config/colors';

const CardsScreen = () => {
  
  return (
    <View style={styles.container}>
      <Text style={styles.titleText}>CardsScreen</Text>
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    flex:1,
    alignItems:"center",
    justifyContent:"center",
    backgroundColor:colors.white,

  },
  titleText:{
    fontSize:30,
    fontWeight:"600"
  }
});
export default CardsScreen