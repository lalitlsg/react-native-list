import React from "react";
import { View, Text, StyleSheet } from "react-native";

const GoalItem = ({ title }) => {
  return (
    <View style={styles.listItems}>
      <Text>{title}</Text>
    </View>
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
