import {useSelector} from 'react-redux';
import {COLORS} from '../constants/COLORS';
import {userSliceInitialStateType} from '../interface/userslice.interface';

export const useTheme = () => {
  const {theme} = useSelector(
    (state: {userSlice: userSliceInitialStateType}) => state.userSlice,
  );

  if (theme === 'dark') {
    return {
      cardTextColor: 'white',
      textColor: 'white',
      backgroundColor: COLORS.darkBackground,
      headerColor: COLORS.darkHeader,
      cardColor: COLORS.cardDarkColor,
      theme: theme,
      linearGradient: ['#00589E', '#6DA2CC'],
      writerCardColor: COLORS.writerCardDarkColor,
    };
  } else {
    return {
      cardTextColor: 'white',
      textColor: 'black',
      backgroundColor: COLORS.lightBackground,
      headerColor: COLORS.lightHeader,
      cardColor: COLORS.cardLightColor,
      theme: theme,
      linearGradient: ['#e8c8ad', '#6DA2CC'],
      writerCardColor: COLORS.writerCardLightColor,
    };
  }
};
