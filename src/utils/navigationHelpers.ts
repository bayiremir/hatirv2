// utils/navigationHelpers.ts
import {
  RouteProp,
  getFocusedRouteNameFromRoute,
} from '@react-navigation/native';

export const hiddenTabBarRoutes = ['AddressScreen', 'AddAddressScreen'];

export const getTabBarDisplay = (
  route: RouteProp<Record<string, object | undefined>, string>,
) => {
  const routeName = getFocusedRouteNameFromRoute(route) ?? '';
  return hiddenTabBarRoutes.includes(routeName) ? 'none' : 'flex';
};
