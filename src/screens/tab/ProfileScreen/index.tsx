import {ScrollView, Text, View} from 'react-native';
import React from 'react';
import {styles} from './styles';
import {useGetProfileQuery} from '../../../redux/services/mobileApi';
import Lottie from '../../../components/other_components/Lottie';
import {useSelector} from 'react-redux';
import {userSliceInitialStateType} from '../../../interfaces/user.interface';
import LogInComponent from '../../../components/screen_components/auth/LogInComponent';
import {useTranslation} from 'react-i18next';
import TabBar from '../../../components/tab_components/TabBar';
import ProfileFieldComponents from '../../../components/screen_components/profile/ProfileFieldComponents';
import {useNavigation} from '@react-navigation/native';
import {RootNavigationType} from '../../../interfaces/navigation.interface';

const ProfileScreen = () => {
  const {data: profile, isLoading: profileLoading} = useGetProfileQuery();
  const {t} = useTranslation();
  const navigation = useNavigation<RootNavigationType>();
  const user = useSelector(
    (state: {userSlice: userSliceInitialStateType}) => state.userSlice,
  );
  return (
    <View style={styles.container}>
      <TabBar title={t('profile')} />
      {!user.authLogin ? (
        <LogInComponent
          header={t('headerprofile')}
          description={t('descriptionprofile')}
        />
      ) : profileLoading ? (
        <Lottie />
      ) : (
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.contentContainer}>
          <View style={styles.profileContainer}>
            <ProfileFieldComponents
              image
              uri="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png"
              text={profile?.name}
            />
            <View style={styles.divider} />
            <ProfileFieldComponents text={profile?.email} />
            <View style={styles.divider} />
            <ProfileFieldComponents text={profile?.phoneNumber} />
          </View>
          <View style={styles.profileContainer}>
            <ProfileFieldComponents
              text={t('address')}
              onPress={() => {
                navigation.navigate('AddressScreen', {profile});
              }}
              icon={'https://cdn-icons-png.flaticon.com/512/3367/3367586.png'}
            />
            <View style={styles.divider} />
            <ProfileFieldComponents
              text={t('favorites')}
              onPress={() => {
                navigation.navigate('FavoriteScreen', {});
              }}
              icon={'https://cdn-icons-png.flaticon.com/512/306/306795.png'}
            />
            <View style={styles.divider} />
            <ProfileFieldComponents
              text={t('pastorders')}
              icon={'https://cdn-icons-png.flaticon.com/512/6951/6951860.png'}
            />
            <View style={styles.divider} />
            <ProfileFieldComponents
              text={t('paymentmethods')}
              icon={'https://cdn-icons-png.flaticon.com/512/1198/1198299.png'}
            />
            <View style={styles.divider} />
            <ProfileFieldComponents
              text={t('billinfo')}
              icon={'https://cdn-icons-png.flaticon.com/512/1052/1052856.png'}
            />
            <View style={styles.divider} />
            <ProfileFieldComponents
              text={t('communicationpreferences')}
              icon={'https://cdn-icons-png.flaticon.com/512/1156/1156949.png'}
            />
            <View style={styles.divider} />
            <ProfileFieldComponents
              text={t('accountsettings')}
              icon={'https://cdn-icons-png.flaticon.com/512/473/473622.png'}
            />
            <View style={styles.divider} />
            <ProfileFieldComponents
              text={t('help')}
              icon={'https://cdn-icons-png.flaticon.com/512/5726/5726775.png'}
            />
            <View style={styles.divider} />
            <ProfileFieldComponents
              text={t('logout')}
              icon={'https://cdn-icons-png.flaticon.com/512/5692/5692094.png'}
            />
          </View>
          <Text style={styles.header}>{t('language')}</Text>
          <View style={styles.languageContainer}>
            <ProfileFieldComponents
              text={user.language === 'tr' ? 'Türkçe' : 'English'}
              icon={'https://cdn-icons-png.flaticon.com/512/5332/5332986.png'}
            />
          </View>
          <Text style={styles.header}>{t('version')}</Text>
          <View style={styles.languageContainer}>
            <ProfileFieldComponents text={'1.0.0'} />
          </View>
        </ScrollView>
      )}
    </View>
  );
};

export default ProfileScreen;
