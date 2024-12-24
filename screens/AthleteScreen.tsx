import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Button } from 'react-native';

export default function AthleteScreen() {
    const [name, setName] = useState('');
    const [cpf, setCpf] = useState('');
    const [contato, setContato] = useState('');

    const handleSave = () => {
        console.log('Atleta salvo:', { name, cpf, contato });
    };
  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerText}>Atleta</Text>
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
          <Text style={styles.inputLabel}>CPF - ATLETA</Text>
          <TextInput
                  style={styles.input}
                  value={cpf}
                  onChangeText={setCpf}
                />
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.inputLabel}>CONTATO - ATLETA</Text>
          <TextInput
                  style={styles.input}
                  value={contato}
                  onChangeText={setContato}
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
