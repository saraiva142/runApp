import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './screens/HomeScreen';
import AthleteScreen from './screens/AthleteScreen';
import TrainingScreen from './screens/TrainingScreen';
import QueryScreen from './screens/QueryScreen';
import AppLoading from 'expo-app-loading';
import AuthScreen from './screens/AuthScreen';
import {
  useFonts,
  Lora_400Regular,
  Lora_500Medium,
  Lora_700Bold,
  Lora_600SemiBold_Italic,
} from "@expo-google-fonts/lora";
import { ClerkProvider } from '@clerk/clerk-expo'; // Importar ClerkProvider

const Stack = createStackNavigator();

export default function App() {
  const [fontsLoaded] = useFonts({
    Lora_400Regular,
    Lora_500Medium,
    Lora_700Bold,
    Lora_600SemiBold_Italic,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    // Envolva o NavigationContainer com ClerkProvider
    <ClerkProvider
      publishableKey="pk_test_c21pbGluZy1wb3Jwb2lzZS02LmNsZXJrLmFjY291bnRzLmRldiQ"
      // Coloque sua chave pública aqui
    >
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Auth">
          <Stack.Screen name="Auth" component={AuthScreen} />
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Athlete" component={AthleteScreen} />
          <Stack.Screen name="Training" component={TrainingScreen} />
          <Stack.Screen name="Query" component={QueryScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </ClerkProvider>
  );
}
