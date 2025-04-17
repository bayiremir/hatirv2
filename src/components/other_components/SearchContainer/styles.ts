import {StyleSheet} from 'react-native';
import {COLORS} from '../../../constants/COLORS';

export const styles = StyleSheet.create({
  background: {
    alignItems: 'center',
    flexDirection: 'row',
    paddingHorizontal: 20,
  },
  searchBarContainer: {
    flex: 1,
    flexDirection: 'row',
    padding: 8,
    borderRadius: 20,
    backgroundColor: COLORS.background,
  },
  searchBar: {
    flex: 1,
    paddingLeft: 10,
    color: '#000',
    fontSize: 16,
  },
});
