import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {ChevronLeftIcon as ChevronLeftIconOutline} from 'react-native-heroicons/outline';
import {useNavigation} from '@react-navigation/native';
import {Fonts} from '../../../interfaces/fonts.enum';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {RootNavigationType} from '../../../interfaces/navigation.interface';
import {COLORS} from '../../../constants/COLORS';
import {MagnifyingGlassIcon as MagnifyingGlassIconSolid} from 'react-native-heroicons/solid';
const GoBackTabBar = ({
  title,
  color,
  search,
}: {
  color: string;
  title: string;
  search: boolean;
}) => {
  const insets = useSafeAreaInsets();
  const statusBarHeight = insets.top;
  const navigation = useNavigation<RootNavigationType>();
  return (
    <View style={[styles.container, {paddingTop: statusBarHeight}]}>
      <View style={styles.rowcontainer}>
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
        <Text style={[styles.title, {margin: 'auto'}]}>{title}</Text>
      </View>
      {search && (
        <View style={styles.searchContainer}>
          <MagnifyingGlassIconSolid
            color={COLORS.dark}
            size={24}
            strokeWidth={2}
            style={{marginLeft: 10}}
          />
          <TextInput
            placeholder="Sokağın veya posta kodunu arat"
            placeholderTextColor={'#A9A9A9'}
            style={styles.input}
          />
        </View>
      )}
    </View>
  );
};

export default GoBackTabBar;

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.dark,
    paddingHorizontal: 20,
    paddingVertical: 20,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  rowcontainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    paddingBottom: 10,
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
    width: 120,
    height: 100,
  },
  title: {
    fontSize: 16,
    color: COLORS.white,
    fontFamily: Fonts.Regular,
  },
  searchContainer: {
    width: '100%',
    backgroundColor: COLORS.white,
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 10,
    padding: 5,
  },
  input: {
    height: 40,
    borderRadius: 10,
    paddingHorizontal: 10,
    backgroundColor: COLORS.white,
    color: COLORS.black,
    fontFamily: Fonts.Regular,
    fontSize: 14,
  },
});
