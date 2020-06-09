import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

import { Avatar } from "react-native-paper";

import { useNavigation } from "@react-navigation/native";

function ExperienceItem({ item }) {
  const navigation = useNavigation();

  return (
    <>
      <View style={styles.container}>
        <Avatar.Image
          size={50}
          source={require("../../../../assets/no-image.png")}
          style={styles.avatar}
        />
        <View style={styles.containerData}>
          <Text style={styles.title}>{item.occupation}</Text>
          <Text style={styles.title}>{item.company}</Text>
          <Text style={styles.subTitle}>{item.period}</Text>
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    flexDirection: "row",
    margin: 4,
    height: 85,
    padding: 10,
    // flexBasis: 0,
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
  occupation: {
    fontSize: 16,
    paddingTop: 2,
  },
  company: {
    fontSize: 16,
    paddingTop: 1,
  },
  subTitle: {
    fontSize: 14,
    paddingHorizontal: 1,
    opacity: 0.5,
  },
  avatar: {
    backgroundColor: "#6886c5",
    alignSelf: "center",
    marginLeft: 3,
    marginRight: 10,
  },
});

export default ExperienceItem;
