// file path: HomeScreen.js
import React from 'react';
import { View, FlatList, StyleSheet, Text } from 'react-native';
import Header from '../components/Header';
import Card from '../components/Card';
import TransactionItem from '../components/TransactionItem';
import { useTheme } from '../ThemeContext';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const HomeScreen = () => {
  const { theme } = useTheme();

  const transactions = [
    { id: '1', title: 'Apple Store', amount: '-$5.99' },
    { id: '2', title: 'Spotify Music', amount: '-$12.99' },
    { id: '3', title: 'Money Transfer', amount: '$300' },
    { id: '4', title: 'Grocery Shopping', amount: '-$88' },
  ];

  return (
    <View style={[styles.container, { backgroundColor: theme.background }]}>
      <Header title="Welcome back, Eric Atsu" />
      <Card />
      <View style={styles.iconsContainer}>
        <View style={styles.iconWrapper}>
          <Icon name="send" size={30} color={theme.text} />
          <Text style={[styles.iconText, { color: theme.text }]}>Send</Text>
        </View>
        <View style={styles.iconWrapper}>
          <Icon name="download" size={30} color={theme.text} />
          <Text style={[styles.iconText, { color: theme.text }]}>Receive</Text>
        </View>
        <View style={styles.iconWrapper}>
          <Icon name="cash" size={30} color={theme.text} />
          <Text style={[styles.iconText, { color: theme.text }]}>Loan</Text>
        </View>
        <View style={styles.iconWrapper}>
          <Icon name="plus-circle" size={30} color={theme.text} />
          <Text style={[styles.iconText, { color: theme.text }]}>Topup</Text>
        </View>
      </View>
      <FlatList
        data={transactions}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TransactionItem 
            title={item.title} 
            amount={item.amount} 
            color={item.title === 'Money Transfer' ? 'blue' : undefined} 
          />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  iconsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 16,
  },
  iconWrapper: {
    alignItems: 'center',
  },
  iconText: {
    marginTop: 4,
    fontSize: 14,
  },
});

export default HomeScreen;
