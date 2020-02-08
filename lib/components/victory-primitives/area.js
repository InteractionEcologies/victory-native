import React from "react";
import Path from "./path";
import Svg, { G } from 'react-native-svg';
// const { G } = Svg;
import { Area } from "victory-area/es";

export default class extends Area {
  static defaultProps = Object.assign({}, Area.defaultProps, {
    groupComponent: <G/>,
    pathComponent: <Path/>
  });
}
