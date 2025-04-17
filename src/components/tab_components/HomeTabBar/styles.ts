import {Dimensions, StyleSheet} from 'react-native';
import {COLORS} from '../../../constants/COLORS';
import {Fonts} from '../../../interfaces/fonts.enum';

export const styles = StyleSheet.create({
  container: {
    width: Dimensions.get('window').width,
    backgroundColor: COLORS.dark,
    alignItems: 'center',
    paddingVertical: 20,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: Dimensions.get('window').width - 40,
  },
  header: {
    fontSize: 16,
    color: COLORS.white,
    fontFamily: Fonts.Regular,
    marginVertical: 10,
  },
});
