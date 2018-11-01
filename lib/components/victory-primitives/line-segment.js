import React from "react";
import Line from "./line";
import { LineSegment } from "victory-core";

export default class extends LineSegment {
  static defaultProps = Object.assign({}, LineSegment.defaultProps, {
    lineComponent: <Line/>
  });
}
