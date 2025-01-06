import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {ListItem, SearchBar} from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
const Search = () => {
  return (
    <View style={styles.container}>
      <SearchBar
        placeholder="Search"
        lightTheme
        round
        autoCorrect={false}
        searchIcon={null}
        containerStyle={styles.searchBarContainer}
        inputContainerStyle={styles.inputContainer}
      />
    </View>
  );
};

export default Search;

const styles = StyleSheet.create({
  container: {
    marginTop: 16,
  },
  searchBarContainer: {
    backgroundColor: 'transparent',
    borderWidth: 0,
    padding: 0,
    borderColor: '#fff',
  },
  inputContainer: {
    backgroundColor: '#f1f1f1',
    borderWidth: 0,
    paddingHorizontal: 10,
  },
});
