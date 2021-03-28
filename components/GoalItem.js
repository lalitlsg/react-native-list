import React from "react";
import { View, Text, StyleSheet, TouchableNativeFeedback } from "react-native";

const GoalItem = ({ id, title, deleteItem }) => {
  return (
    <TouchableNativeFeedback onPress={() => deleteItem(id)}>
      <View style={styles.listItems}>
        <Text>{title}</Text>
      </View>
    </TouchableNativeFeedback>
  );
};

const styles = StyleSheet.create({
  listItems: {
    backgroundColor: "#fae9fc",
    marginVertical: 10,
    padding: 10,
    borderRadius: 3,
  },
});

export default GoalItem;
