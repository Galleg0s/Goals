import React, { useState } from "react";
import { StyleSheet, View, FlatList, Button } from "react-native";
import { GoalItem, GoalInput } from "./components";
import uid from "uid";

const App = () => {
	const [courseGoals, setCourseGoals] = useState([]);
	const [modalVisibility, setModalVisibility] = useState(false);

	const handleAddButtonPress = goalTitle => {
		const isEnteredGoals = courseGoals.length > 0;
		const enteredGoalInCourseGoals = courseGoals.find(goal => goal.value === goalTitle);
		const enteredGoalIsEqualToAnother = typeof enteredGoalInCourseGoals !== "undefined";
		const enteredGoalIsExist = isEnteredGoals && enteredGoalIsEqualToAnother;

		if (enteredGoalIsExist) {
			return;
		}

		setModalVisibility(false);
		setCourseGoals(currentGoals => [...currentGoals, { id: uid(), value: goalTitle }]);
	};

	const handleDeleteGoal = goalTitle => {
		setCourseGoals(currentGoals => {
			return currentGoals.filter(goal => goal.value !== goalTitle);
		});
	};

	const handleModalVisibilityChange = isVisble => {
		setModalVisibility(isVisble);
	};

	return (
		<View style={styles.root}>
			<Button title="Add New Goal" onPress={handleModalVisibilityChange.bind(this, true)} />
			<GoalInput
				onAddGoal={handleAddButtonPress}
				onCancel={handleModalVisibilityChange.bind(this, false)}
				modalVisibility={modalVisibility}
			/>
			<FlatList
				keyExtractor={item => item.id}
				data={courseGoals}
				renderItem={itemData => (
					<GoalItem
						goalTitle={itemData.item.value}
						deleteGoal={handleDeleteGoal.bind(this, itemData.item.value)}
					/>
				)}
			/>
		</View>
	);
};

const styles = StyleSheet.create({
	root: { marginVertical: 30, marginHorizontal: 20 },
});

export default App;
