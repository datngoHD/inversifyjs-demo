import { inject, injectable } from "inversify";
import CounterModel from "../models/counter-model";

@injectable()
export class CounterController {
  private counterModel: CounterModel;

  constructor(@inject(CounterModel) counterModel: CounterModel) {
    this.counterModel = counterModel;
  }

  public getCount(): number {
    return this.counterModel.getCount();
  }

  public incrementCount(): void {
    this.counterModel.incrementCount();
  }

  public decrementCount(): void {
    this.counterModel.decrementCount();
  }
}
