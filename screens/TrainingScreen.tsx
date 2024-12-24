import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Button } from 'react-native';

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
        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.headerText}>Treino</Text>
        </View>
  
        {/* Formulário */}
        <View style={styles.form}>
          <View style={styles.inputContainer}>
            <Text style={styles.inputLabel}>NOME - ATLETA</Text>
            <TextInput
                    style={styles.input}
                    value={name}
                    onChangeText={setName}
                  />
          </View>
          <View style={styles.inputContainer}>
            <Text style={styles.inputLabel}>DIA - TREINO</Text>
            <TextInput
                    style={styles.input}
                    value={day}
                    onChangeText={setDay}
                  />
          </View>
          <View style={styles.inputContainer}>
            <Text style={styles.inputLabel}>QUILOMETRAGEM - TREINO</Text>
            <TextInput
                    style={styles.input}
                    value={km}
                    onChangeText={setKm}
                  />
          </View>
          <View style={styles.inputContainer}>
            <Text style={styles.inputLabel}>PACE - TREINO</Text>
            <TextInput
                    style={styles.input}
                    value={pace}
                    onChangeText={setPace}
                  />
          </View>
        </View>
  
        {/* Botão de salvar */}
        <TouchableOpacity style={styles.saveButton} onPress={handleSave}>
              <Text style={styles.saveButtonText}>Salvar</Text>
      </TouchableOpacity>
  
  
        {/* Footer */}
        <View style={styles.footer}>
          <Text style={styles.footerEdit}>Editar Atleta</Text>
          <Text style={styles.footerText}>RunApp</Text>
        </View>
      </View>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#F5F5F5',
      paddingHorizontal: 20,
      paddingTop: 50,
    },
    header: {
      marginBottom: 20,
    },
    headerText: {
      fontSize: 18,
      fontWeight: 'bold',
      textAlign: 'right',
      color: '#000',
    },
    form: {
      marginBottom: 20,
    },
    inputContainer: {
      marginBottom: 10,
      borderBottomWidth: 1,
      borderBottomColor: '#000',
    },
    inputLabel: {
      fontSize: 16,
      fontWeight: 'bold',
      color: '#000',
    },
    input: {
      height: 40,
      fontSize: 16,
      color: '#000',
    },
    saveButton: {
      alignSelf: 'flex-start',
      backgroundColor: '#000',
      paddingHorizontal: 20,
      paddingVertical: 10,
      borderRadius: 5,
    },
    saveButtonText: {
      color: '#FFF',
      fontSize: 16,
      fontWeight: 'bold',
    },
    footer: {
      flex: 1,
      justifyContent: 'flex-end',
      alignItems: 'center',
      marginBottom: 10,
    },
    footerEdit: {
      fontSize: 12,
      color: '#000',
      textAlign: 'right',
      alignSelf: 'flex-end',
      marginRight: 20,
    },
    footerText: {
      fontSize: 100,
      fontWeight: 'bold',
      fontFamily: 'Lora_400Regular',
      color: '#000',
      textAlign: 'center',
    },
  });
  