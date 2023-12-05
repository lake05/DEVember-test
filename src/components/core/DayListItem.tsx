import { StyleSheet, Text, View } from "react-native";

interface DayListItemProps {
  day: number;
}

export default function DayListItem({ day }: DayListItemProps) {
  return (
    <View style={styles.box}>
      <Text style={styles.text}>{day}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  box: {
    backgroundColor: "#f9ede3",
    flex: 1,
    aspectRatio: 1,

    borderColor: "#9b4521",
    borderWidth: StyleSheet.hairlineWidth,
    borderRadius: 20,

    justifyContent: "center",
    alignItems: "center",
  },

  text: {
    color: "#9b4521",
    fontSize: 50,
    fontFamily: "AmaticBold",
  },
});
