import React, { Component } from "react";
import { View, Text, StyleSheet, Button, Alert } from "react-native";

class Exo2 extends Component {
  showAlert() {
    Alert.alert(
      "Alert",
      "Hello",
      [
        { text: "OK", onPress: () => console.log("OK Pressed") }
      ],
    );

  }
  render() {
    return(
      <View style={styles.container}>
        <Button title="Button 1" onPress={() => this.showAlert()}/>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})



export default Exo2;