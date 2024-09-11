import { useFonts
 } from "expo-font";
 import { useCallback } from "react";
 import { Stack } from "expo-router";
import * as SplashScreen from 'expo-splash-screen';
const Layout = () => {
SplashScreen.preventAutoHideAsync()
    const [fontsLoaded] = useFonts({
      DmBold: require('../assets/fonts/DMSans-Bold.ttf'),
      DmMedium: require('../assets/fonts/DMSans-Medium.ttf'),
      DmRegular: require('../assets/fonts/DMSans-Regular.ttf'),
    });
  
    const onLayoutRootView = useCallback(async () => {
      if (fontsLoaded) {
        await SplashScreen.hideAsync();
      }
    }, [fontsLoaded]);
  
    if (!fontsLoaded) {
      return null; // Prevent render
    }
  
    return <Stack  />;
  };
  
  export default Layout;
  