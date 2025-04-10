import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {ChevronLeftIcon as ChevronLeftIconOutline} from 'react-native-heroicons/outline';
import {useNavigation} from '@react-navigation/native';
import {Fonts} from '../../../interfaces/fonts.enum';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {RootNavigationType} from '../../../interfaces/navigation.interface';
import {GiftIcon as GiftIconSolid} from 'react-native-heroicons/solid';

const GoBackCartTabBar = ({color, header}: {color: string; header: string}) => {
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
        <ChevronLeftIconOutline color={color} size={24} />
        <Text style={[styles.backtext, {color: color}]}>Geri</Text>
      </TouchableOpacity>
      <Text style={[styles.header, {color: color}]}>{header}</Text>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('BasketScreen', {});
        }}>
        <GiftIconSolid color={color} size={24} />
      </TouchableOpacity>
    </View>
  );
};

export default GoBackCartTabBar;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 24,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  iconContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  backtext: {
    position: 'absolute',
    left: 25,
    fontFamily: Fonts.Regular,
    fontSize: 16,
  },
  logo: {
    width: 120,
    height: 100,
  },
  header: {
    fontFamily: Fonts.Bold,
    fontSize: 12,
    color: 'white',
  },
});
