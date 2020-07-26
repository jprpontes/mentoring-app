// import "react-native-gesture-handler";
import React from "react";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
// import Home from "../pages/Home";
import Profile from "../pages/Profile";
import ExploreRoutes from "./explore.routes";

const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: "#bc3c35",
    secondary: "#5b232d",
    secondaryOverlay: "#fe751e",
  },
};

const Tab = createMaterialBottomTabNavigator();

function AppRoutes() {
  return (
    <>
      <NavigationContainer theme={MyTheme}>
        <Tab.Navigator
          barStyle={{
            backgroundColor: MyTheme.colors.secondary,
          }}
          labeled={true}
        >
          {/* <Tab.Screen
            name="Home"
            component={Home}
            options={{
              tabBarLabel: "Home",
              tabBarIcon: ({ color }) => (
                <MaterialCommunityIcons
                  name="home-outline"
                  color={color}
                  size={26}
                />
              ),
            }}
          /> */}
          <Tab.Screen
            name="Explore"
            component={ExploreRoutes}
            options={{
              tabBarLabel: "Explore",
              tabBarIcon: ({ color }) => (
                <MaterialCommunityIcons
                  name="magnify"
                  color={color}
                  size={26}
                />
              ),
            }}
          />
          <Tab.Screen
            name="Profile"
            component={Profile}
            options={{
              tabBarLabel: "Minha conta",
              tabBarIcon: ({ color }) => (
                <MaterialCommunityIcons
                  name="account-circle-outline"
                  color={color}
                  size={26}
                />
              ),
            }}
          />
        </Tab.Navigator>
        {/* <Stack.Navigator headerMode="none">
          <Stack.Screen name="Mentorias" component={Mentorias} />
        </Stack.Navigator> */}
      </NavigationContainer>
    </>
  );
}

export default AppRoutes;
