import {Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {styles} from './styles';
import SearchContainer from '../../other_components/SearchContainer';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

const HomeTabBar = () => {
  const insets = useSafeAreaInsets();
  const statusBarHeight = insets.top;
  return (
    <View style={[styles.container, {paddingTop: statusBarHeight}]}>
      <TouchableOpacity style={styles.headerContainer}>
        <Text style={[styles.header, {marginRight: 8}]}>Deliver to</Text>
        <Text style={[styles.header, {textDecorationLine: 'underline'}]}>
          Zümrütevler,Sagün Sokak, 38, Kat 2
        </Text>
      </TouchableOpacity>
      <SearchContainer />
    </View>
  );
};

export default HomeTabBar;
