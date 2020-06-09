import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

import { Avatar } from "react-native-paper";

import { useNavigation } from "@react-navigation/native";

function ReviewItem({ item }) {
  const navigation = useNavigation();

  return (
    <>
      <View style={styles.container}>
        <View style={styles.containerReview}>
          <Text style={styles.title}>{item.reviewTitle}</Text>
          <Text style={styles.subTitle}>{item.review}</Text>
        </View>
        <View style={styles.containerUserReview}>
          <Avatar.Image
            size={40}
            source={require("../../../../assets/avatar2.png")}
            style={styles.avatar}
          />
          <View style={styles.containerUserReviewData}>
            <Text style={styles.title}>{item.username}</Text>
            {/* <Text style={styles.subTitle}>
            {"Breve Explicação da mentoria contendo dados.."}
          </Text> */}
          </View>
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    margin: 4,
    // height: 180,
    padding: 10,
    flexBasis: 0,
    display: "flex",
  },
  containerReview: {
    flexDirection: "column",
    flexGrow: 1,
    paddingBottom: 20,
  },
  containerUserReview: {
    // backgroundColor: "red",
    flexDirection: "row",
    // flexGrow: 1,
    // height: 73,
  },
  containerUserReviewData: {
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

export default ReviewItem;
