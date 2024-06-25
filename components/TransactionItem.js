// file path: TransactionItem.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useTheme } from '../ThemeContext';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const getIconName = (title) => {
  switch (title) {
    case 'Money Transfer':
      return 'bank-transfer';
    case 'Grocery Shopping':
      return 'cart';
    case 'Apple Store':
      return 'apple';
    case 'Spotify Music':
      return 'music';
    default:
      return 'currency-usd';
  }
};

const TransactionItem = ({ title, amount, color }) => {
  const { theme } = useTheme();
  const iconName = getIconName(title);

  return (
    <View style={[styles.transaction, { borderBottomColor: theme.border }]}>
      <Icon name={iconName} size={30} color={theme.text} style={styles.icon} />
      <View style={styles.transactionDetails}>
        <Text style={{ color: theme.text }}>{title}</Text>
        <Text style={{ color: color || theme.text }}>{amount}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  transaction: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    borderBottomWidth: 1,
  },
  icon: {
    marginRight: 16,
  },
  transactionDetails: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

export default TransactionItem;
