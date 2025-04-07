import {SafeAreaView, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {styles} from './styles';
import {useGetProfileQuery} from '../../../redux/services/mobileApi';
import Lottie from '../../../components/other_components/Lottie';
import {useDispatch, useSelector} from 'react-redux';
import {setLogout} from '../../../redux/slices/userSlice';
import {userSliceInitialStateType} from '../../../interfaces/user.interface';
import LogInComponent from '../../../components/screen_components/auth/LogInComponent';
import {useTranslation} from 'react-i18next';

const ProfileScreen = () => {
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
          header={t('headerprofile')}
          description={t('descriptionprofile')}
        />
      ) : profileLoading ? (
        <Lottie />
      ) : (
        <SafeAreaView>
          <Text>{profile?.email}</Text>
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

export default ProfileScreen;
