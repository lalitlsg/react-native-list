import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
  ScrollView,
  FlatList,
} from "react-native";
import GoalInput from "./components/GoalInput";
import GoalItem from "./components/GoalItem";

export default function App() {
  const [goalsList, setGoalsList] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const addGoal = (goal) => {
    setGoalsList((currentGoals) => [
      ...currentGoals,
      { key: Math.random().toString(), goal },
    ]);
    setShowModal(false);
  };
  const deleteHandler = (id) => {
    setGoalsList((currentGoals) => {
      return currentGoals.filter((goal) => goal.key !== id);
    });
  };
  const closeDialog = () => setShowModal(false);
  return (
    <View style={styles.root}>
      <Button title="Add New Goal" onPress={() => setShowModal(true)} />
      <GoalInput
        addGoal={addGoal}
        visible={showModal}
        closeDialog={closeDialog}
      />
      <FlatList
        data={goalsList}
        renderItem={(itemData) => (
          <GoalItem
            id={itemData.item.key}
            title={itemData.item.goal}
            deleteItem={deleteHandler}
          />
        )}
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    padding: 50,
  },
});
