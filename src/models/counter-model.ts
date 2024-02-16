import { injectable } from "inversify";

interface CounterModelOptions {
  count: number;
}

@injectable()
class CounterModel {
  private count: number;

  constructor(options?: CounterModelOptions) {
    this.count = options?.count ?? 0;
  }

  public getCount(): number {
    return this.count;
  }

  public incrementCount(): void {
    this.count++;
  }

  public decrementCount(): void {
    this.count--;
  }
}

export default CounterModel;
