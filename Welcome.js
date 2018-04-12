import React, { Component } from 'react';
import { Image, StyleSheet, Text, View, Alert, Button } from 'react-native';
import { Constants, BarCodeScanner, Permissions } from "expo";
import logo from './assets/logo.png'

class Welcome extends Component {

  toSecond() {

  }

  render() {

    return (
      <View style={styles.container}>
        <View style={styles.container_top}>
          <Image source={logo} style={styles.logo} />
          <Text style={styles.text}>Sum Code-Bar</Text>
          <Text style={styles.welcome}>Welcome</Text>
        </View>
        <View style={styles.container_bottom}>
          <Button
            onPress={this.toSecond}
            title="Proximo"
            style={styles.button}
            color='red'
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
  },
  logo: {
    maxWidth: 100,
    maxHeight: 100,
    borderRadius: 50
  }
});


export default Welcome;