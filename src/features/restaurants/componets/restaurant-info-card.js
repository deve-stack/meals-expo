import React from "react";
import { Text, StyleSheet } from "react-native";
import { Card, card } from "react-native-paper";
import { SvgXml } from "react-native-svg";
import styled from "styled-components";

import star from "../../../../assets/star.svg";
import open from "../../../../assets/open.svg";
import { Spacer } from "../../../components/spacer_component";

const Title = styled.Text`
  font-family: ${(props) => props.theme.fonts.body};
  font-size: ${(props) => props.theme.fontSizes.body};
  color: ${(props) => props.theme.colors.ui.primary};
`;

const Info = styled.View`
  padding: ${(props) => props.theme.space[3]};
`;

const Section = styled.View`
  flex-direction: row;
  align-items: center;
`;

const SectionEnd = styled.View`
  flex: 1;
  justify-content: flex-end;
  flex-direction: row;
`;

const Rating = styled.View`
  flex-direction: row;
  padding-top: ${(props) => props.theme.space[2]};
  padding-bottom: ${(props) => props.theme.space[2]};
`;

const Address = styled(Text)`
  font-size: ${(props) => props.theme.fontSizes.body};
  font-size: ${(props) => props.theme.fontSizes.caption};
`;

const RestaurantCard = styled(Card)`
  background-color: white;
`;

const RestaurantCardCover = styled(Card.Cover)`
  padding: ${(props) => props.theme.space[3]};
  background-color: white;
`;

export const RestaurantInfo = () => {
  const name = "Some Restaurant";
  //   icon,
  const photos = [
    "https://tastesbetterfromscratch.com/wp-content/uploads/2020/06/Hamburger-recipe-7-500x500.jpg",
  ];
  const address = "100 some random address";
  const isOpenNow = true;
  const rating = 4;
  const isClosedTemporarily = true;
  // } = restaurant;

  const rattingArray = Array.from(new Array(Math.floor(rating)));

  return (
    <RestaurantCard elevation={5}>
      <RestaurantCardCover key={name} soruce={{ uri: photos[0] }} />
      <Info>
        <Title>{name}</Title>
        <Section>
          <Rating>
            {rattingArray.map(() => (
              <SvgXml xml={star} width={20} height={20} />
            ))}
          </Rating>
          <SectionEnd>
            {isClosedTemporarily && (
              <Text variant="label" style={{ color: "red" }}>
                CLOSED TEMPORARILY
              </Text>
            )}
            <Spacer />
            {isOpenNow ? (
              <SvgXml xml={open} width={20} height={20} />
            ) : (
              <Text></Text>
            )}
          </SectionEnd>
        </Section>
        <Address>{address}</Address>
      </Info>
    </RestaurantCard>
  );
};
