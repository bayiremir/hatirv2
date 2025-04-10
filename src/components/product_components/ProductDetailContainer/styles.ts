import {StyleSheet} from 'react-native';
import {COLORS} from '../../../constants/COLORS';
import {Fonts} from '../../../interfaces/fonts.enum';

export const styles = StyleSheet.create({
  detailContainer: {
    flex: 1,
  },
  container: {
    backgroundColor: COLORS.white,
    marginVertical: 16,
    borderRadius: 16,
    padding: 16,
    marginHorizontal: 20,
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 16,
    marginRight: 16,
  },
  rowcontainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  second_topic_rating_topic_container: {
    alignItems: 'center',
  },
  header: {
    fontSize: 12,
    fontFamily: Fonts.Bold,
  },
  address: {
    fontSize: 10,
    fontFamily: Fonts.Light,
  },
  divider: {
    flex: 1,
    height: 20,
    backgroundColor: '#393E46',
  },
});
