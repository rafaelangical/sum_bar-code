import React, { Component } from 'react';
import { Image, StyleSheet, Text, View, Alert, Button } from 'react-native';
import { Constants, BarCodeScanner, Permissions } from "expo";
import Welcome from './Welcome.js'

class App extends Component {

  render() {
 
    return (
      <View style={styles.container}>
        <Welcome />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#333",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center"
  }
});


export default App;