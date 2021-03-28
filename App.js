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
  const addGoal = (goal) => {
    setGoalsList((currentGoals) => [
      ...currentGoals,
      { key: Math.random().toString(), goal },
    ]);
  };

  return (
    <View style={styles.root}>
      <GoalInput addGoal={addGoal} />
      <FlatList
        data={goalsList}
        renderItem={(itemData) => <GoalItem title={itemData.item.goal} />}
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
