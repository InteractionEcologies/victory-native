import React from "react";
import * as Svg from 'react-native-svg';
import { Portal } from "victory-core";

export default class extends Portal {

  render() {
    return <Svg {...this.props}>{this.getChildren()}</Svg>;
  }
}
