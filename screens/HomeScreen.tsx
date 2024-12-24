import { Lora_400Regular, Lora_400Regular_Italic } from '@expo-google-fonts/lora';
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';

export default function HomeScreen({ navigation }: any) {
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.header}>RunApp</Text>
      </View>

      <View style={styles.subHeaderContainer}>
        <Text style={styles.subHeader}>Olá Clube &</Text>
        <Text style={styles.subHeader}>Boa Corrida</Text>
      </View>

      <View style={styles.content}>
        <Image 
          source={require('../assets/Frame1.png')} 
          style={styles.image} 
        />

        <View style={styles.buttonContainer}>
          <TouchableOpacity 
            style={styles.button} 
            onPress={() => navigation.navigate('Athlete')}
          >
            <Text style={styles.buttonText}>Cadastrar Atleta</Text>
          </TouchableOpacity>

          <TouchableOpacity 
            style={styles.button} 
            onPress={() => navigation.navigate('Training')}
          >
            <Text style={styles.buttonText}>Cadastrar Treino</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EFE9E9',
  },
  headerContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  header: {
    //color: '#00a8ff', AZUL
    color: '#000',
    fontSize: 110,
    fontWeight: 'light',
    textAlign: 'center',
    fontFamily: 'Lora_400Regular',
  },
  subHeaderContainer: {
    marginTop: 1,
    alignItems: 'stretch',
  },
  subHeader: {
    //color: '#00a8ff',
    color: '#000',
    fontSize: 20,
    fontFamily: 'Lora_400Regular',
  },
  content: {
    flex: 2,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  image: {
    width: 150,
    height: 340,
    borderRadius: 15,
    marginRight: 20,
  },
  buttonContainer: {
    justifyContent: 'center',
  },
  button: {
    backgroundColor: '#F8F8F8',
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 25,
    marginBottom: 10,
  },
  buttonText: {
    color: '#000',
    fontSize: 16,
    fontWeight: '500',
  },
});
