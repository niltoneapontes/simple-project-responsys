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
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';

// import PushIOManager from 'react-native-pushiomanager';

// PushIOManager.configure("pushio_config.json", (error, response) => {

// });

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
    flex: 1,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <View style={{flex: 1, alignItems: 'center'}}>
        <Text style={{fontSize: 20, fontWeight: 'bold'}}>Hello World</Text>
      </View>
    </SafeAreaView>
  );
};

export default App;
