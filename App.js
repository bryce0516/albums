/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';
import {
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import Header from './src/components/header'
import AlbumList from './src/components/AlbumList'

const App: () => React$Node = () => {
  return (
    <View>
      <Header headerText='Albums'/>
      <AlbumList />
    </View>
  );
};


export default App;
