import React from 'react';
import {COLORS} from '../../src/constants/COLORS';
import HomeIconSolid from 'react-native-heroicons/solid/HomeIcon';
import HomeIconOutline from 'react-native-heroicons/outline/HomeIcon';

const HomeScreenIcon = ({focused}: {focused: boolean}) => {
  return focused ? (
    <HomeIconSolid size={25} color={COLORS.dark} stroke={COLORS.dark} />
  ) : (
    <HomeIconOutline size={25} color={COLORS.dark} />
  );
};

export default HomeScreenIcon;
