import React from "react";
import { Text, View, Button } from "react-native";

interface CounterViewProps {
  count: number;
  onIncrement: () => void;
  onDecrement: () => void;
}

const CounterView: React.FC<CounterViewProps> = ({
  count,
  onIncrement,
  onDecrement,
}) => {
  return (
    <View>
      <Text>Count: {count}</Text>
      <Button title="Increment" onPress={onIncrement} />
      <Button title="Decrement" onPress={onDecrement} />
    </View>
  );
};

export default CounterView;
