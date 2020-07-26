import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import ExperienceItem from "./ExperienceItem";

function Experience() {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    setReviews([
      {
        id: 1,
        occupation: "Desenvolvedor",
        company: "DPC Distribuidor Atacadista S.A",
        period: "5 anos e 2 meses",
      },
      {
        id: 2,
        occupation: "Desenvolvedor",
        company: "DPC Distribuidor Atacadista S.A",
        period: "5 anos",
      },
      {
        id: 3,
        occupation: "Desenvolvedor",
        company: "DPC Distribuidor Atacadista S.A",
        period: "5 anos",
      },
      {
        id: 4,
        occupation: "Desenvolvedor",
        company: "DPC Distribuidor Atacadista S.A",
        period: "5 anos",
      },
      {
        id: 5,
        occupation: "Desenvolvedor",
        company: "DPC Distribuidor Atacadista S.A",
        period: "5 anos",
      },
      {
        id: 6,
        occupation: "Desenvolvedor",
        company: "DPC Distribuidor Atacadista S.A",
        period: "5 anos",
      },
      {
        id: 7,
        occupation: "Desenvolvedor",
        company: "DPC Distribuidor Atacadista S.A",
        period: "5 anos",
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
          return <ExperienceItem item={item} />;
        }}
        keyExtractor={(item) => item.id}
      />
    </>
  );
}

const styles = StyleSheet.create({
  container: {},
});

export default Experience;
