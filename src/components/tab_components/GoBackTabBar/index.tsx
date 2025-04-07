import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {ChevronLeftIcon as ChevronLeftIconOutline} from 'react-native-heroicons/outline';
import {useNavigation} from '@react-navigation/native';
import {Fonts} from '../../../interfaces/fonts.enum';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {RootNavigationType} from '../../../interfaces/navigation.interface';

const GoBackTabBar = ({color, center}: {color: string; center: boolean}) => {
  const insets = useSafeAreaInsets();
  const statusBarHeight = insets.top;
  const navigation = useNavigation<RootNavigationType>();
  return (
    <View style={[styles.container, {paddingTop: statusBarHeight}]}>
      <TouchableOpacity
        style={styles.iconContainer}
        onPress={() => {
          navigation.goBack();
        }}>
        <ChevronLeftIconOutline
          color={color}
          size={24}
          style={styles.backicon}
        />
        <Text style={[styles.backtext, {color: color}]}>Geri</Text>
      </TouchableOpacity>
      <Image
        source={require('../../../../assets/appicon/greenwithbackgroundlogo.png')}
        style={[styles.logo, {margin: center ? 'auto' : 0}]}
      />
    </View>
  );
};

export default GoBackTabBar;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  iconContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  backicon: {
    position: 'absolute',
    zIndex: 1,
  },
  backtext: {
    position: 'absolute',
    color: 'white',
    fontSize: 16,
    fontFamily: Fonts.Regular,
    left: 25,
    zIndex: 1,
  },
  logo: {
    width: 200,
    height: 100,
  },
});
