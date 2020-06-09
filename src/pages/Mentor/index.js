import React, { useEffect, useState } from "react";
import { SafeAreaView, StyleSheet, Text } from "react-native";
import { Avatar, Appbar, IconButton } from "react-native-paper";
import Review from "../../components/Mentor/Review";
import Experience from "../../components/Mentor/Experience";
import axios from "axios";
import { useNavigation } from "@react-navigation/native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

const Tab = createMaterialTopTabNavigator();

function Mentor({ navigation, route }) {
  const [isLoading, setLoading] = useState(false);
  const [mentor, setMentor] = useState({});

  useEffect(() => {
    setLoading(true);

    axios
      .get(`http://167.71.123.145:3333/mentors/${route.params.mentor_id}`)
      .then((result) => {
        setLoading(false);
        setMentor(result.data.mentor);
      })
      .catch((error) => {
        setLoading(false);
        console.log(error);
      });
  }, []);

  useEffect(() => {
    return () => null;
  }, []);

  return (
    <>
      {/* <Appbar.Header>
        <Appbar.BackAction onPress={() => {}} />
      </Appbar.Header> */}
      <SafeAreaView style={styles.container}>
        <IconButton
          icon="arrow-left"
          style={styles.backButton}
          // color={"red"}
          // size={26}
          onPress={() => navigation.goBack()}
        />
        <Avatar.Image
          size={100}
          source={require("../../assets/avatar.png")}
          style={styles.avatar}
        />
        <Text style={styles.username}>{mentor?.username}</Text>
        <Text style={styles.description}>
          Profissional da àrea de programação. Especialista em desenvolvimento
          web.
        </Text>
      </SafeAreaView>
      <Tab.Navigator
        tabBarOptions={{
          style: {},
        }}
        backBehavior="none"
      >
        <Tab.Screen
          name="Experience"
          component={Experience}
          options={{
            tabBarLabel: "Experiência",
          }}
        />
        <Tab.Screen
          name="Review"
          component={Review}
          options={{
            tabBarLabel: "Resenhas",
          }}
        />
      </Tab.Navigator>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // marginTop: Constants.statusBarHeight,
    backgroundColor: "#fff",
    paddingBottom: 20,
  },
  backButton: {
    position: "absolute",
    marginTop: 15,
    marginBottom: 8,
    marginHorizontal: 12,
  },
  avatar: {
    backgroundColor: "#6886c5",
    alignSelf: "center",
    marginHorizontal: 3,
    marginTop: 30,
  },
  username: {
    fontSize: 16,
    fontWeight: "bold",
    alignSelf: "center",
    textAlign: "center",
    margin: 10,
    width: "80%",
  },
  description: {
    fontSize: 14,
    alignSelf: "center",
    textAlign: "center",
    opacity: 0.5,
    width: "70%",
  },
});

export default Mentor;
