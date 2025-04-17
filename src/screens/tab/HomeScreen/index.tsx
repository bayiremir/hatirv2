import React from 'react';
import {ScrollView, View} from 'react-native';
import {styles} from './styles';
import {useGetResturantQuery} from '../../../redux/services/mobileApi';
import Lottie from '../../../components/other_components/Lottie';
import ProductContainer from '../../../components/product_components/ProductContainer';
import SwimlanesContainer from '../../../components/product_components/SwimlanesContainer';
import HomeTabBar from '../../../components/tab_components/HomeTabBar';

const HomeScreen = () => {
  const {data, isLoading} = useGetResturantQuery();

  return (
    <View style={styles.mainContainer}>
      <HomeTabBar />
      <ScrollView showsVerticalScrollIndicator={false} style={styles.container}>
        {isLoading ? (
          <Lottie />
        ) : data && data[0]?.data?.rlp?.carousels ? (
          <>
            {/* <CampaignsContainer data={data[0].data.rlp.carousels} /> */}
            <SwimlanesContainer data={data[0].data.rlp.swimlanes} />
            <ProductContainer data={data[0].data.rlp.organic_listing} />
          </>
        ) : (
          <Lottie />
        )}
      </ScrollView>
    </View>
  );
};

export default HomeScreen;
