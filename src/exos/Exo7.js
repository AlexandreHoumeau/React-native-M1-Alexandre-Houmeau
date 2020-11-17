import React, { Component } from "react";
import { View, StyleSheet, Text, TextInput, Button, Keyboard } from "react-native";

class Exo7 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: null,
      value: null
    }
  }

  handleText(value) {
    this.setState({
      name: value
    })
  }

  render() {
    const { name, value  } = this.state;
    return(
      <View style={styles.container}>
        <Text style={{fontWeight: 'bold', marginTop: 10}}>What's your name</Text>
        <TextInput style={styles.input} value={name} placeholder="John Doe" onChangeText={(value) => this.handleText(value)} />
        <Button title="Say Hello" onPress={() => {this.setState({value: name}); Keyboard.dismiss()}} />
        <View style={{alignItems: 'center', flex: 1}}>
          {value ? <Text style={{fontSize: 30, textAlign: "center"}}>Hello {value}</Text> : null}
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 20 
  },
  input: {
    backgroundColor: '#ccc',
    padding: 10,
    marginVertical: 10,
    borderRadius: 10
  }
})



export default Exo7;