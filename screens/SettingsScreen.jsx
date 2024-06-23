import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native'
import React from 'react'
import { Entypo } from '@expo/vector-icons';
import { setData } from '../mock/setData';
import colors from "../config/colors.jsx"
const SettingsScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.headerText}>Settings</Text>
      </View>
      {/** Settings  */}
      <View style={{marginTop:70}}>
          <FlatList
            data={setData}
            renderItem={({ item }) => (
              <View style={styles.listContainer}>
                <View style={styles.titleAndIcon}>
                  <Text style={styles.titleText}>{item.title}</Text>
                  <TouchableOpacity>
                    <Text>{item.icon}</Text>
                  </TouchableOpacity>
                </View>
              </View>

            )
            
            }
          />
      </View>
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    backgroundColor:colors.white,
    flex:1
  },
  headerContainer:{
    marginTop:70,
    justifyContent:"center",
    alignItems:"center",
  },
  headerText:{
    fontSize: 40,
    fontWeight:"700"
  },
  listContainer:{
    padding:20,
    borderBottomWidth:1,
   
  },
  titleText:{
    fontSize:25,
    fontWeight:"600",
  },
  titleAndIcon:{
    flexDirection:"row",
    justifyContent:"space-between"
  }
});
export default SettingsScreen
    