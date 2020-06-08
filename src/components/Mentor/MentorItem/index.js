import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

import { Avatar } from "react-native-paper";

import { useNavigation } from "@react-navigation/native";

function MentorItem({ item }) {
  const navigation = useNavigation();

  return (
    <>
      <TouchableOpacity
        style={styles.container}
        onPress={() => navigation.navigate("Mentor", { mentor_id: item.id })}
      >
        <Avatar.Image
          size={40}
          source={require("../../../assets/avatar.png")}
          style={styles.avatar}
        />
        <View style={styles.containerData}>
          <Text style={styles.title}>{item.username}</Text>
          <Text style={styles.subTitle}>
            {"Breve Explicação da mentoria contendo dados.."}
          </Text>
        </View>
      </TouchableOpacity>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    flexDirection: "row",
    margin: 4,
    height: 73,
    padding: 10,
    flexBasis: 0,
    display: "flex",
  },
  containerData: {
    flexDirection: "column",
    flexGrow: 1,
  },
  empty: {
    backgroundColor: "transparent",
  },
  icon: {
    flexGrow: 1,
    color: "#6886c5",
  },
  title: {
    fontSize: 16,
    padding: 2,
  },
  subTitle: {
    fontSize: 14,
    paddingHorizontal: 2,
    opacity: 0.5,
  },
  avatar: {
    backgroundColor: "#6886c5",
    alignSelf: "center",
    marginHorizontal: 3,
  },
});

export default MentorItem;
