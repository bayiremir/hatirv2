import React, {useState} from 'react';
import {
  Text,
  View,
  TextInput,
  TouchableOpacity,
  ScrollView,
  KeyboardAvoidingView,
} from 'react-native';
import {getAuth, signInWithEmailAndPassword} from '@react-native-firebase/auth';
import {useNavigation} from '@react-navigation/native';
import {
  LockClosedIcon as LockClosedIconOutline,
  AtSymbolIcon as AtSymbolIconOutline,
} from 'react-native-heroicons/outline';
import {styles} from './styles';
import {setAuthLogin, setUser} from '../../../redux/slices/userSlice';
import {useDispatch} from 'react-redux';
import Toast from 'react-native-toast-message';
import GoBackTabBar from '../../../components/tab_components/GoBackTabBar';
import {storage} from '../../../utils/MMKV';
import {RootNavigationType} from '../../../interfaces/navigation.interface';
import {useTranslation} from 'react-i18next';

const LoginScreen = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const {t} = useTranslation();
  const navigation = useNavigation<RootNavigationType>();
  const dispatch = useDispatch();
  const auth = getAuth();

  const handleLogin = async () => {
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        username,
        password,
      );
      const user = userCredential.user;

      const userData = {
        uid: user.uid,
        email: user.email,
        name: user.displayName || '',
        profilePicture: user.photoURL || '',
        lastLogin: new Date(),
        loginHistory: {
          ip: '',
          userAgent: 'React Native Mobile App',
          timestamp: new Date(),
        },
      };

      dispatch(setUser(userData));
      storage.set('authLogin', 'true');
      storage.set('user', JSON.stringify(userData));
      dispatch(setAuthLogin(true));

      navigation.reset({
        index: 0,
        routes: [{name: 'Main'}],
      });
      Toast.show({
        type: 'success',
        text1: 'Başarılı',
        text2: 'Giriş başarılı, hoş geldiniz!',
        topOffset: 60,
      });
    } catch (error: any) {
      if (error.code === 'auth/invalid-email') {
        Toast.show({
          type: 'error',
          text1: 'Hata',
          text2: 'Geçersiz e-mail adresi',
          topOffset: 60,
        });
      } else {
        Toast.show({
          type: 'error',
          text1: 'Hata',
          text2: 'Kullanıcı adı veya şifre hatalı',
          topOffset: 60,
        });
      }
    }
  };

  return (
    <KeyboardAvoidingView style={styles.container}>
      <GoBackTabBar color="white" title="" />
      <ScrollView
        style={styles.secondcontainer}
        contentContainerStyle={styles.scrollContainer}>
        <View style={styles.inputContainer}>
          <Text style={styles.text}>{t('login')}</Text>
          <View style={styles.rowcontainer}>
            <AtSymbolIconOutline color="black" size={24} />
            <TextInput
              style={styles.input}
              placeholder="E-mail"
              placeholderTextColor={'black'}
              onChangeText={setUsername}
              value={username}
            />
          </View>
          <View style={styles.divider} />
          <View style={styles.rowcontainer}>
            <LockClosedIconOutline color="black" size={24} />
            <TextInput
              style={[styles.input, {flex: 1}]}
              placeholder={t('password')}
              placeholderTextColor={'black'}
              secureTextEntry={true}
              onChangeText={setPassword}
              value={password}
            />
            <TouchableOpacity
              onPress={() => navigation.navigate('ForgetPasswordScreen', {})}
              style={{padding: 20}}>
              <Text style={styles.forgetPasswordText}>
                {t('forgetyorpassword')}?
              </Text>
            </TouchableOpacity>
          </View>
          <View style={styles.divider} />
          <TouchableOpacity style={styles.button} onPress={handleLogin}>
            <Text style={styles.buttonText}>{t('signin')}</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.registerContainer}>
          <Text style={styles.registerTextSmall}>{t('areyounew')}</Text>
          <TouchableOpacity
            onPress={() => navigation.navigate('RegisterScreen', {})}>
            <Text style={styles.registerText}>{t('signup')}</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default LoginScreen;
