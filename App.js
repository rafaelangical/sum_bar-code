import React, { Component } from 'react';
import { Image, StyleSheet, Text, View, Alert, Button } from 'react-native';
import { Constants, BarCodeScanner, Permissions } from "expo";
import Welcome from './Welcome';
import Menu from './Menu';
import List from './List';
import { Router, Scene } from 'react-native-router-flux';


class App extends Component {
  render() {
 
    return (
      <Router>
        <Scene key="root">
          <Scene
            key="welcome"
            component={Welcome}
            title="Sum_Bar-Code"
            initial
          />
          <Scene 
            key="menu"
            component={Menu}
            title="Menu"
          />
          <Scene 
            key="list"
            component={List}
            title="List"
          />
        </Scene>
      </Router>
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