import React from "react";
import { Svg } from "expo";
import { Portal } from "victory-core/es";

export default class extends Portal {

  render() {
    return <Svg {...this.props}>{this.getChildren()}</Svg>;
  }
}
