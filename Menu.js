import React, { Component } from "react";
import { StyleSheet, Text, View, Button } from "react-native";

class Menu extends Component{
  
  render(){
    return(
      <View style={styles.container}>
        <View style={styles.containerTop}>
          <Text style={{ color: '#456', fontSize: 50}}>Menu</Text>
        </View>
        <View style={styles.containerBottom}>
          <Button 
            title="Novo"
          />
          <Button
            title="Listar"
          />
          <Button
            title="Voltar"
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#999"
  },
  containerTop: {
    padding: 20,
    minWidth: 400,
    minHeight: 200,
    alignItems: "center",
    justifyContent: "center",
  },
  containerBottom: {
    marginTop: 50,
    flexDirection: "column",
    width: 200,
    minHeight: 110,
    justifyContent: "space-between",
  }, 
  button: {
    fontSize: 10
  }

});

export default Menu;