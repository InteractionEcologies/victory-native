import React from "react";
import Line from "./line";
import { Svg } from "expo";
const { G } = Svg;
import { Whisker } from "victory-core/es";

export default class extends Whisker {
  static defaultProps = Object.assign({}, Whisker.defaultProps, {
    groupComponent: <G/>,
    lineComponent: <Line/>
  });
}
