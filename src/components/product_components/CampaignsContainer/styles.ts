import {StyleSheet} from 'react-native';
import {Fonts} from '../../../interfaces/fonts.enum';

export const styles = StyleSheet.create({
  container: {},
  header: {
    fontSize: 20,
    fontFamily: Fonts.Bold,
    color: 'black',
    marginVertical: 10,
    marginHorizontal: 10,
  },
  image: {
    width: 200,
    height: 100,
    borderRadius: 10,
    marginHorizontal: 10,
  },
});
