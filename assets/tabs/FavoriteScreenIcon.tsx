import React from 'react';
import {COLORS} from '../../src/constants/COLORS';
import {HeartIcon as HeartIconOutline} from 'react-native-heroicons/outline';
import {HeartIcon as HeartIconSolid} from 'react-native-heroicons/solid';

const FavoriteScreenIcon = ({focused}: {focused: boolean}) => {
  return focused ? (
    <HeartIconSolid size={25} color={COLORS.white} stroke={COLORS.dark} />
  ) : (
    <HeartIconOutline size={25} color={'white'} />
  );
};

export default FavoriteScreenIcon;
