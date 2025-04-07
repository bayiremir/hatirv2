import {TextInput, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {styles} from './styles';
import {
  MagnifyingGlassIcon as MagnifyingGlassIconOutline,
  BellIcon as BellIconOutline,
} from 'react-native-heroicons/outline';

const SearchContainer = () => {
  const insets = useSafeAreaInsets();
  const statusBarHeight = insets.top;
  const [searchText, setSearchText] = useState('');

  return (
    <View style={[styles.background, {paddingTop: statusBarHeight}]}>
      <View style={styles.searchBarContainer}>
        <MagnifyingGlassIconOutline size={20} color="#B0B0B0" />
        <TextInput
          style={styles.searchBar}
          placeholder="Search"
          placeholderTextColor="#B0B0B0"
          value={searchText}
          onChangeText={text => setSearchText(text)}
        />
      </View>
      <TouchableOpacity onPress={() => console.log('Notification pressed')}>
        <BellIconOutline size={28} color="white" style={{marginLeft: 16}} />
      </TouchableOpacity>
    </View>
  );
};

export default SearchContainer;
