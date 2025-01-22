import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import * as WebBrowser from "expo-web-browser";
import { useOAuth } from '@clerk/clerk-expo';
import { Button } from '../components/Button';

WebBrowser.maybeCompleteAuthSession();

export default function AuthScreen({ navigation }: any) {
  const [isLoading, setIsLoading] = useState(false);
  const googleOAuth = useOAuth({ strategy: "oauth_google" });

  async function onGoogleSignIn() {
    try {
      setIsLoading(true);

      // Inicia o fluxo de OAuth
      const oAuthFlow = await googleOAuth.startOAuthFlow();

     // console.log('OAuth Flow result:', oAuthFlow);

      if (oAuthFlow.authSessionResult?.type === "success") {
        //console.log('OAuth Success:', oAuthFlow);

        // Se a autenticação for bem-sucedida, setar a sessão ativa
        if (oAuthFlow.setActive) {
          await oAuthFlow.setActive({ session: oAuthFlow.createdSessionId });
        }

        // Navegar para a tela Home após a autenticação bem-sucedida
        navigation.navigate("Home");
      } else {
        //console.log('OAuth Flow failed:', oAuthFlow);
        setIsLoading(false);
      }
    } catch (error) {
      //console.error('Error during Google Sign In:', error);
      setIsLoading(false);
    }
  }

  useEffect(() => {
    WebBrowser.warmUpAsync();

    return () => {
      WebBrowser.coolDownAsync();
    };
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Entrar</Text>
      <Button
        icon="logo-google"
        title="Entrar com Google"
        onPress={onGoogleSignIn}
        isLoading={isLoading}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 32,
    justifyContent: "center",
    gap: 12,
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
  },
});
