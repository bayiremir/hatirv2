import {FlatList, Image, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {styles} from './styles';
import {Data2} from '../../../interfaces/resturant.enum';

interface SwimlanesContainerProps {
  data: Data2;
}

const iconList = [
  require('../../../../assets/icons/hamburger.png'),
  require('../../../../assets/icons/delivery-man.png'),
  require('../../../../assets/icons/food-cart.png'),
  require('../../../../assets/icons/voucher.png'),
  require('../../../../assets/icons/best.png'),
];

const SwimlanesContainer = ({data}: {data: SwimlanesContainerProps}) => {
  return (
    <View style={styles.container}>
      <FlatList
        data={data.data.items}
        keyExtractor={(item, index) => index.toString()}
        showsHorizontalScrollIndicator={false}
        renderItem={({item, index}) => (
          <TouchableOpacity style={styles.swimlaneContainer}>
            <View style={styles.swimlane}>
              <Image
                style={styles.image}
                source={iconList[index] ?? iconList[0]}
              />
            </View>
            <Text style={styles.header}>{item.headline}</Text>
          </TouchableOpacity>
        )}
        horizontal
      />
    </View>
  );
};

export default SwimlanesContainer;
