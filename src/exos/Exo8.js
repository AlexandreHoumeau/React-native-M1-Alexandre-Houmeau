import React, { Component } from "react";
import { View, Text, FlatList, ActivityIndicator, StyleSheet } from "react-native";

const users = [
  {
    "name": {
      id: 1,
      "title": "Mrs",
      "first": "Saana",
      "last": "Heikkila"
    }
  },
  {
    "name": {
      id: 2,
      "title": "Miss",
      "first": "الینا",
      "last": "احمدی"
    }
  },
  {
    "name": {
      id: 3,
      "title": "Mr",
      "first": "Jeremy",
      "last": "Sirko"
    }
  },
  {
    "name": {
      id: 4,
      "title": "Mr",
      "first": "Roman",
      "last": "Heinz"
    }
  },
  {
    "name": {
      id: 5,
      "title": "Ms",
      "first": "Celina",
      "last": "Watson"
    }
  },
  {
    "name": {
      id: 6,
      "title": "Mr",
      "first": "Hans-Wilhelm",
      "last": "Eisner"
    }
  },
  {
    "name": {
      id: 7,
      "title": "Miss",
      "first": "Jacqueline",
      "last": "Fuller"
    }
  },
  {
    "name": {
      id: 8,
      "title": "Mr",
      "first": "Xavier",
      "last": "Williams"
    }
  },
  {
    "name": {
      id: 9,
      "title": "Ms",
      "first": "Sedef",
      "last": "Akan"
    }
  },
  {
    "name": {
      id: 10,
      "title": "Mr",
      "first": "Adam",
      "last": "King"
    }
  },
  {
    "name": {
      id: 11,
      "title": "Ms",
      "first": "Alyssia",
      "last": "Marchand"
    }
  },
  {
    "name": {
      id: 12,
      "title": "Mr",
      "first": "Roy",
      "last": "Montgomery"
    }
  },
  {
    "name": {
      id: 13,
      "title": "Ms",
      "first": "Jenita",
      "last": "Den Dunnen"
    }
  },
  {
    "name": {
      id: 14,
      "title": "Mrs",
      "first": "Maia",
      "last": "Robinson"
    }
  },
  {
    "name": {
      id: 15,
      "title": "Mr",
      "first": "Malo",
      "last": "Berger"
    }
  },
  {
    "name": {
      id: 16,
      "title": "Mr",
      "first": "Albertino",
      "last": "Ribeiro"
    }
  },
  {
    "name": {
      id: 17,
      "title": "Mrs",
      "first": "Mila",
      "last": "Roberts"
    }
  },
  {
    "name": {
      id: 18,
      "title": "Mrs",
      "first": "Olivia",
      "last": "Wilson"
    }
  },
  {
    "name": {
      id: 19,
      "title": "Mr",
      "first": "Keano",
      "last": "Geel"
    }
  },
  {
    "name": {
      id: 20,
      "title": "Mrs",
      "first": "Sara",
      "last": "Olsen"
    }
  },
  {
    "name": {
      id: 21,
      "title": "Mademoiselle",
      "first": "Malin",
      "last": "Lacroix"
    }
  },
  {
    "name": {
      id:22,
      "title": "Mr",
      "first": "Mads",
      "last": "Poulsen"
    }
  },
  {
    "name": {
      id: 23,
      "title": "Mr",
      "first": "Agenor",
      "last": "Ribeiro"
    }
  },
  {
    "name": {
      id: 24,
      "title": "Mr",
      "first": "Shane",
      "last": "Ryan"
    }
  },
]

class Exo8 extends Component {
  render() {
      return(
        <View style={styles.container}>
        <FlatList
          data={users}
          keyExtractor={item => item.name.id.toString()}
          renderItem={( {item} ) => (
            <View style={styles.card}>
              <Text>{item.name.first} {item.name.last}</Text>
            </View>
          )}
        />
        </View>
      )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  card: {
    padding: 20,
    backgroundColor: "#fff",
    borderBottomColor: "#ccc",
    borderBottomWidth: 1
  }
})


export default Exo8;