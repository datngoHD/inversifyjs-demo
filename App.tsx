import "reflect-metadata";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import container from 'ioc';
import TYPES from "src/constants/identifiers";
import { Counter } from "src/features/counter";

process.env.IOC = "alternate";

export default function App() {

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Counter model={container.get(TYPES.MODEL)} controller={container.get(TYPES.CONTROLLER)} />
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
