import React from "react";
import { Dimensions } from "react-native";
// import * as Svg from 'react-native-svg';
// const { G } = Svg;
import { G } from 'react-native-svg';
import { VictoryChart } from "victory-chart/es";
import VictoryAxis from "./victory-axis";
import VictoryPolarAxis from "./victory-polar-axis";
import VictoryContainer from "./victory-container";

export default class extends VictoryChart {
  static defaultProps = Object.assign({}, VictoryChart.defaultProps, {
    containerComponent: <VictoryContainer/>,
    groupComponent: <G/>,
    defaultAxes: {
      independent: <VictoryAxis/>,
      dependent: <VictoryAxis dependentAxis/>
    },
    defaultPolarAxes: {
      independent: <VictoryPolarAxis/>,
      dependent: <VictoryPolarAxis dependentAxis/>
    },
    width: Dimensions.get("window").width
  });
}
