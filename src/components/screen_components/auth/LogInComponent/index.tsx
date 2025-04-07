import {Image, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {styles} from './styles';
import {useNavigation} from '@react-navigation/native';
import {RootNavigationType} from '../../../../interfaces/navigation.interface';
import {useTranslation} from 'react-i18next';

const LogInComponent = ({
  header,
  description,
}: {
  header: string;
  description: string;
}) => {
  const navigation = useNavigation<RootNavigationType>();
  const {t} = useTranslation();
  return (
    <View style={styles.container}>
      <Image
        source={require('../../../../../assets/flaticon/gift-box.png')}
        style={styles.icon}
      />
      <Text style={styles.header}>{header}</Text>
      <Text style={styles.description}>{description}</Text>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('LoginScreen', {});
        }}
        style={styles.button}>
        <Text style={styles.buttonText}>{t('login')}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default LogInComponent;
