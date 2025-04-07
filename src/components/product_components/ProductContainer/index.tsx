import {Image, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {styles} from './styles';
import {OrganicListing} from '../../../interfaces/resturant.enum';
import {useNavigation} from '@react-navigation/native';
import {RootNavigationType} from '../../../interfaces/navigation.interface';

const ProductContainer = ({data}: {data: OrganicListing}) => {
  const navigation = useNavigation<RootNavigationType>();
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Restorantlar</Text>
      <View style={styles.listContainer}>
        {data.views[0].items.map((item, index) => (
          <TouchableOpacity
            onPress={() =>
              navigation.navigate('ProductDetailScreen', {
                code: item.code,
                name: item.name,
              })
            }
            key={index.toString()}
            style={styles.productContainer}>
            <Image
              style={styles.productImage}
              source={{uri: item.hero_listing_image}}
            />
            <Text style={styles.productName}>{item.name}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

export default ProductContainer;
