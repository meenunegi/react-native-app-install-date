//  Created by react-native-create-bridge

import { NativeModules, NativeEventEmitter } from "react-native";

const { AppInstallDate } = NativeModules;
const AppInstallDateEmitter = new NativeEventEmitter(AppInstallDate);

export default {
  exampleMethod() {
    return AppInstallDate.exampleMethod();
  },

  emitter: AppInstallDateEmitter,

  EXAMPLE_CONSTANT: AppInstallDate.EXAMPLE_CONSTANT
};
