import React, { Component } from 'react';
import { StyleSheet, Text, View, Alert, Button } from 'react-native';
import { Constants, BarCodeScanner, Permissions } from "expo";

export default class App extends Component {

  toSecond() {

  }  

  render() {
 
    return (
      <View style={styles.container}>
        <View style={styles.container_top}>
          <Text style={styles.text}>Sum Code-Bar</Text>
          <Text style={styles.welcome}>Welcome</Text>
        </View>
        <View style={styles.container_bottom}>
          <Button 
            onPress={this.toSecond}
            title="Next"
            style={styles.button}
            color = 'red'
          />
        </View>
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
  },
  container_top: {
    height: 300,
    minWidth: 400,
    justifyContent: "center",
    alignItems: "center",
    padding: 20
  },
  container_bottom: {
    height: 100,
    minWidth: 400,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: 60
  },
  welcome: {
    color: "red",
    fontSize: 40
  }
});
