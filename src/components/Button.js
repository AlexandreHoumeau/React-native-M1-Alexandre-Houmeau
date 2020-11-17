import React, { Component } from "react";
import { TouchableOpacity, Text, View, StyleSheet} from "react-native";

class Button extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { text } = this.props;
    return (
      <TouchableOpacity style={styles.button}>
        <Text style={{color: "#fff"}}>{text}</Text>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: 'red',
    padding: 20,
    marginVertical: 20,
    borderRadius: 10
  }
})

export default Button;
