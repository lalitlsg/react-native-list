import React, { useState } from "react";
import { View, TextInput, Button, StyleSheet, Modal } from "react-native";

const GoalInput = ({ addGoal, visible, closeDialog }) => {
  const [enteredData, setEnteredData] = useState("");
  const goalHandler = (value) => setEnteredData(value);
  const addGoalHandler = () => {
    addGoal(enteredData);
    setEnteredData("");
  };

  return (
    <Modal visible={visible} animationType="slide">
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Enter Goals"
          style={styles.inputField}
          onChangeText={goalHandler}
          value={enteredData}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.buttonStyles}>
            <Button title="Cancel" color="#ff1a1a" onPress={closeDialog} />
          </View>
          <View style={styles.buttonStyles}>
            <Button title="Add" color="#4d4dff" onPress={addGoalHandler} />
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  inputField: {
    borderColor: "black",
    borderWidth: 1,
    padding: 10,
    width: "80%",
    marginBottom: 20,
  },
  buttonContainer: {
    width: "60%",
    flexDirection: "row",
    justifyContent: "space-around",
  },
  buttonStyles: {
    width: "40%",
  },
});

export default GoalInput;
