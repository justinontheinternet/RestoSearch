import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import { EvilIcons } from '@expo/vector-icons';

const SearchBar = ({ term, onTermChange, onTermSubmit }) => {
  return (
    <View style={styles.backgroundStyle} >
      <EvilIcons name='search' style={styles.iconStyle} />
      <TextInput
        autoCapitalize='none'
        autoCorrect={false}
        onEndEditing={() => onTermSubmit()} // onEndEditing={onTermSubmit}
        placeholder='Search'
        value={term}
        onChangeText={newTerm => onTermChange(newTerm)}
        style={styles.inputStyle}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  backgroundStyle: {
    backgroundColor: '#F0EEEE'
    ,height: 50
    ,borderRadius: 5
    ,marginVertical: 10
    ,marginHorizontal: 15
    ,flexDirection: 'row'
  }
  ,iconStyle: {
    fontSize: 50
    ,alignSelf: 'center'
  }
  ,inputStyle: {
    flex: 1
    ,fontSize: 18
  }
});

export default SearchBar;
