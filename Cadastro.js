import React, { Component } from "react";
import { Text, View, StyleSheet, Alert } from "react-native";
import { Constants, BarCodeScanner, Permissions } from "expo";

export default class App extends Component {
  
  state = {
    hasCameraPermission: null
  };

  componentDidMount() {
    this._requestCameraPermission();
  }

  _requestCameraPermission = async () => {
    const { status } = await Permissions.askAsync(Permissions.CAMERA);
    this.setState({
      hasCameraPermission: status === "granted"
    });

    // return(
      
    // );
  };

  _handleBarCodeRead = data => {
    Alert.alert("Scan successful!", JSON.stringify(data));
  };

  render() {
    return (
      // <View style={styles.container}>
      //   {this.state.hasCameraPermission === null ? (
      //     <Text>Requesting for camera permission</Text>
      //   ) : this.state.hasCameraPermission === false ? (
      //     <Text>Camera permission is not granted</Text>
      //   ) : (
      //     <BarCodeScanner
      //       onBarCodeRead={this._handleBarCodeRead}
      //       style={{ height: 200, width: 200 }}
      //     />
      //   )}
      // </View>
      <View style={styles.container}>
        <View style={styles.containerTop}>
          <Text>Menu de Cadastro</Text>
        </View>
        <View style={styles.containerMiddle}></View>
        <View style={styles.containerBottom}>
          <Button 
            title="Enviar"
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingTop: Constants.statusBarHeight,
    backgroundColor: "#ecf0f1"
  },
  containerTop:{
    minWidth: 300,
    minHeight: 100,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor:'red'
  },
  containerMiddle:{
    minWidth: 300,
    minHeight: 400,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'blue'
  },
  containerBottom:{
    minWidth: 300,
    minHeight: 100,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'green'
  },
});
