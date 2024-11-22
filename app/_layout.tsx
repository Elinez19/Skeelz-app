import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";
import "react-native-reanimated";
import "@/global.css"

export default function RootLayout() {
  const [loaded] = useFonts({
    "Urbanist-Black": require("../assets/fonts/Urbanist-Black.ttf"),
    "Urbanist-BlackItalic": require("../assets/fonts/Urbanist-BlackItalic.ttf"),
    "Urbanist-Bold":  require("../assets/fonts/Urbanist-Bold.ttf"),
    "Urbanist-BoldItalic":   require("../assets/fonts/Urbanist-BoldItalic.ttf"),
    "Urbanist-ExtraBold":   require("../assets/fonts/Urbanist-ExtraBold.ttf"),
    "Urbanist--ExtraBoldItalic":  require("../assets/fonts/Urbanist-ExtraBoldItalic.ttf"),
    "Urbanist-ExtraLight":  require("../assets/fonts/Urbanist-ExtraLight.ttf"),
    "Urbanist-ExtraLightItalic": require("../assets/fonts/Urbanist-ExtraLightItalic.ttf"),
    "Urbanist-Italic":  require("../assets/fonts/Urbanist-Italic.ttf"),
    "Urbanist-Light":  require("../assets/fonts/Urbanist-Light.ttf"),
    "Urbanist-LightItalic":  require("../assets/fonts/Urbanist-LightItalic.ttf"),
    "Urbanist-Medium":  require("../assets/fonts/Urbanist-Medium.ttf"),
    "Urbanist-MediumItalic":  require("../assets/fonts/Urbanist-MediumItalic.ttf"),
    "Urbanist-Regular":  require("../assets/fonts/Urbanist-Regular.ttf"),
    "Urbanist-SemiBold":  require("../assets/fonts/Urbanist-SemiBold.ttf"),
    "Urbanist-SemiBoldItalic":  require("../assets/fonts/Urbanist-SemiBoldItalic.ttf"),
    "Urbanist-Thin":  require("../assets/fonts/Urbanist-Thin.ttf"),
    "Urbanist-ThinItalic":  require("../assets/fonts/Urbanist-ThinItalic.ttf"),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerShown: false }} />
      <Stack.Screen name="(auth)" options={{ headerShown: false }} />
      <Stack.Screen name="(root)" options={{ headerShown: false }} />
      {/* <Stack.Screen name="+not-found" /> */}
    </Stack>
  );
}
