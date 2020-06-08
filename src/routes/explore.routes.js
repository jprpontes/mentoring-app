// import "react-native-gesture-handler";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Explore from "../pages/Explore";
import Search from "../pages/Search";
import Mentor from "../pages/Mentor";

const Stack = createStackNavigator();

function ExploreRoutes() {
  return (
    <>
      <Stack.Navigator headerMode="none" initialRouteName="Explore">
        <Stack.Screen
          name="Explore"
          component={Explore}
          options={{
            animationEnabled: false,
          }}
        />
        <Stack.Screen
          name="Search"
          component={Search}
          options={{
            animationEnabled: false,
          }}
        />
        <Stack.Screen
          name="Mentor"
          component={Mentor}
          options={{
            animationEnabled: false,
          }}
        />
      </Stack.Navigator>
    </>
  );
}

export default ExploreRoutes;
