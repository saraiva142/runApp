import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';

export default function TrainingScreen() {
  const [name, setName] = useState('');
  const [day, setDay] = useState('');
  const [km, setKm] = useState('');
  const [pace, setPace] = useState('');

  const handleSave = () => {
    console.log('Treino salvo:', { name, day, km, pace });
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Nome do Atleta"
        value={name}
        onChangeText={setName}
      />
      <TextInput
        style={styles.input}
        placeholder="Dia de Treino"
        value={day}
        onChangeText={setDay}
      />
      <TextInput
        style={styles.input}
        placeholder="Quilometros"
        value={km}
        onChangeText={setKm}
      />
      <TextInput
        style={styles.input}
        placeholder="Pace do Treino"
        value={pace}
        onChangeText={setPace}
      />
      <Button title="Salvar" onPress={handleSave} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginVertical: 10,
    borderRadius: 5,
  },
});
