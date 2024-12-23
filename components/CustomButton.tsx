import React from 'react';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';

export default function CustomButton({ title, onPress }: { title: string, onPress: () => void }) {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#4CAF50',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    margin: 5,
  },
  text: {
    color: '#fff',
    fontWeight: 'bold',
  },
});
