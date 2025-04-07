import React from 'react';
import {COLORS} from '../../src/constants/COLORS';
import {ShoppingBagIcon as ShoppingBagIconOutline} from 'react-native-heroicons/outline';
import {ShoppingBagIcon as ShoppingBagIconSolid} from 'react-native-heroicons/solid';

const BasketScreenIcon = ({focused}: {focused: boolean}) => {
  return focused ? (
    <ShoppingBagIconSolid size={25} color={COLORS.white} stroke={COLORS.dark} />
  ) : (
    <ShoppingBagIconOutline size={25} color={'white'} />
  );
};

export default BasketScreenIcon;
