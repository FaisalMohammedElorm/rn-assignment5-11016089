import { View, Text, StyleSheet, Image, TouchableOpacity , FlatList} from 'react-native'
import React, { useContext } from 'react'
import colors from "../config/colors";
import { FontAwesome } from '@expo/vector-icons';
import { arrowData } from '../mock/arrowData';
import { transactionsData } from '../mock/transactionsData';

const WelcomeScreen = () => {
  
  return (
    <View style={styles.wholeScreen}>
      <View style={styles.headerContainer}>
        <View style={styles.imageAndText}>
          <Image source={require("../assets/profile.png")} style={styles.profilePic}/>
            <View style={styles.bothTexts}>
            {/** Welcome Text */}
                <Text style={{color:colors.lightgrey, fontSize:25, fontWeight:"600", color: colors.lightgrey }}>Welcome Back,</Text>
                <View style={styles.textAndIcon}>
                    <Text style={{fontSize:30, fontWeight:"700"}}>Eric Atsu</Text>
                    {/** Search Icon */}
                    <TouchableOpacity>
                      <FontAwesome name="search" size={30} color="black" style={styles.searchIcon}/>
                    </TouchableOpacity>
                </View>
                
            </View>
         
        </View>
        <View style={styles.cardContainer}>
          <Image source={require("../assets/Card.png")} />
        </View>
        {/** Money Transfer Options */}
        <View>
            <FlatList
              data={arrowData}
              renderItem={({item}) => (
                <View style={styles.bothImageAndTitleContainer}>


                  <View>
                  <TouchableOpacity>
                        <View style={styles.imagesContainer}>
                            <Image source={item.image} style={styles.iconImage}/>
                        </View>
                      </TouchableOpacity>
                      <View style={styles.titleTextContainer}>
                        <Text style={styles.titleText}>{item.title}</Text>
                      </View>
                  </View> 
                          
                            
                
                       
                
              
              
                </View>
              )}
              keyExtractor={(item) => item.id.toString()}
              horizontal
              showsHorizontalScrollIndicator = {false}
            />
        </View>
        <View style={{flexDirection:"row", justifyContent:"space-between", margin:5}}>
          <Text style={{fontSize:28, fontWeight:"700"}}>Transaction</Text>
          <Text style={{color:colors.blue, fontWeight:"600", fontSize:20}}>See All</Text>
      </View>
      {/** Transaction Options */}
      <View>
        <FlatList
          data={transactionsData}
          renderItem={({item}) => (
            <View style={styles.transactionContainer}>
                <View style={{flexDirection:"row"}}>
                      <TouchableOpacity>
                          <View style={styles.transactionIconContainer}>
                            <Image source={item.icon} style={styles.transactionIcon}/>
                          </View>
                      </TouchableOpacity>
                    <View>
                        <View style={{marginTop:10}}>
                          <Text style={{fontWeight:"800", fontSize:20}}>{item.title}</Text>
                        </View>
                      <View style={{flexDirection:"row"}}>
                        <Text style={{fontWeight:"400", fontSize:15, color:colors.lightgrey}}>{item.subTitle}</Text>
                          <View>
                            <Text style={item.style}>{item.amount}</Text>
                          </View>
                      </View>
                      </View>
                  </View>
                </View>
          )}
        />
      </View>
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
      marginTop:45,
      justifyContent:"flex-start",
      marginLeft:15
    },
    profilePic:{
      height:70,
      width:70,
    },
    imageAndText:{
      flexDirection:"row",
    },
    bothTexts:{
      marginLeft:20,
      justifyContent:"center",
      flexDirection:"column"
    },
    textAndIcon:{
      justifyContent:"space-between",
      flexDirection:"row",
    },
    searchIcon:{
      marginLeft:150
    },
    cardContainer:{
      justifyContent:"center",
      alignItems:"center",
      marginTop:25
    },
   bothImageAndTitleContainer:{
    justifyContent:"center",
    margin:12,
    }, 
    imagesContainer:{
    alignSelf:"center",
    backgroundColor: colors.lightgrey,
    padding:25, 
    borderRadius:50
    },
    titleTextContainer:{
    alignItems:"center",
    justifyContent:"center",
    margin:12
    },
    titleText:{
      fontSize:20,
      fontWeight:"600"
     },
     transactionIconContainer:{
      backgroundColor: colors.lightgrey,
      padding:20,
      margin:10,
      borderRadius:50
    }
  });
  export default WelcomeScreen
      
      
                
                      
                      
                    





            

         
          
    
         
          
          
          
    
    
    
    
    

    
      
      
          
    
    
  
      
