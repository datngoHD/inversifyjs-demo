import { Container } from "inversify";
import CounterModel from "./models/CounterModel";
import { CounterController } from "./controllers/CounterController";
const constantCounter = new CounterModel({ count: 10 });

const container = new Container({ autoBindInjectable: true });
container.bind<CounterController>(CounterController).toSelf();
container.bind<CounterModel>(CounterModel).toConstantValue(constantCounter);

export default container;
