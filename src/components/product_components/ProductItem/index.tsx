import React from 'react';
import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {PlusIcon} from 'react-native-heroicons/outline';
import {Product} from '../../../interfaces/brand.interface';
import {COLORS} from '../../../constants/COLORS';
import {Fonts} from '../../../interfaces/fonts.enum';

const ProductItem = ({
  item,
  onAdd,
}: {
  item: Product;
  onAdd: (item: Product) => void;
}) => {
  return (
    <TouchableOpacity style={styles.item}>
      <View style={styles.container}>
        <Text style={styles.title}>{item.name}</Text>
        <Text numberOfLines={2} style={styles.description}>
          {item.description}
        </Text>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <TouchableOpacity style={styles.plus} onPress={() => onAdd(item)}>
            <PlusIcon color={COLORS.white} size={16} strokeWidth={3} />
          </TouchableOpacity>
          <Text style={styles.price}>
            {item.product_variations?.[0]?.price.toFixed(2)} ₺
          </Text>
        </View>
      </View>
      <Image
        source={{
          uri:
            item.file_path ||
            'https://blocks.astratic.com/img/general-img-portrait.png',
        }}
        style={styles.image}
      />
    </TouchableOpacity>
  );
};

export default ProductItem;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  item: {
    width: Dimensions.get('window').width - 40,
    height: 150,
    backgroundColor: '#ffffff',
    padding: 20,
    borderRadius: 20,
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    marginVertical: 8,
    marginHorizontal: 20,
  },
  title: {
    fontSize: 16,
    fontFamily: Fonts.Bold,
    color: '#333333',
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 20,
  },
  description: {
    fontSize: 12,
    color: '#333333',
    fontFamily: Fonts.Regular,
  },
  price: {
    fontSize: 16,
    fontFamily: Fonts.Bold,
    color: '#333333',
    marginVertical: 10,
  },
  plus: {
    width: 30,
    height: 24,
    backgroundColor: COLORS.dark,
    marginRight: 10,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
