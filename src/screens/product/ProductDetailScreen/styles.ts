import {StyleSheet} from 'react-native';
import {COLORS} from '../../../constants/COLORS';
import {Fonts} from '../../../interfaces/fonts.enum';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.dark,
  },
  title: {
    fontSize: 24,
    color: COLORS.white,
    fontFamily: Fonts.Bold,
    marginVertical: 10,
    paddingHorizontal: 10,
  },
});
