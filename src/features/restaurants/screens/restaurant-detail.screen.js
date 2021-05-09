import React from "react";
import { SafeArea } from "../../../components/utility/safe-area";
import { RestaurantInfo } from "../componets/restaurant-info-card";

export const RestaurantDetailScreen = ({ route }) => {
  const { restaurant } = route.params;
  return (
    <SafeArea>
      <RestaurantInfo restaurant={restaurant} />
    </SafeArea>
  );
};
