import React from "react";
// import * as Svg from 'react-native-svg';
// const { G } = Svg;
import { G } from 'react-native-svg';
import Circle from "./victory-primitives/circle";
import Rect from "./victory-primitives/rect";
import ClipPath from "./victory-primitives/clip-path";
import { VictoryClipContainer } from "victory-core";

export default class extends VictoryClipContainer {
  static defaultProps = Object.assign({}, VictoryClipContainer.defaultProps, {
    groupComponent: <G/>,
    rectComponent: <Rect/>,
    clipPathComponent: <ClipPath/>,
    circleComponent: <Circle/>
  });
}
