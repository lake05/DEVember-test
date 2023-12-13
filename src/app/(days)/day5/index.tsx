import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Link, Stack } from "expo-router";
import MarkdownDisplay from "@/components/day3/MarkdownDisplay";
import { SafeAreaView } from "react-native-safe-area-context";

const description = `
  # AirBNB maps
`;

const DayDetailsScreen = () => {
  return (
    <SafeAreaView edges={["bottom"]} style={{ flex: 1 }}>
      <Stack.Screen options={{ title: "Day 3: MAPS" }} />

      <MarkdownDisplay>{description}</MarkdownDisplay>

      <Link href="/day5/airbnb" asChild>
        <Text style={styles.buttonText}>Go to AirBNB Map</Text>
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
