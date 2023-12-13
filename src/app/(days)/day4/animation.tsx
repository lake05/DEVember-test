import { useRef } from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import LottieView from "lottie-react-native";

const AnimationScreen = () => {
  const animation = useRef<LottieView>(null);

  return (
    <View>
      <LottieView
        ref={animation}
        autoPlay
        style={{
          width: 200,
          height: 200,
          backgroundColor: "#eee",
        }}
        // Find more Lottie files at https://lottiefiles.com/featured
        source={require("@/assets/lottie/netflix.json")}
      />

      <Button title="Play" onPress={() => animation.current?.play()} />
      <Button title="Pause" onPress={() => animation.current?.pause()} />
      <Button title="Resume" onPress={() => animation.current?.resume()} />
    </View>
  );
};

export default AnimationScreen;

const styles = StyleSheet.create({});
