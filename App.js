/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, { Component } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import AppInstallDate from "./AppInstallDateNativeModule";

export default class App extends Component {
  state = {
    appInstallDate: null
  };

  componentWillMount() {
    AppInstallDate.emitter.addListener("EXAMPLE_EVENT", ({ date }) => {
      alert(date);
      this.setState(() => ({ appInstallDate: date }));
    });
  }

  componentWillUnmount() {
    AppInstallDate.emitter.remove();
  }

  onPress = () => {
    AppInstallDate.exampleMethod();
  };

  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={this.onPress}>
          <Text>Click Me!!!</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  }
});
