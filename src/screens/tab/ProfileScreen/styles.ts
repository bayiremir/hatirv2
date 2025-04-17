import {StyleSheet} from 'react-native';
import {COLORS} from '../../../constants/COLORS';
import {Fonts} from '../../../interfaces/fonts.enum';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
  contentContainer: {
    paddingBottom: 20,
  },
  profileContainer: {
    backgroundColor: 'white',
    marginTop: 20,
  },
  languageContainer: {
    backgroundColor: 'white',
  },
  divider: {
    width: '100%',
    height: 1,
    backgroundColor: '#E0E0E0',
  },
  header: {
    fontSize: 16,
    fontFamily: Fonts.Regular,
    color: COLORS.dark,
    marginVertical: 10,
    marginHorizontal: 10,
  },
});
