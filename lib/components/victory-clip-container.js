import React from "react";
import { Svg } from "expo";
const { G } = Svg;
import Circle from "./victory-primitives/circle";
import Rect from "./victory-primitives/rect";
import ClipPath from "./victory-primitives/clip-path";
import { VictoryClipContainer } from "victory-core/es";

export default class extends VictoryClipContainer {
  static defaultProps = Object.assign({}, VictoryClipContainer.defaultProps, {
    groupComponent: <G/>,
    rectComponent: <Rect/>,
    clipPathComponent: <ClipPath/>,
    circleComponent: <Circle/>
  });
}
