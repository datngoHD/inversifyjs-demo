import { Container } from "inversify";
import { CounterController } from "src/controllers/counter-controller";
import CounterModel from "src/models/counter-model";
const constantCounter = new CounterModel({ count: 999 });

const alternateContainer = new Container({ autoBindInjectable: true });
alternateContainer.bind<CounterController>(CounterController).toSelf();
alternateContainer
  .bind<CounterModel>(CounterModel)
  .toConstantValue(constantCounter);

export default alternateContainer;
