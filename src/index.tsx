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
import { View, SafeAreaView, ScrollView, StatusBar } from 'react-native';
import { NavigationNativeContainer } from '@react-navigation/native';

import {
  Appbar,
  DefaultTheme,
  Provider as PaperProvider,
  Card,
  Button,
  Paragraph,
  Headline,
} from 'react-native-paper';

const AppHeader = function() {
  const _goBack = () => console.log('Went back');

  const _handleSearch = () => console.log('Searching');

  const _handleMore = () => console.log('Shown more');

  return (
    <Appbar.Header>
      <Appbar.BackAction onPress={_goBack} />
      <Appbar.Content title="Tadoo" />
      <Appbar.Action icon="magnify" onPress={_handleSearch} />
      <Appbar.Action icon="dots-vertical" onPress={_handleMore} />
    </Appbar.Header>
  );
};

const VenueCard = () => (
  <>
    <Card elevation={3} style={{ marginBottom: 20 }}>
      <Card.Cover
        source={{ uri: 'https://picsum.photos/700' }}
        style={{ marginBottom: 10 }}
      />
      <Card.Content>
        <Headline style={{ marginBottom: 20 }}>
          Bottomless Brunch &amp; Infinite Art and other things
        </Headline>
        <Paragraph style={{ marginBottom: 20 }}>
          A collection of technical articles published or curated by Google
          Cloud Developer Advocates. The views expressed are those of the
          authors and don't necessarily reflect those of Google.
        </Paragraph>
      </Card.Content>
      <Card.Actions>
        <Button mode="contained" icon="calendar-plus">
          Book
        </Button>
        <Button icon="bookmark-plus-outline" style={{ marginLeft: 'auto' }}>
          Save
        </Button>
      </Card.Actions>
    </Card>
  </>
);

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
  fonts: {
    ...DefaultTheme.fonts,
    medium: {
      fontFamily: 'AbhayaLibre-Bold',
      fontWeight: 'bold',
    },
  },
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
