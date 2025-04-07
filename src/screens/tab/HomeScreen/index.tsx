import React from 'react';
import {ScrollView} from 'react-native';
import {styles} from './styles';
import SearchContainer from '../../../components/other_components/SearchContainer';
import {useGetResturantQuery} from '../../../redux/services/mobileApi';
import CampaignsContainer from '../../../components/product_components/CampaignsContainer';
import Lottie from '../../../components/other_components/Lottie';
import SwimlanesContainer from '../../../components/product_components/SwimlanesContainer';
import ProductContainer from '../../../components/product_components/ProductContainer';

const HomeScreen = () => {
  const {data, isLoading} = useGetResturantQuery();

  return (
    <ScrollView showsVerticalScrollIndicator={false} style={styles.container}>
      <SearchContainer />
      {isLoading ? (
        <Lottie />
      ) : data && data[0]?.data?.rlp?.carousels ? (
        <>
          <CampaignsContainer data={data[0].data.rlp.carousels} />
          <SwimlanesContainer data={data[0].data.rlp.swimlanes} />
          <ProductContainer data={data[0].data.rlp.organic_listing} />
        </>
      ) : (
        <Lottie />
      )}
    </ScrollView>
  );
};

export default HomeScreen;
