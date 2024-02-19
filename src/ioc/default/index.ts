import { inject, injectable, Container } from "inversify";
import { Observable, Subject } from "rxjs";
import SERVICE_IDENTIFIER from "src/constants/identifiers";
import { CounterController, CounterModel } from "src/features/counter";

@injectable()
export class DefaultCounterController implements CounterController {
  private counterModel: CounterModel;

  constructor(@inject(SERVICE_IDENTIFIER.MODEL) counterModel: CounterModel) {
    this.counterModel = counterModel;

    // Subscribe to the counter$ observable in the constructor
    this.counterModel.counter$.subscribe((value) => {
      console.log("Received new value from counter$ default:", value);
    });
  }

  increment(): void {
    // Access the increment method of CounterModel to increase the counter value
    this.counterModel.increment();
  }

  decrement(): void {
    this.counterModel.decrement();
  }
}

@injectable()
export class DefaultCounterModel implements CounterModel {
  private counterSubject: Subject<number> = new Subject<number>();
  counter$: Observable<number> = this.counterSubject.asObservable();

  private counterValue: number = 0;

  increment(): void {
    // Increment the counter value and emit the new value
    this.counterValue =  this.counterValue + 1;
    this.counterSubject.next(this.counterValue);
  }

  decrement(): void {
    // Decrement the counter value and emit the new value
    this.counterValue = Math.max(this.counterValue - 1, 0);
    this.counterSubject.next(this.counterValue);
  }
}

const container = new Container();
container
  .bind<CounterModel>(SERVICE_IDENTIFIER.MODEL)
  .to(DefaultCounterModel)
  .inSingletonScope();
container.bind<CounterController>(SERVICE_IDENTIFIER.CONTROLLER).to(DefaultCounterController);

export default container;
