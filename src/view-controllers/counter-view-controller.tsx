import React, { Component } from "react";
import CounterView from "src/views/counter-view";
import container from "../inversify.config";
import { CounterController } from "src/controllers/counter-controller";

interface CounterViewControllerState {
  count: number;
}
class CounterViewController extends Component<{}, CounterViewControllerState> {
  private counterController: CounterController;

  constructor(props: {}) {
    super(props);
    this.counterController =
      container.resolve<CounterController>(CounterController);
    this.state = {
      count: this.counterController.getCount(),
    };
  }

  handleIncrement = () => {
    this.counterController.incrementCount();
    this.setState({ count: this.counterController.getCount() });
  };

  handleDecrement = () => {
    this.counterController.decrementCount();
    this.setState({ count: this.counterController.getCount() });
  };

  render() {
    return (
      <CounterView
        count={this.state.count}
        onIncrement={this.handleIncrement}
        onDecrement={this.handleDecrement}
      />
    );
  }
}

export default CounterViewController;
