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
import {getTabBarDisplay} from '../../utils/navigationHelpers'; // ✅ import eklendi

const Tab = createBottomTabNavigator();

const TabStack = () => {
  const {t} = useTranslation();
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: COLORS.dark,
        tabBarInactiveTintColor: COLORS.dark,
        tabBarLabelStyle: {
          fontSize: 12,
          fontFamily: Fonts.Bold,
          marginBottom: 5,
        },
        tabBarLabelPosition: 'below-icon',
        tabBarStyle: {
          backgroundColor: '#f0f0f0',
          borderTopWidth: 0,
        },
      }}>
      <Tab.Screen
        name="HomeStack"
        component={HomeStack}
        options={({route}) => ({
          tabBarIcon: HomeScreenIcon,
          tabBarLabel: t('home'),
          tabBarStyle: {
            backgroundColor: '#f0f0f0',
            borderTopWidth: 0,
            display: getTabBarDisplay(route),
          },
        })}
      />
      <Tab.Screen
        name="BasketStack"
        component={BasketStack}
        options={({route}) => ({
          tabBarIcon: BasketScreenIcon,
          tabBarLabel: t('basket'),
          tabBarStyle: {
            backgroundColor: '#f0f0f0',
            borderTopWidth: 0,
            display: getTabBarDisplay(route),
          },
        })}
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
        options={({route}) => ({
          tabBarIcon: ProfileScreenIcon,
          tabBarLabel: t('profile'),
          tabBarStyle: {
            backgroundColor: '#f0f0f0',
            borderTopWidth: 0,
            display: getTabBarDisplay(route),
          },
        })}
      />
    </Tab.Navigator>
  );
};

export default TabStack;
