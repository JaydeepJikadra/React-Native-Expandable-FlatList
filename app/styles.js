/**
 * @format
 * @flow
 */
import styled, { css } from 'styled-components/native';
import * as colors from './colors';

//Styled SafeAreaView
export const Container = styled.SafeAreaView`
  flex: 1;
  background: ${colors.primaryColor};
`;

export const ListContainer = styled.View`
  margin-top: 20px;
`;

export const StyledListItemContainer = styled.TouchableOpacity`
  flex-direction: row;
  border-radius: 15px;
  background: ${colors.secondaryBackground};
  ${(props) =>
    props.disabled &&
    css`
      background: gray;
    `}
  margin-vertical: 8px;
  margin-horizontal: 16px;
  shadow-color: #000000
  shadow-offset: {
    width: 2px,
    height: 2px,
  };
  shadow-opacity: 1;
  shadow-radius: 4.84px;
  elevation: 5;  
  z-index: 5;
`;

export const StyledRowContainer = styled.View`
  flex: 1;
  justify-content: space-between;
  flex-direction: row;
  align-items: center;
  padding-horizontal: 10px;
  padding-vertical: 20px;
`;
export const FloatingButton = styled.View`
  height: 78px;
  width: 78px;
  justify-content: center;
  align-items: center;
  background: ${colors.activeBackground};
  ${(props) =>
    props.dynamic &&
    css`
      border-radius: ${props.bR ? props.bR : 0}px;
      top: ${props.tm ? props.tm : 0}px;
      left: ${props.lm ? props.lm : 0}px;
    `};
`;

//Styled Text
export const Title = styled.Text`
  font-size: 16px;
  color: ${colors.primaryTextColor};
`;

export const StyledText = styled(Title)`
  font-size: ${(props) => (props.fSize ? props.fSize : 16)}px;
  text-align: ${(props) => (props.tA ? props.tA : 'center')}
  color: ${(props) =>
    props.titleColor ? props.titleColor : colors.primaryTextColor};
`;

export const StyledContainer = styled.View`
  ${(props) =>
    css`
      align-items: ${(props) => (props.align ? props.align : 'flex-start')};
      padding-left: ${(props) => (props.pl ? props.pl : 0)}px;
      flex-direction: ${(props) => (props.dir ? props.dir : 'column')};
      justify-content: ${(props) => (props.justify ? props.justify : 'center')};
      margin-bottom: ${(props) => (props.mB ? props.mB : 0)}px;
      margin-top: ${(props) => (props.mT ? props.mT : 0)}px;
      background: ${props.color ? props.color : 'transparent'};
      padding-right: ${(props) => (props.pr ? props.pr : 0)}px;
    `};
`;

export const StyledExpandedView = styled.View`
  padding-left: 16px;
  justify-content: space-between;
  margin-bottom: 10px;
  background: ${colors.secondaryBackground};
  border-bottom-right-radius: 15px;
  border-bottom-left-radius: 15px;
  margin-horizontal: 16px;
  padding-vertical: 20px;
  z-index: 0;
`;
export const ButtonText = styled.Text`
  color: ${(props) =>
    props.titleColor ? props.titleColor : colors.primaryTextColor};
  font-size: 16px;
  text-align: left;
`;

export const shadow = {
  shadowColor: '#000',
  shadowOffset: {
    width: 0,
    height: 2,
  },
  shadowOpacity: 0.25,
  shadowRadius: 3.84,

  elevation: 5,
};
/////////////////unused
//Styled View
export const Content = styled.View`
  padding: 20px;
  justify-content: center;
  align-items: center;
`;

export const SectionContainer = styled.View`
  margin-top: 32px;
  padding: 0px 28px;
`;

export const DashedBorderBG = styled.View`
  padding: 16px;
  border: 1px dashed black;
  margin-top: 16px;
  border-radius: 10px;
  justify-content: space-between;
`;

export const AddToDoContainer = styled(DashedBorderBG)`
  justify-content: center;
  margin: 8px;
`;

//Styled Model
export const StyledModel = styled.Modal`
  margin: 20px;
  background: ${colors.primaryColor};
  padding: 35px;
  border-radius: 20px;
  align-items: center;
  shadow-color: black;
  shadow-offset: 0px 2px;
  shadow-opacity: 0.25;
  shadow-radius: 3.84px;
  elevation: 5;
`;

//Styled TextInput
export const Input = styled.TextInput`
  height: 50px;
  margin: 8px 0 10px 0;
  padding: 6px 8px;
  border: 3px solid #ddd;
`;
