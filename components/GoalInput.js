import React, { useState } from "react";
import { View, TextInput, Button, StyleSheet } from "react-native";

const GoalInput = ({ addGoal }) => {
  const [enteredData, setEnteredData] = useState("");
  const goalHandler = (value) => setEnteredData(value);

  return (
    <View style={styles.inputContainer}>
      <TextInput
        placeholder="Enter Goals"
        style={styles.inputField}
        onChangeText={goalHandler}
        value={enteredData}
      />
      <Button title="Add" onPress={() => addGoal(enteredData)} />
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  inputField: {
    borderColor: "black",
    borderWidth: 1,
    padding: 10,
    flexGrow: 2,
    marginRight: 20,
  },
});

export default GoalInput;
