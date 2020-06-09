import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import ReviewItem from "./ReviewItem";

function Review() {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    setReviews([
      {
        id: 1,
        reviewTitle: '"Excelente!"',
        review: "Mentoria incrível de um profissional experiente.",
        username: "fulana",
      },
      {
        id: 2,
        reviewTitle: '"Excelente!"',
        review: "Mentoria incrível de um profissional experiente.",
        username: "siclana",
      },
      {
        id: 3,
        reviewTitle: '"Excelente!"',
        review: "Mentoria incrível de um profissional experiente.",
        username: "beltrana",
      },
    ]);
  }, []);

  useEffect(() => {
    return () => null;
  }, []);

  return (
    <>
      <FlatList
        data={reviews}
        renderItem={({ item }) => {
          return <ReviewItem item={item} />;
        }}
        keyExtractor={(item) => item.id}
      />
    </>
  );
}

const styles = StyleSheet.create({
  container: {},
});

export default Review;
