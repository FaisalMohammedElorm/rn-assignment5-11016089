import React, { useContext } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, FlatList } from 'react-native';
import colors from "../config/colors";
import { FontAwesome } from '@expo/vector-icons';
import { arrowData } from '../mock/arrowData';
import { transactionsData } from '../mock/transactionsData';
import { ThemeContext } from '../config/themeContext';

const WelcomeScreen = () => {
  const { themeStyles } = useContext(ThemeContext);

  return (
    <View style={[styles.wholeScreen, { backgroundColor: themeStyles.backgroundColor }]}>
      <View style={styles.headerContainer}>
        <View style={styles.imageAndText}>
          <Image source={require("../assets/profile.png")} style={styles.profilePic} />
          <View style={styles.bothTexts}>
            <Text style={{ color: themeStyles.color, fontSize: 25, fontWeight: "600" }}>Welcome Back,</Text>
            <View style={styles.textAndIcon}>
              <Text style={{ color: themeStyles.color, fontSize: 30, fontWeight: "700" }}>Eric Atsu</Text>
              <TouchableOpacity>
                <FontAwesome name="search" size={30} color={themeStyles.color} style={styles.searchIcon} />
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <View style={styles.cardContainer}>
          <Image source={require("../assets/Card.png")} />
        </View>
        <View>
          <FlatList
            data={arrowData}
            renderItem={({ item }) => (
              <View style={styles.bothImageAndTitleContainer}>
                <View>
                  <TouchableOpacity>
                    <View style={styles.imagesContainer}>
                      <Image source={item.image} style={styles.iconImage} />
                    </View>
                  </TouchableOpacity>
                  <View style={styles.titleTextContainer}>
                    <Text style={{ color: themeStyles.color }}>{item.title}</Text>
                  </View>
                </View>
              </View>
            )}
            keyExtractor={(item) => item.id.toString()}
            horizontal
            showsHorizontalScrollIndicator={false}
          />
        </View>
        <View style={{ flexDirection: "row", justifyContent: "space-between", margin: 5 }}>
          <Text style={{ color: themeStyles.color, fontSize: 25, fontWeight: "700" }}>Transaction</Text>
          <Text style={{ color: colors.blue, fontWeight: "600", fontSize: 15 }}>See All</Text>
        </View>
        <View>
          <FlatList
            data={transactionsData}
            renderItem={({ item }) => (
              <View style={styles.transactionContainer}>
                <View style={{ flexDirection: "row" }}>
                  <TouchableOpacity>
                    <View style={styles.transactionIconContainer}>
                      <Image source={item.icon} style={styles.transactionIcon} />
                    </View>
                  </TouchableOpacity>
                  <View>
                    <View style={{ marginTop: 10 }}>
                      <Text style={{ color: themeStyles.color, fontWeight: "800", fontSize: 20 }}>{item.title}</Text>
                    </View>
                    <View style={{ flexDirection: "row" }}>
                      <Text style={{ color: themeStyles.color, fontWeight: "400", fontSize: 15 }}>{item.subTitle}</Text>
                      <View>
                        <Text style={[item.style, { color: themeStyles.color === colors.white ? colors.white : colors.black },{ color: item.title === "Money Transfer" && colors.blue === colors.blue ? colors.blue : themeStyles.color }]}>{item.amount}</Text>
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
  );
};

const styles = StyleSheet.create({
  wholeScreen: {
    flex: 1,
  },
  headerContainer: {
    flex: 1,
    marginTop: 45,
    justifyContent: "flex-start",
    marginLeft: 15,
  },
  profilePic: {
    height: 70,
    width: 70,
  },
  imageAndText: {
    flexDirection: "row",
  },
  bothTexts: {
    marginLeft: 20,
    justifyContent: "center",
    flexDirection: "column",
  },
  textAndIcon: {
    justifyContent: "space-between",
    flexDirection: "row",
  },
  searchIcon: {
    marginLeft: 150,
  },
  cardContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 25,
  },
  bothImageAndTitleContainer: {
    justifyContent: "center",
    margin: 12,
  },
  imagesContainer: {
    alignSelf: "center",
    backgroundColor: colors.lightgrey,
    padding: 25,
    borderRadius: 50,
  },
  titleTextContainer: {
    alignItems: "center",
    justifyContent: "center",
    margin: 12,
  },
  transactionContainer: {
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: colors.lightgrey,
    width: "90%",
    alignSelf: "center",
  },
  transactionIconContainer: {
    backgroundColor: colors.lightgrey,
    
    padding:10,
    margin:5,
    borderRadius: 50,
  },
});

export default WelcomeScreen;
