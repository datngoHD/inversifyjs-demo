import { Container } from "inversify";
import { CounterController } from "src/controllers/counter-controller";
import CounterModel from "src/models/counter-model";
const constantCounter = new CounterModel({ count: 10 });

const container = new Container({ autoBindInjectable: true });
container.bind<CounterController>(CounterController).toSelf();
container.bind<CounterModel>(CounterModel).toConstantValue(constantCounter);

export default container;
