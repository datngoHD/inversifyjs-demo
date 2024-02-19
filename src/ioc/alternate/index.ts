import { inject, injectable, Container } from "inversify";
import { Observable, Subject } from "rxjs";
import SERVICE_IDENTIFIER from "src/constants/identifiers";
import { CounterController, CounterModel } from "src/features/counter";

@injectable()
export class AlternateCounterController implements CounterController {
  private counterModel: CounterModel;

  constructor(@inject(SERVICE_IDENTIFIER.MODEL) counterModel: CounterModel) {
    this.counterModel = counterModel;

    // Subscribe to the counter$ observable in the constructor
    this.counterModel.counter$.subscribe((value) => {
      console.log("Received new value from counter$ alternate:", value);
    });
  }

  increment(): void {
    // Access the increment method of CounterModel to increase the counter value
    this.counterModel.increment();
  }

  decrement(): void {
    // Access the increment method of CounterModel to decrease the counter value
    this.counterModel.decrement();
  }
}

@injectable()
export class AlternateCounterModel implements CounterModel {
  private counterSubject: Subject<number> = new Subject<number>();
  counter$: Observable<number> = this.counterSubject.asObservable();

  private counterValue: number = 0;

  increment(): void {
    // Increment the counter value and emit the new value
    this.counterValue = this.counterValue + 10;
    this.counterSubject.next(this.counterValue);
  }

  decrement(): void {
    // Decrement the counter value and emit the new value
    this.counterValue = Math.max(this.counterValue - 10, 0);
    this.counterSubject.next(this.counterValue);
  }
}

const container = new Container();
container
  .bind<CounterModel>(SERVICE_IDENTIFIER.MODEL)
  .to(AlternateCounterModel)
  .inSingletonScope();
container.bind<CounterController>(SERVICE_IDENTIFIER.CONTROLLER).to(AlternateCounterController);

export default container;
