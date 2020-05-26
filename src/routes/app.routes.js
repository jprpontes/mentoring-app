// import "react-native-gesture-handler";
import React from "react";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import Home from "../pages/Home";
import Profile from "../pages/Profile";
import BuscaRoutes from "./busca.routes";

const Tab = createMaterialBottomTabNavigator();

const AppRoutes: React.FC = () => {
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
            component={BuscaRoutes}
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
        {/* <Stack.Navigator headerMode="none">
          <Stack.Screen name="Mentorias" component={Mentorias} />
        </Stack.Navigator> */}
      </NavigationContainer>
    </>
  );
};

export default AppRoutes;
