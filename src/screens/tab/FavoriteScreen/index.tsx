import {FlatList, Image, Text, View} from 'react-native';
import React from 'react';
import {useSelector} from 'react-redux';
import {userSliceInitialStateType} from '../../../interfaces/user.interface';
import {styles} from './styles';
import {useTranslation} from 'react-i18next';
import TabBar from '../../../components/tab_components/TabBar';

const FavoriteScreen = () => {
  const {t} = useTranslation();
  const favoriteRestaurants = useSelector(
    (state: {userSlice: userSliceInitialStateType}) =>
      state.userSlice.favoriteRestaurants || [],
  );
  console.log('favoriteRestaurants', favoriteRestaurants[0].budget);
  return (
    <View style={styles.container}>
      <TabBar title={t('favorite')} />
      <FlatList
        data={favoriteRestaurants}
        keyExtractor={item => item.id.toString()}
        renderItem={({item}) => (
          <View style={styles.itemContainer}>
            <Image
              source={{uri: item.hero_listing_image}}
              style={styles.itemImage}
            />
            <Text style={styles.itemText}>{item.name}</Text>
            <Text style={styles.itemText}>{item.budget}</Text>
          </View>
        )}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

export default FavoriteScreen;
