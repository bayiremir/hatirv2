import {Text, View} from 'react-native';
import React from 'react';
import {styles} from './styles';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

const TabBar = ({title}: {title: string}) => {
  const insets = useSafeAreaInsets();
  const statusBarHeight = insets.top;
  return (
    <View style={[styles.container, {paddingTop: statusBarHeight}]}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};

export default TabBar;
