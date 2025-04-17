import React from 'react';
import {COLORS} from '../../src/constants/COLORS';
import {ShoppingBagIcon as ShoppingBagIconOutline} from 'react-native-heroicons/outline';
import {ShoppingBagIcon as ShoppingBagIconSolid} from 'react-native-heroicons/solid';

const BasketScreenIcon = ({focused}: {focused: boolean}) => {
  return focused ? (
    <ShoppingBagIconSolid size={25} color={COLORS.dark} stroke={COLORS.dark} />
  ) : (
    <ShoppingBagIconOutline size={25} color={COLORS.dark} />
  );
};

export default BasketScreenIcon;
