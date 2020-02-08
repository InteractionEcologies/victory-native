import React from "react";
import PropTypes from "prop-types";
import Svg, { Defs, ClipPath } from 'react-native-svg';
// const { Defs, ClipPath } = Svg;

export default class VClipPath extends React.Component {
  static propTypes = {
    children: PropTypes.oneOfType([
      PropTypes.arrayOf(PropTypes.node),
      PropTypes.node
    ]),
    clipId: PropTypes.oneOfType([PropTypes.number, PropTypes.string])
  };

  render() {
    const { children, clipId } = this.props;
    return (
      <Defs>
        <ClipPath id={clipId}>
          {children}
        </ClipPath>
      </Defs>
    );
  }
}
