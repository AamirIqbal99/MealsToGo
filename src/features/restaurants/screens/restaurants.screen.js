import React from 'react';
import { Searchbar } from 'react-native-paper';
import { StatusBar, SafeAreaView, StyleSheet, View } from 'react-native';
import { RestaurantInfoCard } from '../components/restaurant-info-card.component';
import styled from 'styled-components/native';


const SafeArea = styled(SafeAreaView)`
  flex: 1;
  margin-top: ${StatusBar.currentHeight}px;
`;

const SearchContainer = styled.View`
  padding: 16px;
  background-color: green;
`;

const RestaurantListContainer = styled.View`
  flex: 1;
  padding: 16px;
  background-color: lightblue;
`;

export const RestaurantsScreen = () => (
  <SafeArea>
    <SearchContainer>
      <Searchbar/>
    </SearchContainer>

    <RestaurantListContainer>
      <RestaurantInfoCard/>
    </RestaurantListContainer>
  </SafeArea>
);

/*const styles = StyleSheet.create({
    container: {
      flex: 1,
      marginTop: StatusBar.currentHeight,
      backgroundColor: 'lightblue',
    },
    search: {
      padding: 16,
      backgroundColor: 'green',
    },
    list: {
      flex: 1,
      padding: 16,
      backgroudColor: 'blue',
    },
  });*/