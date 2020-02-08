import React from "react";
import Line from "./line";
import Svg, { G } from 'react-native-svg';
// const { G } = Svg;
import { Whisker } from "victory-core";

export default class extends Whisker {
  static defaultProps = Object.assign({}, Whisker.defaultProps, {
    groupComponent: <G/>,
    lineComponent: <Line/>
  });
}
