/**
 * @format
 * @flow
 */
import React from 'react';
import { Icon } from 'react-native-elements';
import { FloatingButton } from '../styles';
import * as colors from '../colors';

const IconSquare = (props) => {
  return (
    <FloatingButton dynamic bR="15">
      <Icon
        reverse={props.reverse ? true : false}
        name={props.name}
        type={props.type}
        color={colors.primaryIconColor}
      />
    </FloatingButton>
  );
};
export default IconSquare;
