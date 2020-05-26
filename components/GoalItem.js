import React, { memo } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

const GoalItem = ({ goalTitle, deleteGoal }) => {
	return (
		<TouchableOpacity onPress={deleteGoal}>
			<View style={styles.goal}>
				<Text>{goalTitle}</Text>
			</View>
		</TouchableOpacity>
	);
};

export default memo(GoalItem);

const styles = StyleSheet.create({
	goal: { padding: 10, marginVertical: 5, backgroundColor: "#d2d2d2" },
});
