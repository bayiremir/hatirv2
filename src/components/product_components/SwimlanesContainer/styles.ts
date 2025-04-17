import {StyleSheet} from 'react-native';
import {Fonts} from '../../../interfaces/fonts.enum';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  swimlaneContainer: {
    width: 100,
    marginBottom: 10,
    marginRight: 10,
    alignItems: 'center',
  },
  header: {
    width: 100,
    fontFamily: Fonts.Regular,
    fontSize: 12,
    textAlign: 'center',
    color: 'black',
    marginTop: 10,
  },
  swimlane: {
    width: 80,
    height: 80,
    marginTop: 20,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(52, 78, 65, 0.1)',
  },
  image: {
    width: 50,
    height: 50,
  },
});
