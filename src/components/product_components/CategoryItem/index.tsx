import React from 'react';
import {FlatList, StyleSheet, Text, View} from 'react-native';
import {MenuCategory, Product} from '../../../interfaces/brand.interface';
import ProductItem from '../ProductItem';
import {Fonts} from '../../../interfaces/fonts.enum';

const CategoryItem = ({
  category,
  onAdd,
}: {
  category: MenuCategory;
  onAdd: (item: Product) => void;
}) => {
  return (
    <View>
      <Text style={styles.categoryTitle}>{category.name}</Text>
      <View style={styles.categoryContainer}>
        <FlatList
          data={category.products}
          keyExtractor={product => product.id.toString()}
          renderItem={({item}) => <ProductItem item={item} onAdd={onAdd} />}
        />
      </View>
    </View>
  );
};

export default CategoryItem;

const styles = StyleSheet.create({
  categoryContainer: {
    alignItems: 'center',
  },
  categoryTitle: {
    fontSize: 16,
    fontFamily: Fonts.Bold,
    color: '#333333',
    marginHorizontal: 20,
  },
});
