import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RouteProp} from '@react-navigation/native';

export type RootStackParamList = {
  navigate(arg0: string, arg1: {}): unknown;
  HomeStack: {};
  Main: {};
  TabStack: {};
  BasketStack: {};
  HomeScreen: {};
  RegisterScreen: {};
  ForgetPasswordScreen: {};
  LoginScreen: {};
  ProfileScreen: {};
  ProductDetailScreen: {
    code: string;
    name: string;
  };
  BasketScreen: {};
  FavoriteScreen: {};
  AddressScreen: {};
  AddAddressScreen: {};
};

export type RootNavigationType = NativeStackNavigationProp<RootStackParamList>;

export type RootRouteProp<T extends keyof RootStackParamList> = RouteProp<
  RootStackParamList,
  T
>;
