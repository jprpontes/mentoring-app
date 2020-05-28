import React from "react";
import {
  SafeAreaView,
  FlatList,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
} from "react-native";

import { debounce } from "lodash";

import { Searchbar, Button } from "react-native-paper";

import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

import { useNavigation } from "@react-navigation/native";

import SubjectItem from "../../components/Subject/SubjectItem";

import MentoringItem from "../../components/Mentoring/MentoringItem";

// import Constants from "expo-constants";

const columns = 3;

const DATA = [
  {
    id: "bd7acbea-c1b1-sd",
    title: "First Item",
  },
  {
    id: "3ac68asdsdaa97f63",
    title: "Second Item",
  },
];

const DATA2 = [
  {
    id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
    title: "First Item",
  },
  {
    id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
    title: "Second Item",
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

const onChangeTextDelayed = debounce(onChangeText, 2000);

function onChangeText(text) {
  console.log(text);
}

function Search() {
  // const [value, onChangeText] = React.useState("Useless Placeholder");
  // const value = React.useState("");
  const navigation = useNavigation();

  return (
    <>
      <View>
        <Searchbar
          placeholder="Busque por mentorias."
          style={styles.searchbar}
          onChangeText={onChangeTextDelayed}
          onIconPress={() => navigation.goBack()}
          // value={value}
          icon="arrow-left"
          autoFocus={true}
        />
      </View>

      <SafeAreaView style={styles.container}>
        <FlatList
          style={styles.listSubject}
          data={createRows(DATA, columns)}
          renderItem={({ item }) => {
            if (item.empty) {
              return <View style={[styles.item, styles.itemEmpty]} />;
            }
            return <SubjectItem item={item} />;
          }}
          keyExtractor={(item) => item.id}
          // numColumns={columns}
          horizontal={true}
        />
        <FlatList
          style={styles.listMentoring}
          data={createRows(DATA2, columns)}
          renderItem={({ item }) => {
            return <MentoringItem item={item} />;
          }}
          keyExtractor={(item) => item.id}
        />
      </SafeAreaView>
    </>
  );
}

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
  listSubject: {
    // marginVertical: 5,
    paddingTop: 7,
    paddingBottom: 10,
  },
  listMentoring: {
    marginBottom: 5,
  },
  itemEmpty: {
    backgroundColor: "transparent",
  },
});

export default Search;
