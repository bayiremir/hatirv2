import {StyleSheet} from 'react-native';
import {COLORS} from '../../../constants/COLORS';
import {Fonts} from '../../../interfaces/fonts.enum';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
  addressContainer: {
    flex: 1,
    alignItems: 'center',
  },
  noAddressContainer: {
    flex: 1,
    alignItems: 'center',
  },
  addressText: {
    fontSize: 16,
    color: COLORS.dark,
    fontFamily: Fonts.Regular,
  },
  noAddressText: {
    fontSize: 16,
    color: COLORS.dark,
    fontFamily: Fonts.Regular,
  },
  addButton: {
    backgroundColor: COLORS.dark,
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 50,
    marginTop: 20,
    marginHorizontal: 20,
  },
  addButtonText: {
    color: 'white',
    fontSize: 16,
    fontFamily: Fonts.Regular,
  },
  addAddressContainer: {
    backgroundColor: COLORS.white,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
});
