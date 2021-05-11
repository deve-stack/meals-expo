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
import { Favourite } from "../../../components/favourites/favourite.component";
import { View } from "react-native";

export const RestaurantInfo = ({ restaurant }) => {
  const {
    name,
    photos,
    address,
    isOpenNow,
    rating,
    placeId,
    isClosedTemporarily,
  } = restaurant;

  const ratingArray = Array.from(new Array(Math.floor(rating)));

  return (
    <RestaurantCard elevation={5}>
      <View>
        <Favourite restaurant={restaurant} />
        <RestaurantCardCover key={name} source={{ uri: photos[0] }} />
      </View>
      <Info>
        <Text variant="label">{name}</Text>
        <Section>
          <Rating>
            {ratingArray.map((_, i) => (
              <SvgXml
                key={`star-${placeId}-${i}`}
                xml={star}
                width={20}
                height={20}
              />
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
