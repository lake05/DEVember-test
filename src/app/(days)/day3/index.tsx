import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Link, Stack } from "expo-router";
import MarkdownDisplay from "@/components/day3/MarkdownDisplay";
import { SafeAreaView } from "react-native-safe-area-context";

const description = `
# Today's Agenda - December 8, 2023

## Morning

- 9:00 AM - Team meeting
- 10:00 AM - Project brainstorming session

## Afternoon

- 1:00 PM - Lunch break
- 2:00 PM - Client presentation
- 3:30 PM - Marketing strategy discussion

## Evening

- 6:00 PM - Networking event
- 8:00 PM - Dinner with colleagues

## Reminders

- Prepare slides for the client presentation
- Follow up on pending tasks from yesterday

Have a productive day!
`;

const DayDetailsScreen = () => {
  return (
    <SafeAreaView edges={["bottom"]} style={{ flex: 1 }}>
      <Stack.Screen options={{ title: "Day 3: Markdown" }} />

      <MarkdownDisplay>{description}</MarkdownDisplay>

      <Link href="/day3/editor" asChild>
        <Text style={styles.buttonText}>Go to Editor</Text>
      </Link>
    </SafeAreaView>
  );
};

export default DayDetailsScreen;

const styles = StyleSheet.create({
  buttonText: {
    alignSelf: "center",
    color: "#302e38",
    fontFamily: "InterSemi",
    fontSize: 16,
    padding: 15,
    paddingHorizontal: 25,
  },
});
