// import "react-native-gesture-handler";
import React from "react";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import Home from "../Home/Index";
import Busca from "../Busca/Index";
import Profile from "../Profile/Index";

const Tab = createMaterialBottomTabNavigator();

const Main: () => React$Node = (navigation) => {
  return (
    <>
      <NavigationContainer>
        <Tab.Navigator barStyle={{ backgroundColor: "#fff" }} labeled={true}>
          <Tab.Screen
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
          />
          <Tab.Screen
            name="Busca"
            component={Busca}
            options={{
              tabBarLabel: "Busca",
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
              tabBarLabel: "Profile",
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
      </NavigationContainer>
    </>
  );
};

export default Main;
