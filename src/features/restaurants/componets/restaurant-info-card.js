import React from "react";
import { SvgXml } from "react-native-svg";

import {
  Info,
  RestaurantCard,
  RestaurantCardCover,
  Address,
  Section,
  SectionEnd,
  Rating,
} from "./restaurant-info-card-style";

import { Spacer } from "../../../components/spacer_component";
import { Text } from "../../../components/typography";
import star from "../../../../assets/star.svg";
import open from "../../../../assets/open.svg";

export const RestaurantInfo = ({ restaurant }) => {
  const {
    name,
    photos,
    address,
    isOpenNow,
    rating,
    isClosedTemporarily,
  } = restaurant;
  // const name = "Some Restaurant";
  // //   icon,
  // const photos = [
  //   "https://tastesbetterfromscratch.com/wp-content/uploads/2020/06/Hamburger-recipe-7-500x500.jpg",
  // ];
  // const address = "100 some random address";
  // const isOpenNow = true;
  // const rating = 4;
  // const isClosedTemporarily = true;
  // } = restaurant;

  const rattingArray = Array.from(new Array(Math.floor(rating)));

  return (
    <RestaurantCard elevation={5}>
      <RestaurantCardCover key={name} source={{ uri: photos[0] }} />
      <Info>
        <Text variant="label">{name}</Text>
        <Section>
          <Rating>
            {rattingArray.map(() => (
              <SvgXml xml={star} width={20} height={20} />
            ))}
          </Rating>
          <SectionEnd>
            {isClosedTemporarily && (
              <Text variant="error" style={{ color: "red" }}>
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
