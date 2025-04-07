import {StyleSheet} from 'react-native';
import {Fonts} from '../../../interfaces/fonts.enum';
import {COLORS} from '../../../constants/COLORS';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.dark,
  },
  secondcontainer: {
    flex: 1,
  },
  contentContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  rowcontainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  text: {
    color: '#fff',
    fontSize: 24,
    fontFamily: Fonts.Bold,
    marginBottom: 20,
  },
  textsmall: {
    color: '#fff',
    fontSize: 14,
    fontFamily: Fonts.Regular,
    marginTop: 20,
    marginBottom: 20,
    width: '80%',
    textAlign: 'center',
  },
  bigTitle: {
    color: '#EEEEEE',
    fontSize: 50,
    fontFamily: Fonts.Bold,
    bottom: 50,
  },
  inputContainer: {
    width: '80%',
  },
  input: {
    flex: 1,
    padding: 20,
    color: '#fff',
    fontFamily: Fonts.Regular,
  },
  button: {
    backgroundColor: COLORS.tertiary,
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 30,
  },
  buttonText: {
    fontFamily: Fonts.Bold,
    fontSize: 16,
    color: 'white',
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
    color: 'aqua',
    fontFamily: Fonts.Bold,
    fontSize: 14,
  },
  registerTextSmall: {
    color: '#EEEEEE',
    marginRight: 5,
    fontFamily: Fonts.Regular,
    fontSize: 14,
  },
  registerContainer: {
    flexDirection: 'row',
    marginTop: 50,
  },
  forgetPasswordText: {
    color: 'aqua',
    fontFamily: Fonts.Bold,
    fontSize: 14,
  },
});
