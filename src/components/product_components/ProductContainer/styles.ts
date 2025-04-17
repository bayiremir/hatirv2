import {Dimensions, StyleSheet} from 'react-native';
import {Fonts} from '../../../interfaces/fonts.enum';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    fontSize: 16,
    color: 'black',
    fontFamily: Fonts.Bold,
    marginVertical: 10,
    paddingHorizontal: 10,
  },
  listContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingHorizontal: 10,
  },
  heartIconContainer: {
    position: 'absolute',
    top: 10,
    right: 10,
    backgroundColor: 'white',
    borderRadius: 50,
    padding: 5,
  },
  productContainer: {
    width: Dimensions.get('window').width / 2 - 60,
    marginRight: 10,
    marginBottom: 10,
  },
  productImage: {
    height: 200,
    borderRadius: 30,
    resizeMode: 'cover',
  },
  productName: {
    marginTop: 5,
    fontSize: 14,
    color: 'black',
    fontFamily: Fonts.Bold,
  },
  rating: {
    fontSize: 14,
    color: 'black',
    marginLeft: 5,
    fontFamily: Fonts.Light,
  },
});
