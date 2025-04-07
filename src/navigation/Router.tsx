import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import TabStack from './stack/TabStack';
import {createStackNavigator} from '@react-navigation/stack';
import LoginScreen from '../screens/auth/LoginScreen';
import RegisterScreen from '../screens/auth/RegisterScreen';
import ProductDetailScreen from '../screens/product/ProductDetailScreen';

const RootStack = createStackNavigator();

const Router = () => {
  return (
    <NavigationContainer>
      <RootStack.Navigator screenOptions={{headerShown: false}}>
        {/* Main Tab Navigator */}
        <RootStack.Screen name="Main" component={TabStack} />

        {/* Auth Screens */}
        <RootStack.Screen name="LoginScreen" component={LoginScreen} />
        <RootStack.Screen name="RegisterScreen" component={RegisterScreen} />
        <RootStack.Screen
          name="ProductDetailScreen"
          component={ProductDetailScreen}
        />
      </RootStack.Navigator>
    </NavigationContainer>
  );
};

export default Router;
