import {StyleSheet} from 'react-native';
import {COLORS} from '../../../constants/COLORS';
import {Fonts} from '../../../interfaces/fonts.enum';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: COLORS.macizWhite,
  },
  image: {
    width: 200,
    height: 200,
    alignSelf: 'center',
    borderRadius: 100,
  },
  title: {
    fontSize: 24,
    textAlign: 'center',
    fontFamily: Fonts.Regular,
    marginVertical: 20,
  },
  languageContainer: {
    flexGrow: 1,
    marginVertical: 20,
  },
  languageItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    marginVertical: 5,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#ddd',
  },
  selectedLanguage: {
    backgroundColor: '#e0f7fa',
    borderColor: COLORS.dark,
  },
  flag: {
    width: 30,
    height: 20,
    marginRight: 10,
  },
  languageLabel: {
    fontSize: 18,
    fontFamily: Fonts.Medium,
  },
  continueButton: {
    backgroundColor: COLORS.dark,
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
    marginVertical: 30,
  },
  continueButtonText: {
    color: '#fff',
    fontSize: 18,
    fontFamily: Fonts.Medium,
  },
});
