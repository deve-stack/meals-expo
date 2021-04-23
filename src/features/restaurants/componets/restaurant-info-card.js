import React from "react";
import { Text, StyleSheet } from "react-native";
import { Card, card } from "react-native-paper";
import styled from "styled-components";

const Title = styled.Text`
  padding: 16px;
  color: red;
`;

const RestaurantCard = styled(Card)`
  background-color: white;
`;

const RestaurantCardCover = styled(Card.Cover)`
  padding: 20px;
  background-color: white;
`;

export const RestaurantInfo = () => {
  const name = "Some Restaurant";
  //   icon,
  const photos = [
    "https://tastesbetterfromscratch.com/wp-content/uploads/2020/06/Hamburger-recipe-7-500x500.jpg",
  ];
  //   address = "100 some random address",
  //   isOpenNow = true,
  //   rating = 4,
  //   isClisedTemporarily,
  // } = restaurant;

  return (
    <RestaurantCard elevation={5}>
      <RestaurantCardCover key={name} soruce={{ uri: photos[0] }} />
      <Title>{name}</Title>
    </RestaurantCard>
  );
};
