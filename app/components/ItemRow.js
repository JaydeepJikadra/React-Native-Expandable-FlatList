/**
 * @format
 * @flow
 */
import React from 'react';
import { StyledContainer, StyledText } from './../styles';
import { Icon } from 'react-native-elements';
import * as colors from '../colors';

const ItemRow = (props) => {
  const { title, data, mpB, mT } = props;
  return (
    <StyledContainer dir="row" justify="flex-start" mB={mpB ? mpB : 0} mT={mT}>
      <StyledText titleColor={colors.secondaryTextColor} fSize={14}>{title}</StyledText>
      <StyledText fSize={14}>{' ' + data}</StyledText>
    </StyledContainer>
  );
};
export default ItemRow;
