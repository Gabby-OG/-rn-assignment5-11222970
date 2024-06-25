// file path: SettingsScreens.js
import React from 'react';
import { View, Text, Switch, StyleSheet } from 'react-native';
import { useTheme } from '../ThemeContext';

const SettingsScreen = () => {
  const { toggleTheme, theme, isDarkTheme } = useTheme();

  return (
    <View style={[styles.container, { backgroundColor: theme.background }]}>
      <Text style={[styles.heading, { color: theme.text }]}>Settings</Text>
      <View style={styles.textContainer}>
        <Text style={[styles.text, { color: theme.text }]}>Change Password</Text>
        <Text style={[styles.greaterThan, { color: theme.text }]}>{'>'}</Text>
      </View>
      <View style={styles.textContainer}>
        <Text style={[styles.text, { color: theme.text }]}>Privacy Policy</Text>
        <Text style={[styles.greaterThan, { color: theme.text }]}>{'>'}</Text>
      </View>
      <View style={styles.textContainer}>
        <Text style={[styles.text, { color: theme.text }]}>Language</Text>
        <Text style={[styles.greaterThan, { color: theme.text }]}>{'>'}</Text>
      </View>
      <View style={styles.textContainer}>
        <Text style={[styles.text, { color: theme.text }]}>Contact Us</Text>
        <Text style={[styles.greaterThan, { color: theme.text }]}>{'>'}</Text>
      </View>
      <View style={styles.textContainer}>
        <Text style={[styles.text, { color: theme.text }]}>My Profile</Text>
        <Text style={[styles.greaterThan, { color: theme.text }]}>{'>'}</Text>
      </View>
      <View style={styles.switchContainer}>
        <Text style={[styles.switchLabel, { color: theme.text }]}>Theme</Text>
        <Switch
          value={isDarkTheme}
          onValueChange={toggleTheme}
          thumbColor={isDarkTheme ? "#f5dd4b" : "#f4f3f4"}
          trackColor={{ false: "#767577", true: "#81b0ff" }}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  heading: {
    fontSize: 24,
    marginBottom: 16,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  textContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#d3d3d3',
    paddingVertical: 15, // Increased padding
    marginVertical: 10, // Increased margin
  },
  text: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  greaterThan: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  switchContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 30, // Increased margin-top
  },
  switchLabel: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default SettingsScreen;
