import {StyleSheet} from 'react-native';
import {Fonts} from '../../../interfaces/fonts.enum';
import {COLORS} from '../../../constants/COLORS';

export const styles = StyleSheet.create({
  scrollContainer: {
    paddingHorizontal: 12,
    paddingVertical: 8,
  },
  tab: {
    alignItems: 'center',
    marginHorizontal: 10,
  },
  tabText: {
    fontSize: 16,
    fontFamily: Fonts.Medium,
    color: '#999',
  },
  activeTabText: {
    color: '#222',
    fontFamily: Fonts.Bold,
  },
  underline: {
    marginTop: 4,
    height: 2,
    width: '100%',
    backgroundColor: COLORS.dark,
    borderRadius: 2,
  },
  activeTab: {
    borderRadius: 8,
  },
});
