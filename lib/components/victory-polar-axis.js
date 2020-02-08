import React from "react";
import { Dimensions } from "react-native";
import Svg, { G } from 'react-native-svg';
// const { G } = Svg;
import { VictoryPolarAxis } from "victory-polar-axis/es";
import VictoryLabel from "./victory-label";
import VictoryContainer from "./victory-container";
import Arc from "./victory-primitives/arc";
import LineSegment from "./victory-primitives/line-segment";

export default class extends VictoryPolarAxis {
  static defaultProps = Object.assign({}, VictoryPolarAxis.defaultProps, {
    axisComponent: <LineSegment/>,
    axisLabelComponent: <VictoryLabel/>,
    circularAxisComponent: <Arc type={"axis"}/>,
    circularGridComponent: <Arc type={"grid"}/>,
    tickLabelComponent: <VictoryLabel/>,
    tickComponent: <LineSegment/>,
    gridComponent: <LineSegment/>,
    containerComponent: <VictoryContainer/>,
    groupComponent: <G/>,
    width: Dimensions.get("window").width
  });
}
