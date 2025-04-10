import {StyleSheet} from 'react-native';
import {COLORS} from '../../../constants/COLORS';
import {Fonts} from '../../../interfaces/fonts.enum';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: COLORS.white,
    marginTop: 16,
    borderRadius: 16,
    padding: 16,
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
    marginVertical: 8,
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
  topic_rating_topic_container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'rgba(52, 78, 65, 0.3)',
    borderRadius: 5,
    padding: 4,
    marginRight: 8,
  },
  topic_rating_topic: {
    fontSize: 10,
    fontFamily: Fonts.Regular,
    color: COLORS.dark,
  },
  topic_rating_score: {
    fontSize: 12,
    fontFamily: Fonts.ExtraBold,
    color: COLORS.dark,
  },
  review_number: {
    fontSize: 10,
    fontFamily: Fonts.Regular,
    color: COLORS.dark,
  },
});
