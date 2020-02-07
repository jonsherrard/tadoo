/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import { View, SafeAreaView, ScrollView, StatusBar, Image } from 'react-native';
import { NavigationNativeContainer } from '@react-navigation/native';

import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper';

import AppHeader from './components/AppHeader';
import VenueCard from './components/VenueCard';

const theme = {
  ...DefaultTheme,
  dark: true,
  mode: 'exact',
  roundness: 4,
  colors: {
    ...DefaultTheme.colors,
    primary: '#2F3251',
    accent: '#D4B1CB',
  },
  // fonts: {
  //   ...DefaultTheme.fonts,
  //   medium: {
  //     fontFamily: 'AbhayaLibre-Bold',
  //     fontWeight: 'bold',
  //   },
  // },
};

const App = () => {
  return (
    <PaperProvider theme={theme}>
      <NavigationNativeContainer>
        <StatusBar barStyle="light-content" />
        <SafeAreaView style={{ backgroundColor: theme.colors.primary }}>
          <AppHeader />
          <ScrollView
            contentInsetAdjustmentBehavior="automatic"
            style={{ backgroundColor: 'white' }}>
            <View style={{ margin: 16 }}>
              <VenueCard />
              <VenueCard />
              <VenueCard />
              <VenueCard />
            </View>
          </ScrollView>
        </SafeAreaView>
      </NavigationNativeContainer>
    </PaperProvider>
  );
};
export default App;
