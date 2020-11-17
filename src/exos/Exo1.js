import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";

class Exo1 extends Component {
  render() {
    return(
      <View style={styles.square}>
        <Text>Hello World !</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  square: {
    height: 100,
    width: 100,
    backgroundColor: 'cyan',
    justifyContent: 'center',
    alignItems: 'center'
  }
})

export default Exo1;