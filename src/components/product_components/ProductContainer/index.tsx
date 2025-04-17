import {Image, ScrollView, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {styles} from './styles';
import {OrganicListing} from '../../../interfaces/resturant.enum';
import {useNavigation} from '@react-navigation/native';
import {RootNavigationType} from '../../../interfaces/navigation.interface';
import {HeartIcon as HeartIconOutline} from 'react-native-heroicons/outline';
import {
  HeartIcon as HeartIconSolid,
  StarIcon as StarIconSolid,
} from 'react-native-heroicons/solid';
import {Fonts} from '../../../interfaces/fonts.enum';
import {useDispatch, useSelector} from 'react-redux';
import {setFavoriteRestaurants} from '../../../redux/slices/userSlice';
import {userSliceInitialStateType} from '../../../interfaces/user.interface';

const ProductContainer = ({data}: {data: OrganicListing}) => {
  const navigation = useNavigation<RootNavigationType>();
  const dispatch = useDispatch();
  const favoriteRestaurants = useSelector(
    (state: {userSlice: userSliceInitialStateType}) =>
      state.userSlice.favoriteRestaurants || [],
  );

  const isFavorite = (id: string) => {
    return (
      Array.isArray(favoriteRestaurants) &&
      favoriteRestaurants.some((item: any) => item.id === id)
    );
  };

  const toggleFavorite = (item: any) => {
    dispatch(setFavoriteRestaurants(item));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Popüler Restorantlar</Text>
      <ScrollView
        showsHorizontalScrollIndicator={false}
        horizontal
        style={styles.listContainer}>
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
            <TouchableOpacity
              onPress={() => toggleFavorite(item)}
              style={styles.heartIconContainer}>
              {isFavorite(item?.id) ? (
                <HeartIconSolid size={20} color="red" />
              ) : (
                <HeartIconOutline size={20} color="black" />
              )}
            </TouchableOpacity>
            <Text numberOfLines={1} style={styles.productName}>
              {item.name}
            </Text>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <StarIconSolid size={15} color="#D67312" />
              <Text style={[styles.rating, {fontFamily: Fonts.Bold}]}>
                {item.rating}
              </Text>
              <Text style={styles.rating}>({item.review_number})</Text>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};

export default ProductContainer;
