import {StyleSheet} from 'react-native';
import {COLORS} from '../../../constants/COLORS';
import {Fonts} from '../../../interfaces/fonts.enum';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
  secondcontainer: {
    flex: 1,
  },
  rowcontainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  text: {
    color: COLORS.black,
    fontSize: 24,
    fontFamily: Fonts.Bold,
    marginBottom: 20,
  },
  textsmall: {
    color: COLORS.white,
    fontSize: 14,
    fontFamily: Fonts.Regular,
    marginTop: 20,
    marginBottom: 20,
    width: '80%',
    textAlign: 'center',
  },
  bigTitle: {
    color: COLORS.black,
    fontSize: 50,
    fontFamily: Fonts.Bold,
    bottom: 50,
  },
  inputContainer: {
    width: '80%',
    height: 300,
  },
  input: {
    flex: 1,
    padding: 20,
    color: COLORS.black,
    fontFamily: Fonts.Regular,
  },
  button: {
    backgroundColor: COLORS.tertiary,
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 30,
    borderWidth: 0.2,
    borderColor: 'white',
  },
  buttonText: {
    fontFamily: Fonts.Bold,
    fontSize: 16,
    color: COLORS.white,
  },
  buttonlogo: {
    width: 100,
    height: 50,
    borderWidth: 1,
    borderColor: '#393E46',
    right: 80,
    marginRight: 20,
    borderRadius: 10,
    justifyContent: 'center',
    alignSelf: 'center',
    alignItems: 'center',
    opacity: 0.25,
  },
  iconLogo: {
    width: 30,
    height: 30,
    backgroundColor: 'white',
    borderRadius: 20,
    justifyContent: 'center',
  },
  divider: {
    height: 1,
    backgroundColor: '#707070',
  },
  scrollContainer: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  registerText: {
    color: COLORS.tertiary,
    fontFamily: Fonts.Bold,
    fontSize: 14,
  },
  registerTextSmall: {
    color: COLORS.black,
    marginRight: 5,
    fontFamily: Fonts.Regular,
    fontSize: 14,
  },
  registerContainer: {
    flexDirection: 'row',
    marginTop: 50,
  },
  forgetPasswordText: {
    color: COLORS.tertiary,
    fontFamily: Fonts.Bold,
    fontSize: 14,
  },
});
