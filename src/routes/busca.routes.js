// import "react-native-gesture-handler";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Busca from "../pages/Busca";
import Mentorias from "../pages/Mentorias";

const Stack = createStackNavigator();

const BuscaRoutes: React.FC = () => {
  return (
    <>
      <Stack.Navigator>
        <Stack.Screen name="Busca" component={Busca} />
        <Stack.Screen name="Mentorias" component={Mentorias} />
      </Stack.Navigator>
    </>
  );
};

export default BuscaRoutes;
