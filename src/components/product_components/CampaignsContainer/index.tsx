import {FlatList, Image, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {styles} from './styles';
import {Daum} from '../../../interfaces/resturant.enum';

interface CampaignsContainerProps {
  data: Daum[];
}

const CampaignsContainer = ({data}: {data: CampaignsContainerProps}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Kampanyalar</Text>
      <FlatList
        data={data.data[0].campaigns.slice(0, 5)}
        keyExtractor={(item, index) => index.toString()}
        showsHorizontalScrollIndicator={false}
        renderItem={({item}) => (
          <TouchableOpacity>
            <Image
              source={{
                uri: item?.image_large,
              }}
              style={styles.image}
            />
          </TouchableOpacity>
        )}
        horizontal
      />
    </View>
  );
};

export default CampaignsContainer;
