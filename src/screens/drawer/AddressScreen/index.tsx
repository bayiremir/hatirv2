import {Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import GoBackTabBar from '../../../components/tab_components/GoBackTabBar';
import {useTranslation} from 'react-i18next';
import {styles} from './styles';
import {useNavigation, useRoute} from '@react-navigation/native';
import {BaseUserType} from '../../../interfaces/user.interface';
import {RootNavigationType} from '../../../interfaces/navigation.interface';

const AddressScreen = () => {
  const {t} = useTranslation();
  const route = useRoute();
  const {profile} = route.params as {profile: BaseUserType};
  const navigation = useNavigation<RootNavigationType>();
  return (
    <View style={styles.container}>
      <GoBackTabBar color="white" title={t('address')} />
      {profile.address ? (
        <View style={styles.addressContainer}>
          <Text style={styles.addressText}>{profile.address}</Text>
        </View>
      ) : (
        <View style={styles.noAddressContainer}>
          <Text style={styles.noAddressText}>{t('noaddress')}</Text>
        </View>
      )}
      <View style={styles.addAddressContainer}>
        <TouchableOpacity
          style={styles.addButton}
          onPress={() => {
            navigation.navigate('AddAddressScreen', {
              profile: profile,
            });
          }}>
          <Text style={styles.addButtonText}>{t('addaddress')}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default AddressScreen;
