import { Lora_700Bold } from '@expo-google-fonts/lora';
import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Button } from 'react-native';
import {
  Modal,
  FlatList,
  Platform,
  ScrollView,
} from 'react-native';

export default function TrainingScreen() {
  const [selectedAthlete, setSelectedAthlete] = useState<string>('Atleta');
  const [isAthleteModalVisible, setAthleteModalVisible] = useState<boolean>(false);
  /*const [name, setName] = useState('');*/
  const [day, setDay] = useState('');
  const [km, setKm] = useState('');
  const [pace, setPace] = useState('');

  const athleteOptions: string[] = [
    'João Victor - 007',
    'Maria Souza - 012',
    'Arthur Mendes - 021',
    'Izadora Souza - 121',
    'Lucas Junior - 045',
    'Leticia Mendes - 621',
    'Eduarda Martins - 331',
  ];

  const handleSave = () => {
    console.log('Treino salvo:', { name, day, km, pace });
  };

  const renderModal = (
      options: string[],
      onSelect: (value: string) => void,
      setVisible: (value: boolean) => void
    ) => (
      <Modal
        visible={true}
        transparent={true}
        animationType="slide"
        onRequestClose={() => setVisible(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <FlatList
              data={options}
              keyExtractor={(item, index) => index.toString()}
              renderItem={({ item }) => (
                <TouchableOpacity
                  style={styles.modalOption}
                  onPress={() => {
                    onSelect(item);
                    setVisible(false);
                  }}
                >
                  <Text style={styles.modalOptionText}>{item}</Text>
                </TouchableOpacity>
              )}
              style={styles.modalList}
              contentContainerStyle={{ paddingBottom: 10 }}
            />
            <TouchableOpacity
              style={styles.modalClose}
              onPress={() => setVisible(false)}
            >
              <Text style={styles.modalCloseText}>Fechar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    );

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
                    <TouchableOpacity
                      style={styles.dropdown}
                      onPress={() => setAthleteModalVisible(true)}
                    >
                      <Text style={styles.dropdownText}>{selectedAthlete}</Text>
                    </TouchableOpacity>
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
          <Text style={styles.footerEdit}>Editar Treino</Text>
          <Text style={styles.footerEdit}>Excluir Treino</Text>
          <Text style={styles.footerText}>RunApp</Text>
        </View>

        {/* Modals */}
      {isAthleteModalVisible &&
        renderModal(athleteOptions, setSelectedAthlete, setAthleteModalVisible)}
      
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
      fontSize: 20,
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
      fontSize: 18,
      fontWeight: 500,
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
    dropdown: {
      backgroundColor: '#F5F5F5',
      borderWidth: 0,
      borderColor: '#ccc',
      borderRadius: 15,
      height: 50,
      justifyContent: 'center',
      paddingHorizontal: 0,
    },
    dropdownText: {
      fontSize: 16,
      color: '#000',
    },
    modalOverlay: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'rgba(0,0,0,0.5)',
    },
    modalContent: {
      backgroundColor: '#fff',
      borderRadius: 20,
      padding: 20,
      width: '80%',
      maxHeight: '50%',
      alignItems: 'center',
    },
    modalList: {
      maxHeight: 120,
      width: '100%',
    },
    modalOption: {
      paddingVertical: 10,
      borderBottomWidth: 1,
      borderBottomColor: '#ccc',
    },
    modalOptionText: {
      fontSize: 16,
      color: '#000',
      textAlign: 'center',
    },
    modalClose: {
      marginTop: 20,
    },
    modalCloseText: {
      fontSize: 16,
      color: '#000',
      fontWeight: 'bold',
    },
  });
  