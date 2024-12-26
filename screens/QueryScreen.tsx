import React, { useState } from 'react';
import { Lora_400Regular } from '@expo-google-fonts/lora';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Modal,
  FlatList,
  Platform,
  ScrollView,
} from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';

export default function QueryScreen() {
  const [selectedAthlete, setSelectedAthlete] = useState<string>('Atleta');
  const [selectedDate, setSelectedDate] = useState<string>('Data do Treino');
  const [isAthleteModalVisible, setAthleteModalVisible] = useState<boolean>(false);
  const [isDatePickerVisible, setDatePickerVisible] = useState<boolean>(false);
  const [date, setDate] = useState<Date>(new Date());

  const athleteOptions: string[] = [
    'João Victor - 007',
    'Maria Souza - 012',
    'Arthur Mendes - 021',
    'Izadora Souza - 121',
    'Lucas Junior - 045',
    'Leticia Mendes - 621',
    'Eduarda Martins - 331',
  ];

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

  // Função para lidar com a seleção de data
  const handleDateChange = (event: any, selectedDate?: Date) => {
    if (Platform.OS === 'android') {
      setDatePickerVisible(false);
    }
    if (selectedDate) {
      setDate(selectedDate);
      setSelectedDate(selectedDate.toLocaleDateString());
    }
  };

  return (
    
    <ScrollView contentContainerStyle={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerText}>Acompanhar Treinos - Atletas</Text>
      </View>

      {/* Select Boxes */}
      <View style={styles.selectContainer}>
        <View style={styles.inputContainer}>
          <Text style={styles.inputLabel}>ATLETA</Text>
          <TouchableOpacity
            style={styles.dropdown}
            onPress={() => setAthleteModalVisible(true)}
          >
            <Text style={styles.dropdownText}>{selectedAthlete}</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.inputLabel}>DATA</Text>
          <TouchableOpacity
            style={styles.dropdown}
            onPress={() => setDatePickerVisible(true)}
          >
            <Text style={styles.dropdownText}>{selectedDate}</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Details */}
      <View style={styles.detailsContainer}>
        <View style={styles.detail}>
          <Text style={styles.detailLabel}>NOME - ATLETA</Text>
          <Text style={styles.detailValue}>{selectedAthlete}</Text>
        </View>
        <View style={styles.detail}>
          <Text style={styles.detailLabel}>DIA - TREINO</Text>
          <Text style={styles.detailValue}>{selectedDate}</Text>
        </View>
        <View style={styles.detail}>
          <Text style={styles.detailLabel}>QUILOMETRAGEM</Text>
          <Text style={styles.detailValue}>25 KM</Text>
        </View>
        <View style={styles.detail}>
          <Text style={styles.detailLabel}>PACE MÉDIO</Text>
          <Text style={styles.detailValue}>5,43</Text>
        </View>
      </View>

      {/* Footer */}
      <View style={styles.footer}>
        <Text style={styles.footerText}>RunApp</Text>
      </View>

      {/* Modals */}
      {isAthleteModalVisible &&
        renderModal(athleteOptions, setSelectedAthlete, setAthleteModalVisible)}
      
      {/* Date Picker Modal */}
      <Modal
        visible={isDatePickerVisible && Platform.OS === 'ios'}
        transparent={true}
        animationType="slide"
        onRequestClose={() => setDatePickerVisible(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.datePickerContainer}>
            <DateTimePicker
              value={date}
              mode="date"
              display="inline" // Usa o calendário como pop-up
              onChange={handleDateChange}
            />
            <TouchableOpacity
              style={styles.modalClose}
              onPress={() => setDatePickerVisible(false)}
            >
              <Text style={styles.modalCloseText}>Fechar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>

      {/* Date Picker for Android */}
      {isDatePickerVisible && Platform.OS === 'android' && (
        <DateTimePicker
          value={date}
          mode="date"
          display="default"
          onChange={handleDateChange}
        />
      )}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#F5F5F5',
    padding: 20,
    paddingBottom: 20,
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
  selectContainer: {
    marginBottom: 20,
  },
  inputContainer: {
    marginBottom: 10,
  },
  inputLabel: {
    fontSize: 15,
    fontWeight: 'bold',
    marginBottom: 5,
    color: '#000',
  },
  dropdown: {
    backgroundColor: '#F5F5F5',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 15,
    height: 50,
    justifyContent: 'center',
    paddingHorizontal: 10,
  },
  dropdownText: {
    fontSize: 16,
    color: '#000',
  },
  detailsContainer: {
    marginVertical: 20,
  },
  detail: {
    marginBottom: 25,
    borderBottomWidth: 1,
    borderBottomColor: '#000',
    paddingBottom: 8,
  },
  detailLabel: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 5,
  },
  detailValue: {
    fontSize: 16,
    color: '#000',
    fontFamily: 'Lora_400Regular',
  },
  footer: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  footerText: {
    fontSize: 100,
    fontWeight: 'bold',
    fontFamily: 'Lora_400Regular',
    color: '#000',
    textAlign: 'center',
  },
  datePickerContainer: {
    backgroundColor: '#fff',
    borderRadius: 20,
    padding: 20,
    width: '90%',
    alignItems: 'center',
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
