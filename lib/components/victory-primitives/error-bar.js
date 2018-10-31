import React from "react";
import Line from "./line";
import { Svg } from "expo";
const { G } = Svg;
import { ErrorBar } from "victory-errorbar/es";

export default class extends ErrorBar {
  static defaultProps = Object.assign({}, ErrorBar.defaultProps, {
    groupComponent: <G/>,
    lineComponent: <Line/>
  });
}
