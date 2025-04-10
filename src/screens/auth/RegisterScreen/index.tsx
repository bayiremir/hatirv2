import React, {useState} from 'react';
import {
  View,
  TextInput,
  TouchableOpacity,
  Text,
  KeyboardAvoidingView,
  ScrollView,
} from 'react-native';
import {getAuth} from '@react-native-firebase/auth';
import {useNavigation} from '@react-navigation/native';
import {useDispatch} from 'react-redux';
import {setUser, setAuthLogin} from '../../../redux/slices/userSlice';
import GoBackTabBar from '../../../components/tab_components/GoBackTabBar';
import Toast from 'react-native-toast-message';
import {styles} from './styles';
import {RootNavigationType} from '../../../interfaces/navigation.interface';
import {useRegisterUserMutation} from '../../../redux/services/mobileApi';
import {
  LockClosedIcon as LockClosedIconOutline,
  AtSymbolIcon as AtSymbolIconOutline,
  UserIcon as UserIconOutline,
  PhoneIcon as PhoneIconOutline,
} from 'react-native-heroicons/outline';

const RegisterScreen = () => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const navigation = useNavigation<RootNavigationType>();
  const dispatch = useDispatch();
  const [registerUser] = useRegisterUserMutation();
  const handleRegister = async () => {
    try {
      const userData = {
        name: fullName,
        email,
        password,
        phoneNumber,
      };

      const result = await registerUser(userData).unwrap();
      await getAuth().signInWithEmailAndPassword(email, password);

      dispatch(setUser(result));
      dispatch(setAuthLogin(true));

      navigation.reset({
        index: 0,
        routes: [{name: 'Main'}],
      });
      Toast.show({
        type: 'success',
        text1: 'Başarılı',
        text2: 'Kayıt başarılı, hoş geldiniz!',
        topOffset: 60,
      });
    } catch (error) {
      Toast.show({
        type: 'error',
        text1: 'Kayıt Başarısız',
        topOffset: 60,
      });
    }
  };
  return (
    <KeyboardAvoidingView style={styles.container}>
      <GoBackTabBar color="white" center={true} />
      <ScrollView
        style={styles.secondcontainer}
        contentContainerStyle={styles.contentContainer}>
        <View style={styles.inputContainer}>
          <Text style={styles.text}>Kayıt Ol</Text>
          <View style={styles.rowcontainer}>
            <UserIconOutline color="white" size={24} />
            <TextInput
              style={styles.input}
              placeholder="Ad Soyad"
              placeholderTextColor={'white'}
              onChangeText={setFullName}
              value={fullName}
            />
          </View>
          <View style={styles.divider} />
          <View style={styles.rowcontainer}>
            <AtSymbolIconOutline color="white" size={24} />
            <TextInput
              style={styles.input}
              placeholder="E-mail"
              placeholderTextColor={'white'}
              onChangeText={setEmail}
              value={email}
            />
          </View>
          <View style={styles.divider} />
          <View style={styles.rowcontainer}>
            <PhoneIconOutline color="white" size={24} />
            <TextInput
              style={styles.input}
              placeholder="Telefon Numarası"
              placeholderTextColor={'white'}
              onChangeText={setPhoneNumber}
              value={phoneNumber}
              keyboardType="phone-pad"
            />
          </View>
          <View style={styles.divider} />
          <View style={styles.rowcontainer}>
            <LockClosedIconOutline color="white" size={24} />
            <TextInput
              style={styles.input}
              placeholder="Şifre"
              placeholderTextColor={'white'}
              secureTextEntry={true}
              onChangeText={setPassword}
              value={password}
            />
          </View>
          <View style={styles.divider} />
          <TouchableOpacity style={styles.button} onPress={handleRegister}>
            <Text style={styles.buttonText}>Kayıt Ol</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.registerContainer}>
          <Text style={styles.registerTextSmall}>Zaten hesabınız var mı?</Text>
          <TouchableOpacity
            onPress={() => navigation.navigate('LoginScreen', {})}>
            <Text style={styles.registerText}>Giriş Yap</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default RegisterScreen;
