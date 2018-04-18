import React, { Component } from "react";
import { StyleSheet, Text, View, Button } from "react-native";

class List extends Component{
  render(){
    return(
      <View style={styles.container}>
        <View style={styles.containerTop}>
          <Text>Lista de Produtos</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: "flex",
    //flexDirection: "column",
    alignItems: "center",
    justifyContent: "center"
  },
  containerTop: {
    minWidth: 400,
    minHeight: 100,
    alignItems: 'center'
  }
});

export default List;