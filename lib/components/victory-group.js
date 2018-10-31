import React from "react";
import { Dimensions } from "react-native";
import { Svg } from "expo";
const { G } = Svg;
import { VictoryGroup } from "victory-group/es";
import VictoryContainer from "./victory-container";

export default class extends VictoryGroup {
  static defaultProps = Object.assign({}, VictoryGroup.defaultProps, {
    containerComponent: <VictoryContainer/>,
    groupComponent: <G/>,
    width: Dimensions.get("window").width
  });
}
