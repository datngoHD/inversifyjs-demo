import alternateContainer from "./ioc/alternate";
import container from "./ioc/default";

export default process.env.EXPO_PUBLIC_IOC === "alternate"
  ? alternateContainer
  : container;
