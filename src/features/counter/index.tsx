import { useEffect, useState } from "react";
import { View, Text, Button } from "react-native";
import { Observable } from "rxjs";

export interface CounterModelAction {
    increment(): void;
    decrement(): void;
}

export interface CounterModel extends CounterModelAction {
    // This should be backed by a BehaviorSubject
    readonly counter$: Observable<number>;
}

export interface CounterController {
    increment(): void;
    decrement(): void;
}

export interface CounterProps {
    model: CounterModel;
    controller: CounterController;
}

export function Counter(props: CounterProps) {
    const [count, setCount] = useState(0);

    useEffect(() => {
        props.model.counter$.subscribe({
            next: (c) => setCount(c),
        });
    }, [props.model]);

    const onIncrement = () => {
        props.controller.increment();
    };

    const onDecrement = () => {
        props.controller.decrement();
    };

    return (
        <View style={{ alignItems: 'center' }}>
            <Text>Count: {count}</Text>
            <Button title="Increment" onPress={onIncrement} />
            <Button title="Decrement" onPress={onDecrement} />
        </View>
    );
}
