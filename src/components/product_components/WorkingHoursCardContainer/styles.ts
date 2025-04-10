import {StyleSheet} from 'react-native';
import {Fonts} from '../../../interfaces/fonts.enum';

export const styles = StyleSheet.create({
  rowcontainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 16,
    justifyContent: 'space-between',
  },
  workingTitle: {
    fontSize: 12,
    fontFamily: Fonts.Light,
  },
  workingValue: {
    fontSize: 14,
    fontFamily: Fonts.Regular,
  },
});
