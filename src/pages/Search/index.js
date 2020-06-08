import React, { useEffect, useState } from "react";
import {
  SafeAreaView,
  FlatList,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";

import { debounce } from "lodash";

import axios from "axios";

import { Searchbar, Button } from "react-native-paper";

import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

import { useNavigation } from "@react-navigation/native";

import SubjectItem from "../../components/Subject/SubjectItem";

import MentorItem from "../../components/Mentor/MentorItem";

function Search() {
  const navigation = useNavigation();
  const [subjects, setSubjects] = useState([]);
  const [mentoring, setMentoring] = useState([]);
  const [isLoading, setLoading] = useState(false);

  const onChangeTextDelayed = debounce(onChangeText, 1000);

  function onChangeText(text) {
    runSearch(text);
  }

  function runSearch(value) {
    //Fazendo busca.
    var searchValue = value;

    if (searchValue == "") {
      setSubjects([]);
      setMentoring([]);
      setLoading(false);
      return;
    }

    setLoading(true);

    axios
      .get(`http://167.71.123.145:3333/search/${searchValue}`)
      .then((result) => {
        setSubjects(result.data.subjects);
        setMentoring(result.data.mentors);
        setLoading(false);
      })
      .catch((error) => {
        setLoading(false);
        console.log(error);
      });
  }

  function createList() {
    var list;
    if (isLoading) {
      list = <ActivityIndicator size="large" color="#0000ff" />;
    } else {
      list = (
        <View>
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
              return <MentorItem item={item} />;
            }}
            keyExtractor={(item) => item.id}
          />
        </View>
      );
    }

    return list;
  }

  useEffect(() => {}, []);

  useEffect(() => {
    return () => null;
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
      {createList()}
      <SafeAreaView style={styles.container} />
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
