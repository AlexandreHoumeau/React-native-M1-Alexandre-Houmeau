import React, { Component } from "react";
import { View, Text, StyleSheet, Button } from "react-native";

class Exo12 extends Component {
  constructor(props) {
    super(props)
    this.state = {
      count: 0
    }
  }

  press() {
    const { count } = this.state;
    this.setState({
      count: count + 1
    })
  }

  componentWillUnmount() {
    this.setState({
      count: 0
    })
  }

  render() {
    const { count } = this.state;
    return(
      <View style={styles.container}>
        <Button title="Press me" onPress={() => this.press()} />
        {count > 0 ? <Text>You've pressed the button: {count}</Text>: <Text>Please press on the button</Text>}
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



export default Exo12;