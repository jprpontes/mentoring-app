import React from "react";
import {
  SafeAreaView,
  FlatList,
  View,
  Text,
  TextInput,
  StyleSheet,
} from "react-native";

import { debounce } from "lodash";

import { Searchbar } from "react-native-paper";

import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

// import Constants from "expo-constants";

const columns = 3;

const DATA = [
  {
    id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
    title: "First Item",
  },
  {
    id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
    title: "Second Item",
  },
  {
    id: "58694a0f-3da1-471f-bd96-145571e29d72",
    title: "Third Item",
  },
  {
    id: "58694a0f-3da1-471f-bd96-14557asdadn",
    title: "Third Item",
  },
  {
    id: "58694a0f-3da1-471f-bd96-14557sdsdasd72",
    title: "Third Item",
  },
  {
    id: "58694a0f-3da1-471f-bd96-145sds71e29d72",
    title: "Third Item",
  },
  {
    id: "58694a0f-3da1-471f-bd96sdss71e29d72",
    title: "Third Item",
  },
  {
    id: "sdsdsd",
    title: "Third Item",
  },
  {
    id: "sdsdsdsddd",
    title: "Third Item",
  },
  {
    id: "3455",
    title: "Third Item",
  },
  {
    id: "5667",
    title: "Third Item",
  },
  {
    id: "5667",
    title: "Third Item",
  },
  {
    id: "5667",
    title: "Third Item",
  },
  {
    id: "5667",
    title: "Third Item",
  },
  {
    id: "5667",
    title: "Third Item",
  },
  {
    id: "5667",
    title: "Third Item",
  },
  {
    id: "5667",
    title: "Third Item",
  },
  {
    id: "5667",
    title: "Third Item",
  },
  {
    id: "5667",
    title: "Third Item",
  },
  {
    id: "5667",
    title: "Third Item",
  },
  {
    id: "5667",
    title: "Third Item",
  },
  {
    id: "5667",
    title: "Third Item",
  },
  {
    id: "5667",
    title: "Third Item",
  },
  {
    id: "5667",
    title: "Third Item",
  },
  {
    id: "5667",
    title: "Third Item",
  },
  {
    id: "5667",
    title: "Third Item",
  },
  {
    id: "5667",
    title: "Third Item",
  },
  {
    id: "5667",
    title: "Third Item",
  },
  {
    id: "5667",
    title: "Third Item",
  },
  {
    id: "5667",
    title: "Third Item",
  },
  {
    id: "5667",
    title: "Third Item",
  },
  {
    id: "5667",
    title: "Third Item",
  },
  {
    id: "5667",
    title: "Third Item",
  },
  {
    id: "5667",
    title: "Third Item",
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
    <View style={styles.itemContainer}>
      <MaterialCommunityIcons name="pound" style={styles.itemIcon} size={26} />
      <Text style={styles.itemTitle}>{title}</Text>
    </View>
  );
}

const onChangeTextDelayed = debounce(onChangeText, 2000);

function onChangeText(text) {
  console.log(text);
}

const Busca: () => React$Node = () => {
  // const [value, onChangeText] = React.useState("Useless Placeholder");
  const value = React.useState("");

  return (
    <>
      <View>
        <Searchbar
          placeholder="Busque por mentorias."
          // style={styles.inputText}
          onChangeText={onChangeTextDelayed}
          value={value}
        />
      </View>

      <SafeAreaView style={styles.container}>
        <FlatList
          data={createRows(DATA, columns)}
          renderItem={({ item }) => {
            if (item.empty) {
              return <View style={[styles.item, styles.itemEmpty]} />;
            }
            return <Item title={item.title} />;
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
  inputText: {
    height: 50,
  },
  itemContainer: {
    // alignItems: "center",
    backgroundColor: "#fff",
    flexGrow: 1,
    flexDirection: "column",
    margin: 4,
    height: 90,
    padding: 10,
    flexBasis: 0,
  },
  itemEmpty: {
    backgroundColor: "transparent",
  },
  itemIcon: {
    flexGrow: 1,
    color: "#6886c5",
  },
  itemTitle: {
    fontSize: 12,
  },
});

export default Busca;
