import React from "react";
import {
  SafeAreaView,
  FlatList,
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableHighlight,
} from "react-native";

import { Searchbar } from "react-native-paper";

import SubjectItem from "../../components/Subject/SubjectItem";

import { useNavigation } from "@react-navigation/native";

// import Constants from "expo-constants";

const columns = 2;

const DATA = [
  {
    id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
    title: "First Item",
  },
];

function createRows(data, columns) {
  const rows = Math.floor(data.length / columns); // [A]
  let lastRowElements = data.length - rows * columns; // [B]
  while (lastRowElements !== columns) {
    // [C]
    data.push({
      // [D]
      id: `empty-${lastRowElements}`,
      name: `empty-${lastRowElements}`,
      empty: true,
    });
    lastRowElements += 1; // [E]
  }
  return data; // [F]
}

function Item({ title }) {
  return (
    <View style={styles.item}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
}

const Explore: React.FC = () => {
  const navigation = useNavigation();

  return (
    <>
      <View>
        <TouchableHighlight
          underlayColor="transparent"
          onPress={() => navigation.navigate("Search")}
        >
          <Searchbar
            placeholder="Busque por mentorias."
            style={styles.searchbar}
            editable={false}
            // value={value}
          />
        </TouchableHighlight>
      </View>
      <SafeAreaView style={styles.container}>
        <Text style={styles.subjectTitle}>Assuntos</Text>
        <FlatList
          data={createRows(DATA, columns)}
          style={styles.subjectList}
          renderItem={({ item }) => {
            if (item.empty) {
              return <View style={[styles.item, styles.itemEmpty]} />;
            }
            return <SubjectItem item={item} />;
          }}
          keyExtractor={(item) => item.id}
          numColumns={columns}
        />
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // marginTop: Constants.statusBarHeight,
  },
  searchbar: {
    marginTop: 15,
    marginBottom: 8,
    marginHorizontal: 12,
  },
  subjectTitle: {
    marginVertical: 10,
    marginHorizontal: 15,
    fontSize: 16,
    fontWeight: "700",
  },
  subjectList: {
    marginHorizontal: 5,
  },
  itemEmpty: {
    backgroundColor: "transparent",
    flexGrow: 1,
    margin: 8,
    height: 90,
    padding: 10,
  },
  title: {
    fontSize: 12,
  },
});

export default Explore;
