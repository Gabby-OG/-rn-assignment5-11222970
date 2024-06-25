import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useTheme } from '../ThemeContext';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const Card = () => {
  const { theme } = useTheme();

  return (
    <View style={[styles.card, { backgroundColor: theme.card }]}>
      <View style={styles.cardHeader}>
        <Text style={[styles.cardType, { color: theme.text }]}>Debit</Text>
        <Icon name="credit-card" size={30} color={theme.text} />
      </View>
      <Text style={[styles.cardNumber, { color: theme.text }]}>4562 1122 4595 7852</Text>
      <Text style={[styles.cardHolder, { color: theme.text }]}>AR Jonson</Text>
      <View style={styles.cardDetails}>
        <View style={styles.cardDetailItem}>
          <Text style={[styles.cardLabel, { color: theme.text }]}>Expiry Date</Text>
          <Text style={[styles.cardValue, { color: theme.text }]}>24/2000</Text>
        </View>
        <View style={styles.cardDetailItem}>
          <Text style={[styles.cardLabel, { color: theme.text }]}>CVV</Text>
          <Text style={[styles.cardValue, { color: theme.text }]}>6986</Text>
        </View>
      </View>
      <View style={styles.masterCardLogo}>
        <Icon name="credit-card" size={30} color={theme.text} />
        <Text style={[styles.masterCardText, { color: theme.text }]}>MasterCard</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    padding: 16,
    borderRadius: 8,
    marginTop: 16,
    borderWidth: 1,
    borderColor: '#ccc',
  },
  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  cardType: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  cardNumber: {
    fontSize: 20,
    marginVertical: 16,
    letterSpacing: 2,
    textAlign: 'center',
  },
  cardHolder: {
    fontSize: 18,
    textAlign: 'center',
    marginBottom: 16,
  },
  cardDetails: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  cardDetailItem: {
    flex: 1,
    alignItems: 'center',
  },
  cardLabel: {
    fontSize: 16,
  },
  cardValue: {
    fontSize: 16,
    marginTop: 4,
  },
  masterCardLogo: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 16,
  },
  masterCardText: {
    fontSize: 18,
    marginLeft: 8,
  },
});

export default Card;
