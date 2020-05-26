import React, { useState } from "react";
import { StyleSheet, TextInput, View, Button, Modal } from "react-native";

const GoalInput = ({ onAddGoal, modalVisibility, onCancel }) => {
	console.log("Render app");
	const [enteredGoal, setEnteredGoal] = useState("");

	const handleChangeText = goal => {
		setEnteredGoal(goal);
	};

	const handleAddButtonPress = goalTitle => {
		const enteredGoalIsEmpty = goalTitle.length === 0;
		if (enteredGoalIsEmpty) return;
		onAddGoal(goalTitle);
		setEnteredGoal("");
	};

	return (
		<Modal visible={modalVisibility} animationType="slide">
			<View style={styles.root}>
				<TextInput
					style={styles.input}
					onChangeText={handleChangeText}
					value={enteredGoal}
					placeholder="Type a goal"
				/>
				<View style={styles.buttonsContainer}>
					<View style={styles.button}>
						<Button
							style={styles.button}
							title="ADD"
							onPress={handleAddButtonPress.bind(this, enteredGoal)}
						/>
					</View>
					<View style={styles.button}>
						<Button style={styles.button} title="CANCEL" onPress={onCancel} color="red" />
					</View>
				</View>
			</View>
		</Modal>
	);
};

const styles = StyleSheet.create({
	root: {
		marginHorizontal: 20,
		marginVertical: 30,
		flex: 1,
		justifyContent: "center",
	},
	input: {
		width: "100%",
		height: 40,
		borderBottomColor: "gray",
		borderBottomWidth: 1,
		marginBottom: 10,
	},
	buttonsContainer: {
		flexDirection: "row",
		justifyContent: "space-between",
		width: "100%",
	},
	button: { flex: 1 },
});

export default GoalInput;
