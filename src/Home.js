import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import {
  FlatList,
  TouchableOpacity,
  TouchableHighlight
} from "react-native-gesture-handler";
import navigationList from "./navigation/navigationList";
class Home extends Component {

  goTo(item) {
    this.props.navigation.navigate(item)
  }
  
  render() {
    return (
      <View style={styles.container}>
        <FlatList
          data={navigationList}
          renderItem={({ item }) => (
            <TouchableHighlight
              key={item.key}
              onPress={() => this.goTo(item.goTo)}
            >
              <View style={styles.card}>
                <Text>{item.title}</Text>
              </View>
            </TouchableHighlight>
          )}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  },
  card: {
    padding: 20,
    backgroundColor: "#fff",
    borderBottomColor: "#ccc",
    borderBottomWidth: 1

  }
});

export default Home;
