import { useEffect } from "react";
import { StyleSheet } from "react-native";
import { Stack } from "expo-router";
import { useFonts, Inter_900Black } from "@expo-google-fonts/inter";

import {
  AmaticSC_700Bold,
  AmaticSC_400Regular,
} from "@expo-google-fonts/amatic-sc";

import * as SplashScreen from "expo-splash-screen";
SplashScreen.preventAutoHideAsync();

const RootLayout = () => {
  const [fontsLoaded, fontError] = useFonts({
    Inter: Inter_900Black,
    Amatic: AmaticSC_400Regular,
    AmaticBold: AmaticSC_700Bold,
  });

  useEffect(() => {
    if (fontsLoaded || fontError) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded, fontError]);

  if (!fontsLoaded && !fontError) {
    return null;
  }

  return (
    <Stack
      screenOptions={{
        headerStyle: {
          backgroundColor: "#F9EDE3",
        },
        headerTitleAlign: "center",
      }}
    >
      <Stack.Screen name="index" options={{ title: "DEVember" }} />
    </Stack>
  );
};

export default RootLayout;

const styles = StyleSheet.create({});
