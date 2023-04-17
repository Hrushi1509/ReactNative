import React from "react";
import { StyleSheet, Text, View, Pressable } from "react-native";

function App() {
  return (
    <View style={styles.main}>
      <Pressable
        onPress={() => console.log("normal on press")}
        onLongPress={() => console.log("long press called")}
        onPressIn={() => console.log("press in ")}
        onPressOut={() => console.log("press out")}
      >
        <Text style={styles.pressableBtn}>Pressable</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    justifyContent: "center"
  },
  pressableBtn: {
    backgroundColor: "blue",
    color: "#fff",
    textAlign: "center",
    padding: 10,
    margin: 10,
    borderRadius: 10,
    fontSize: 20,
    shadowColor: "#000",
    elevation: 5
  }
});
export default App;
