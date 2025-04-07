import {SafeAreaView, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import LogInComponent from '../../../components/screen_components/auth/LogInComponent';
import {useDispatch, useSelector} from 'react-redux';
import {useGetProfileQuery} from '../../../redux/services/mobileApi';
import {userSliceInitialStateType} from '../../../interfaces/user.interface';
import {styles} from './styles';
import Lottie from '../../../components/other_components/Lottie';
import {setLogout} from '../../../redux/slices/userSlice';
import {useTranslation} from 'react-i18next';

const BasketScreen = () => {
  const {data: profile, isLoading: profileLoading} = useGetProfileQuery();
  const {t} = useTranslation();
  const dispatch = useDispatch<any>();
  const isLoggedIn = useSelector(
    (state: {userSlice: userSliceInitialStateType}) =>
      state.userSlice.authLogin,
  );
  return (
    <View style={styles.container}>
      {!isLoggedIn ? (
        <LogInComponent
          header={t('headerbasket')}
          description={t('descriptionbasket')}
        />
      ) : profileLoading ? (
        <Lottie />
      ) : (
        <SafeAreaView>
          <Text>{profile?.name}</Text>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              dispatch(setLogout());
            }}>
            <Text style={styles.buttonText}>Logout</Text>
          </TouchableOpacity>
        </SafeAreaView>
      )}
    </View>
  );
};

export default BasketScreen;
