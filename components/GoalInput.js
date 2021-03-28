import React, { useState, useEffect } from "react";
import { View, TextInput, Button, StyleSheet, Modal, Text } from "react-native";

const GoalInput = ({ addGoal, visible, closeDialog }) => {
  const [enteredData, setEnteredData] = useState("");
  const [showError, setShowError] = useState(false);

  useEffect(() => {
    if (enteredData) setShowError(false);
  }, [enteredData]);

  const goalHandler = (value) => setEnteredData(value);

  const addGoalHandler = () => {
    if (enteredData) {
      addGoal(enteredData);
      setEnteredData("");
      setShowError(false);
    } else {
      setShowError(true);
    }
  };

  const cancelHandler = () => {
    setShowError(false);
    setEnteredData("");
    closeDialog();
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
        {showError && (
          <Text style={styles.errorMessage}>Please Enter Goal</Text>
        )}
        <View style={styles.buttonContainer}>
          <View style={styles.buttonStyles}>
            <Button title="Cancel" color="#ff1a1a" onPress={cancelHandler} />
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
  errorMessage: {
    marginBottom: 15,
    color: "#b30000",
    borderColor: "#b30000",
    borderWidth: 1,
    padding: 10,
    backgroundColor: "#ffe5e5",
  },
});

export default GoalInput;
