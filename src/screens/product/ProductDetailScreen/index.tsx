import {Text, View} from 'react-native';
import React from 'react';
import {useRoute} from '@react-navigation/native';
import GoBackTabBar from '../../../components/tab_components/GoBackTabBar';
import {styles} from './styles';

const ProductDetailScreen = () => {
  const route = useRoute();
  const {code, name} = route.params as {code: string; name: string};

  return (
    <View style={styles.container}>
      <GoBackTabBar color="white" center={true} />
    </View>
  );
};

export default ProductDetailScreen;
