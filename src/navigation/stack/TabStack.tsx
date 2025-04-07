import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import FavoriteScreen from '../../screens/tab/FavoriteScreen';
import HomeStack from './HomeStack';
import {useTranslation} from 'react-i18next';
import HomeScreenIcon from '../../../assets/tabs/HomeScreenIcon';
import {COLORS} from '../../constants/COLORS';
import {Fonts} from '../../interfaces/fonts.enum';
import ProfileScreenIcon from '../../../assets/tabs/ProfileScreenIcon';
import FavoriteScreenIcon from '../../../assets/tabs/FavoriteScreenIcon';
import BasketScreenIcon from '../../../assets/tabs/BasketScreenIcon';
import ProfileStack from './ProfileStack';
import BasketStack from './BasketStack';

const Tab = createBottomTabNavigator();

const TabStack = () => {
  const {t} = useTranslation();
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: COLORS.white,
        tabBarInactiveTintColor: COLORS.white,
        tabBarLabelStyle: {
          fontSize: 12,
          fontFamily: Fonts.Bold,
          marginBottom: 5,
        },
        tabBarLabelPosition: 'below-icon',
        tabBarStyle: {
          backgroundColor: COLORS.accent,
          borderTopWidth: 0,
        },
      }}>
      <Tab.Screen
        component={HomeStack}
        name="HomeStack"
        options={{
          tabBarIcon: HomeScreenIcon,
          tabBarLabel: t('home'),
        }}
      />
      <Tab.Screen
        name="BasketStack"
        component={BasketStack}
        options={{
          tabBarIcon: BasketScreenIcon,
          tabBarLabel: t('basket'),
        }}
      />
      <Tab.Screen
        name="FavoriteScreen"
        component={FavoriteScreen}
        options={{
          tabBarIcon: FavoriteScreenIcon,
          tabBarLabel: t('favorite'),
        }}
      />
      <Tab.Screen
        name="ProfileStack"
        component={ProfileStack}
        options={{
          tabBarIcon: ProfileScreenIcon,
          tabBarLabel: t('profile'),
        }}
      />
    </Tab.Navigator>
  );
};

export default TabStack;
