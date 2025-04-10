import React from 'react';
import {ScrollView, Text, View, Pressable} from 'react-native';
import {MenuCategory} from '../../../interfaces/brand.interface';
import {styles} from './styles';

interface Props {
  categories: MenuCategory[];
  onPressCategory: (index: number) => void;
  selectedIndex: number;
}

const HorizontalCategoryTabs = ({
  categories,
  onPressCategory,
  selectedIndex,
}: Props) => {
  const handlePress = (index: number) => {
    onPressCategory(index);
  };

  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.scrollContainer}>
      {categories.map((category, index) => {
        const isActive = index === selectedIndex;

        return (
          <Pressable
            key={category.id}
            onPress={() => handlePress(index)}
            style={({pressed}) => [
              styles.tab,
              isActive && styles.activeTab,
              pressed && {opacity: 0.7},
            ]}>
            <Text style={[styles.tabText, isActive && styles.activeTabText]}>
              {category.name}
            </Text>
            {isActive && <View style={styles.underline} />}
          </Pressable>
        );
      })}
    </ScrollView>
  );
};

export default HorizontalCategoryTabs;
