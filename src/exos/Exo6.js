import React, { Component } from "react";
import { View, StyleSheet, Text } from "react-native";
import { ScrollView } from "react-native-gesture-handler";

class Exo6 extends Component {
  render() {
    return(
      <ScrollView style={styles.container}>
        <View style={styles.square}>
          <Text>Square 1</Text>
        </View>
        <View style={styles.square}>
          <Text>Square 2</Text>
        </View>
        <View style={styles.square}>
          <Text>Square 3</Text>
        </View>
        <View style={styles.square}>
          <Text>Square 4</Text>
        </View>
        <View style={styles.square}>
          <Text>Square 5</Text>
        </View>
        <View style={styles.square}>
          <Text>Square 6</Text>
        </View>
        <View style={styles.square}>
          <Text>Square 7</Text>
        </View>
        <View style={styles.square}>
          <Text>Square 8</Text>
        </View>
        <View style={styles.square}>
          <Text>Square 9</Text>
        </View>
        <View style={styles.square}>
          <Text>Square 10</Text>
        </View>
        <View style={styles.square}>
          <Text>Square 11</Text>
        </View>
        <View style={styles.square}>
          <Text>Square 12</Text>
        </View>
        <View style={styles.square}>
          <Text>Square 13</Text>
        </View>
        <View style={styles.square}>
          <Text>Square 14</Text>
        </View>
        <View style={styles.square}>
          <Text>Square 15</Text>
        </View>
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  square: {
    height: 100,
    width: 100,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'cyan',
    marginVertical: 20,
  }
})



export default Exo6;