import React, { useEffect, useState } from "react";
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

const onChangeTextDelayed = debounce(onChangeText, 2000);

function onChangeText(text) {
  console.log(text);
}

function Search() {
  const navigation = useNavigation();
  const [subjects, setSubjects] = useState([]);
  const [mentoring, setMentoring] = useState([]);

  useEffect(() => {
    setSubjects([
      {
        id: 1,
        title: "Programação",
      },
      {
        id: 2,
        title: "Culinária",
      },
      {
        id: 3,
        title: "Política",
      },
    ]);

    setMentoring([
      {
        id: 1,
        title: "Javascript",
      },
      {
        id: 2,
        title: "Css",
      },
      {
        id: 3,
        title: "React",
      },
    ]);
  }, []);

  useEffect(() => {
    return () => console.log("Saiu do component");
  }, []);

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
          data={subjects}
          renderItem={({ item }) => {
            return <SubjectItem item={item} />;
          }}
          keyExtractor={(item) => item.id}
          // numColumns={columns}
          horizontal={true}
        />
        <FlatList
          style={styles.listMentoring}
          data={mentoring}
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
