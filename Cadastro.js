import React, { Component } from "react";
import {
  Text,
  View,
  StyleSheet,
  Alert,
  Button,
  TextInput
} from "react-native";
import { Constants, BarCodeScanner, Permissions } from "expo";

export default class App extends Component {
  
  state = {
    hasCameraPermission: null,
    text: 'Digite algo'
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

  onpress(e) {

  }

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
          <Text style={{fontSize: 35, color: 'red'}}>Menu de Cadastro</Text>
        </View>
        <View style={styles.containerMiddle}>
          <Text style={{fontSize: 20}}>Nome</Text>
          <TextInput
            style={{ height: 50, borderColor: 'gray', borderWidth: 1, width:300, marginBottom: 50, marginTop: 5 }}
            onChangeText={(text) => this.setState({ text })}
            value={this.state.text}
          />
          <Text style={{fontSize: 20}}>Descriçao</Text>
          <TextInput
            style={{height: 50, borderColor: 'black', borderWidth: 1, width: 300, marginBottom: 50}}
            value='descrição'
          />

          <Button
            title='Escanear barcode'

          />
        </View>
        <View style={styles.containerBottom}>
          <Button 
            onPress={() => onpress(e)}
            title="Enviar"
            style={{fontSize: 30, width: 200}}
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
    backgroundColor: "#345"
  },
  containerTop:{
    width: 400,
    minHeight: 80,
    alignItems: 'center',
    justifyContent: 'center',
  },
  containerMiddle:{
    width: 400,
    minHeight: 400,
    alignItems: 'center',
  },
  containerBottom:{
    width: 400,
    minHeight: 80,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
