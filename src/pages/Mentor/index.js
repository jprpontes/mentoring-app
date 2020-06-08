import React, { useEffect, useState } from "react";
import { SafeAreaView, StyleSheet, Text } from "react-native";
import { Avatar } from "react-native-paper";

import axios from "axios";

import { useNavigation } from "@react-navigation/native";

function Mentor({ navigation, route }) {
  // const navigation = useNavigation();
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
      <SafeAreaView style={styles.container}>
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
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // marginTop: Constants.statusBarHeight,
  },
  avatar: {
    backgroundColor: "#6886c5",
    alignSelf: "center",
    marginHorizontal: 3,
    marginTop: 50,
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
