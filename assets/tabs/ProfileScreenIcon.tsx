import React from 'react';
import {COLORS} from '../../src/constants/COLORS';
import UserIconSolid from 'react-native-heroicons/solid/UserIcon';
import UserIconOutline from 'react-native-heroicons/outline/UserIcon';

const ProfileScreenIcon = ({focused}: {focused: boolean}) => {
  return focused ? (
    <UserIconSolid size={25} color={COLORS.dark} stroke={COLORS.dark} />
  ) : (
    <UserIconOutline size={25} color={COLORS.dark} />
  );
};

export default ProfileScreenIcon;
