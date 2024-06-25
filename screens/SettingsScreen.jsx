import React, { useContext } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, Switch } from 'react-native';
import { Entypo } from '@expo/vector-icons';
import { setData } from '../mock/setData';
import { ThemeContext } from '../config/themeContext';

const SettingsScreen = () => {
  const { theme, toggleTheme, themeStyles } = useContext(ThemeContext);

  return (
    <View style={[styles.container, { backgroundColor: themeStyles.backgroundColor }]}>
      <View style={styles.headerContainer}>
        <Text style={[styles.headerText, { color: themeStyles.color }]}>Settings</Text>
      </View>
      <View style={{ marginTop: 50 }}>
        <FlatList
          data={setData}
          renderItem={({ item }) => (
            <View style={styles.listContainer}>
              <View style={styles.titleAndIcon}>
                <Text style={[styles.titleText, { color: themeStyles.color }]}>{item.title}</Text>
                <TouchableOpacity>
                  <Text>{item.icon}</Text>
                </TouchableOpacity>
              </View>
            </View>
          )}
        />
      </View>
      <View style={styles.themeTextContainer}>
        <Text style={[styles.themeText, { color: themeStyles.color }]}>Theme</Text>
        <Switch value={theme === 'dark'} onValueChange={toggleTheme} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerContainer: {
    marginTop: 70,
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerText: {
    fontSize: 40,
    fontWeight: '700',
  },
  listContainer: {
    padding: 20,
    borderBottomWidth: 1,
    width: '90%',
    alignSelf: 'center',
  },
  titleText: {
    fontSize: 25,
    fontWeight: '600',
  },
  titleAndIcon: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 10,
  },
  themeTextContainer: {
    padding: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  themeText: {
    fontSize: 30,
    fontWeight: '600',
  },
});

export default SettingsScreen;
