/**
 * @format
 * @flow
 */
import React, {useState, useCallback} from 'react';
import {ActivityIndicator, FlatList, StatusBar} from 'react-native';
import ListItem from '../../components/ListItem';
import {Container, ListContainer, StyledText} from '../../styles';
import {DATA} from '../../constants';
import * as colors from '../../colors';

function Orders(props) {
  const [selectedId, setSelectedId] = useState(new Map());
  const [reachToEnd, setReachToEnd] = useState(false);
  const [loading, setLoading] = useState(false);

  const onSelect = useCallback(
    (id) => {
      console.log('Orders -> id', id);
      const newSelected = new Map(selectedId);
      newSelected.set(id, !selectedId.get(id));
      console.log('Orders -> newSelected.has(id)', newSelected.has(id));
      newSelected.has(`order${id}`)
        ? newSelected.delete(`order${id}`)
        : newSelected.set(`order${id}`, id);
      setSelectedId(newSelected);
    },
    [selectedId],
  );

  const renderItem = ({item}) => {
    const marginBottom =
      item.id === selectedId.get(`order${item.id}`) ? -20 : 8;
    return (
      <ListItem
        item={item}
        onPress={() => onSelect(item.id)}
        style={{marginBottom}}
        showExpanded={!!selectedId.get(item.id)}
      />
    );
  };

  const renderFooter = () => {
    const {reachToEnd} = props;
    if (!loading && reachToEnd) return null;
    if (reachToEnd)
      return (
        <StyledText titleColor={colors.secondaryTextColor}>
          Swipe up to load more
        </StyledText>
      );

    return <ActivityIndicator style={{color: '#000'}} />;
  };

  const loadMoreData = () => {};
  return (
    <Container>
      <StatusBar barStyle="light-content" />
      <StyledText fSize="20">My Orders</StyledText>
      <ListContainer>
        <FlatList
          data={DATA}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          extraData={selectedId}
          ListFooterComponent={renderFooter}
          onEndReached={loadMoreData}
          onEndReachedThreshold={0.1}
          scrollEventThrottle={400}
        />
      </ListContainer>
    </Container>
  );
}
export default Orders;
