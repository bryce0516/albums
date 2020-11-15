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
import {Provider} from 'react-redux'
import {createStore} from 'redux'
import reducers from './src/reducers'


const App: () => React$Node = () => {
  return (
    <Provider store={createStore(reducers)}>
      <View style={{flex:1}}>
        <Header headerText='Albums'/>
        <AlbumList />
      </View>
    </Provider>
  );
};


export default App;
