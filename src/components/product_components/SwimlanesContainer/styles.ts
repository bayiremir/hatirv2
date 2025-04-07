import {StyleSheet} from 'react-native';
import {Fonts} from '../../../interfaces/fonts.enum';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    fontFamily: Fonts.Regular,
    fontSize: 12,
    textAlign: 'center',
    color: 'white',
  },
  swimlane: {
    width: 100,
    height: 50,
    marginVertical: 10,
    marginHorizontal: 10,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
