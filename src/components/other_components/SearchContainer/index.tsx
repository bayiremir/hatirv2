import {TextInput, View} from 'react-native';
import React, {useState} from 'react';
import {styles} from './styles';
import {MagnifyingGlassIcon as MagnifyingGlassIconOutline} from 'react-native-heroicons/outline';

const SearchContainer = () => {
  const [searchText, setSearchText] = useState('');

  return (
    <View style={styles.background}>
      <View style={styles.searchBarContainer}>
        <MagnifyingGlassIconOutline size={20} color="black" />
        <TextInput
          style={styles.searchBar}
          placeholder="Search for restaurants, dishes, etc."
          placeholderTextColor="gray"
          value={searchText}
          onChangeText={text => setSearchText(text)}
        />
      </View>
    </View>
  );
};

export default SearchContainer;
