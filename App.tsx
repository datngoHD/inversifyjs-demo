import "reflect-metadata";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import CounterViewController from "src/view-controllers/counter-view-controller";

process.env.IOC = "alternate";

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <CounterViewController />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
