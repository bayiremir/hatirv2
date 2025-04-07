import {StyleSheet} from 'react-native';
import {Fonts} from '../../../interfaces/fonts.enum';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    fontSize: 16,
    color: 'white',
    fontFamily: Fonts.Bold,
    marginVertical: 10,
    paddingHorizontal: 10,
  },
  listContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    paddingHorizontal: 10,
  },
  productContainer: {
    width: '48%',
    marginBottom: 10,
  },
  productImage: {
    width: '100%',
    height: 100,
    borderRadius: 10,
  },
  productName: {
    marginTop: 5,
    fontSize: 14,
    color: 'white',
    fontFamily: Fonts.Regular,
    textAlign: 'center',
  },
});
