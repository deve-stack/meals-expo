import React from "react";
import { SafeAreaView, FlatList, StatusBar, View } from "react-native";
import { Colors, ActivityIndicator, Searchbar } from "react-native-paper";
import { RestaurantInfo } from "../componets/restaurant-info-card";
import styled from "styled-components";
import { SafeArea } from "../../../components/utility/safe-area";
import { useContext } from "react";
import { RestaurantsContext } from "../../../services/restaurants/restaurant.context";
import { Spacer } from "../../../components/spacer_component";
import { Search } from "../componets/search.component";

const RestaurantList = styled(FlatList).attrs({
  contentContainerStyle: {
    padding: 16,
  },
})``;

const Loading = styled(ActivityIndicator)``;

const LoadingContainer = styled.View`
  position: absolute;
  top: 50%;
  left: 50%;
`;

export const RestaurantsScreen = () => {
  const { isLoading, restaurants } = useContext(RestaurantsContext);
  const [searchQuery, setSearchQuery] = React.useState("");
  const onChangeSearch = (query) => setSearchQuery(query);

  return (
    <SafeArea>
      {isLoading && (
        <LoadingContainer>
          <Loading
            size={50}
            animating={true}
            color={Colors.blue300}
            style={{ marginLeft: -25 }}
          />
        </LoadingContainer>
      )}
      <Search />
      {/* <SearchContainer>
        <Searchbar />
      </SearchContainer> */}
      <RestaurantList
        data={restaurants}
        keyExtractor={(item) => item.name}
        renderItem={({ item }) => {
          return (
            <Spacer position="bottom" size="large">
              <RestaurantInfo restaurant={item} />
            </Spacer>
          );
        }}
      />
    </SafeArea>
  );
};
