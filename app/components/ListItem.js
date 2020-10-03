/**
 * @format
 * @flow
 */
import React from 'react';
import {
  ButtonText,
  StyledListItemContainer,
  StyledContainer,
  StyledText,
  StyledRowContainer,
  StyledExpandedView,
} from './../styles';
import { Icon } from 'react-native-elements';
import * as colors from '../colors';
import IconSquare from './IconSquare';
import ItemRow from './ItemRow';

function ListItem({ item, onPress, style, showExpanded }) {
  const expandedItem = () => {
    if (showExpanded) {
      return (
        <StyledExpandedView>
          <StyledContainer justify="flex-start">
            <ItemRow title="Order Amount:" data={item.orderAmount} mpB="8" mT="15" />
            <ItemRow title="Order Number:" data={item.orderNumber} />
          </StyledContainer>
          <StyledContainer justify="flex-end" align="flex-end" pr="20" mB="10" mT="15">
            <StyledText tA="right" fSize={12} titleColor={colors.highlightColor}>
              DETAILS
            </StyledText>
          </StyledContainer>
        </StyledExpandedView>
      );
    } else {
      return null;
    }
  };

  return (
    <>
      <StyledListItemContainer activeOpacity={1} onPress={onPress} style={style}>
        <IconSquare
          name={item.status === 'Returned' ? 'corner-up-left' : 'check-circle'}
          type="feather"
        />
        <StyledRowContainer dir="row">
          <StyledContainer justify="flex-start">
            <StyledText tA="left">{item.status}</StyledText>
            <StyledText titleColor={colors.secondaryTextColor} fSize={12}>
              {item.date}
            </StyledText>
          </StyledContainer>
          <Icon
            name={showExpanded ? 'chevron-up' : 'chevron-down'}
            type="feather"
            color={colors.highlightColor}
          />
        </StyledRowContainer>
      </StyledListItemContainer>
      { expandedItem()}
    </>
  );
};
export default ListItem;
