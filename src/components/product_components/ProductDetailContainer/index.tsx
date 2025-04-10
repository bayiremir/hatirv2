import React from 'react';
import {Image, Text, View} from 'react-native';
import {Data} from '../../../interfaces/brand.interface';
import {styles} from './styles';
import RatingItem from '../RatingItemContainer';
import WorkingHoursCardContainer from '../WorkingHoursCardContainer';

const ProductDetailContainer = ({data}: {data: Data}) => {
  const [general, courier, service, taste] = data.topic_ratings;

  return (
    <View style={styles.container}>
      <View style={styles.rowcontainer}>
        <Image source={{uri: data.hero_image}} style={styles.image} />

        <View style={styles.detailContainer}>
          <Text style={styles.header}>{data.name}</Text>
          <Text style={styles.address}>
            {data.cuisines[0]?.name}
            {data.cuisines[1]?.name ? ` & ${data.cuisines[1]?.name}` : ''}
          </Text>

          <View style={[styles.rowcontainer, {marginVertical: 8}]}>
            <RatingItem
              label=""
              score={general.score}
              showStar
              reviewCount={data.review_number}
            />
            <RatingItem label="Kurye" score={courier.score} />
            <RatingItem label="Servis" score={service.score} />
            <RatingItem label="Lezzet" score={taste.score} />
          </View>
        </View>
      </View>
      <WorkingHoursCardContainer
        openingTime={data.menus[0]?.opening_time?.substring(0, 5)}
        closingTime={data.menus[0]?.closing_time?.substring(0, 5)}
        minimumAmount={data.minimum_order_amount}
        deliveryTime={data.minimum_pickup_time}
      />
    </View>
  );
};

export default ProductDetailContainer;
