// import "react-native-gesture-handler";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Explore from "../pages/Explore";
import Search from "../pages/Search";

const Stack = createStackNavigator();

const SearchRoutes: React.FC = () => {
  return (
    <>
      <Stack.Navigator headerMode="none" initialRouteName="Explore">
        <Stack.Screen name="Explore" component={Explore} />
        <Stack.Screen name="Search" component={Search} />
      </Stack.Navigator>
    </>
  );
};

export default SearchRoutes;
