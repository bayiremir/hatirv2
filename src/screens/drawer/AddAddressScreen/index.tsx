import {Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {styles} from './styles';
import GoBackTabBar from '../../../components/tab_components/GoBackTabBar';
import {useTranslation} from 'react-i18next';

const AddAddressScreen = () => {
  const {t} = useTranslation();
  return (
    <View style={styles.container}>
      <GoBackTabBar color="white" title={t('addadress')} search={true} />
      <View style={styles.addAddressContainer}>
        <TouchableOpacity style={styles.addButton} onPress={() => {}}>
          <Text style={styles.addButtonText}>{t('continue')}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default AddAddressScreen;
