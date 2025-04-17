import {StyleSheet} from 'react-native';
import {Fonts} from '../../../../interfaces/fonts.enum';
import {COLORS} from '../../../../constants/COLORS';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    margin: 20,
  },
  icon: {
    width: 100,
    height: 100,
    alignSelf: 'center',
    marginBottom: 20,
  },
  header: {
    fontSize: 16,
    fontFamily: Fonts.Bold,
    marginVertical: 10,
    color: 'black',
    textAlign: 'center',
  },
  description: {
    fontSize: 14,
    fontFamily: Fonts.Regular,
    textAlign: 'center',
    color: 'black',
    marginBottom: 20,
  },
  button: {
    backgroundColor: COLORS.tertiary,
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontFamily: Fonts.Bold,
  },
});
