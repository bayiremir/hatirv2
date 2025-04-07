import {FlatList, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {styles} from './styles';
import {Data2} from '../../../interfaces/resturant.enum';

interface SwimlanesContainerProps {
  data: Data2;
}
const SwimlanesContainer = ({data}: {data: SwimlanesContainerProps}) => {
  return (
    <View style={styles.container}>
      <FlatList
        data={data.data.items}
        keyExtractor={(item, index) => index.toString()}
        showsHorizontalScrollIndicator={false}
        renderItem={({item}) => (
          <TouchableOpacity style={styles.swimlane}>
            <Text style={styles.header}>{item.headline}</Text>
          </TouchableOpacity>
        )}
        horizontal
      />
    </View>
  );
};

export default SwimlanesContainer;
