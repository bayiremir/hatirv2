import React from 'react';
import {COLORS} from '../../src/constants/COLORS';
import HomeIconSolid from 'react-native-heroicons/solid/HomeIcon';
import HomeIconOutline from 'react-native-heroicons/outline/HomeIcon';

const HomeScreenIcon = ({focused}: {focused: boolean}) => {
  return focused ? (
    <HomeIconSolid size={25} color={COLORS.white} stroke={COLORS.dark} />
  ) : (
    <HomeIconOutline size={25} color={'white'} />
  );
};

export default HomeScreenIcon;
