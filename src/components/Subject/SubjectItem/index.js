import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

import { useNavigation } from "@react-navigation/native";

function SubjectItem({ item }) {
  const navigation = useNavigation();

  return (
    <>
      <TouchableOpacity style={styles.container}>
        <View>
          <MaterialCommunityIcons name="pound" style={styles.icon} size={26} />
          <Text style={styles.title}>{item.title}</Text>
        </View>
      </TouchableOpacity>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    flexGrow: 1,
    flexDirection: "column",
    margin: 7,
    height: 90,
    padding: 10,
    flexBasis: 0,
    display: "flex",
  },
  empty: {
    backgroundColor: "transparent",
  },
  icon: {
    flexGrow: 1,
    color: "#6886c5",
  },
  title: {
    fontSize: 12,
    paddingTop: 15,
  },
});

export default SubjectItem;
