import {Dimensions, StyleSheet} from 'react-native';
import {COLORS} from '../../../constants/COLORS';
import {Fonts} from '../../../interfaces/fonts.enum';

export const styles = StyleSheet.create({
  container: {
    width: Dimensions.get('window').width,
    backgroundColor: COLORS.dark,
    alignItems: 'center',
    paddingVertical: 20,
  },
  title: {
    fontSize: 16,
    color: COLORS.white,
    fontFamily: Fonts.Regular,
  },
});
