import React, {useRef, useState, useCallback} from 'react';
import {FlatList, StyleSheet, View} from 'react-native';
import {useRoute} from '@react-navigation/native';
import {useDispatch} from 'react-redux';
import {useGetBrandsQuery} from '../../../redux/services/resturantApi';
import {setCart} from '../../../redux/slices/userSlice';
import Lottie from '../../../components/other_components/Lottie';
import {MenuCategory, Product} from '../../../interfaces/brand.interface';
import CategoryItem from '../../../components/product_components/CategoryItem';
import GoBackCartTabBar from '../../../components/tab_components/GoBackCartTabBar';
import ProductDetailContainer from '../../../components/product_components/ProductDetailContainer';
import HorizontalCategoryTabs from '../../../components/product_components/HorizontalCategoryTabs';

const ProductDetailScreen = () => {
  const route = useRoute();
  const {code} = route.params as {code: string};
  const dispatch = useDispatch();
  const {data, isLoading} = useGetBrandsQuery({code});
  const productScrollViewRef = useRef<FlatList<MenuCategory>>(null);
  const [selectedCategory, setSelectedCategory] = useState(0);
  const [tabsPosition, setTabsPosition] = useState(0);
  const [isTabsSticky, setIsTabsSticky] = useState(false);
  const [userScrolling, setUserScrolling] = useState(false);
  const [autoScrolling, setAutoScrolling] = useState(false);

  const addCart = (item: Product) => {
    dispatch(setCart(item));
  };

  const scrollToCategory = useCallback((index: number) => {
    console.log('scrollToCategory', index);
    setSelectedCategory(index);
    setAutoScrolling(true);
    productScrollViewRef.current?.scrollToIndex({index, animated: true});

    setTimeout(() => {
      setAutoScrolling(false);
    }, 500);
  }, []);

  const renderHeader = () => {
    return (
      <>
        {data?.data && <ProductDetailContainer data={data.data} />}
        <View
          onLayout={event => {
            setTabsPosition(event.nativeEvent.layout.y);
          }}>
          {!isTabsSticky && (
            <HorizontalCategoryTabs
              categories={data?.data?.menus?.[0]?.menu_categories || []}
              onPressCategory={scrollToCategory}
              selectedIndex={selectedCategory}
            />
          )}
        </View>
      </>
    );
  };

  const renderCategoryItem = ({item}: {item: MenuCategory}) => (
    <CategoryItem category={item} onAdd={addCart} />
  );

  const handleScroll = (event: any) => {
    const scrollPosition = event.nativeEvent.contentOffset.y;
    setIsTabsSticky(scrollPosition >= tabsPosition);

    if (!autoScrolling && event.nativeEvent.contentOffset.y !== 0) {
      setUserScrolling(true);
    }
  };

  const handleScrollEnd = () => {
    setUserScrolling(false);
  };

  const handleViewableItemsChanged = useCallback(
    ({viewableItems}: {viewableItems: any}) => {
      if (
        userScrolling &&
        !autoScrolling &&
        viewableItems.length > 0 &&
        viewableItems[0].index !== null
      ) {
        setSelectedCategory(viewableItems[0].index as number);
      }
    },
    [userScrolling, autoScrolling],
  );

  return (
    <View style={styles.container}>
      <GoBackCartTabBar header={''} color="#333333" />
      {isLoading && !data ? (
        <Lottie />
      ) : (
        <View style={styles.contentContainer}>
          {isTabsSticky && (
            <View style={styles.stickyHeaderContainer}>
              <HorizontalCategoryTabs
                categories={data?.data?.menus?.[0]?.menu_categories || []}
                onPressCategory={scrollToCategory}
                selectedIndex={selectedCategory}
              />
            </View>
          )}
          <FlatList
            ref={productScrollViewRef}
            showsVerticalScrollIndicator={false}
            data={data?.data?.menus?.[0]?.menu_categories}
            keyExtractor={item => item.id.toString()}
            renderItem={renderCategoryItem}
            ListHeaderComponent={renderHeader}
            contentContainerStyle={styles.contentContainerStyle}
            onScroll={handleScroll}
            onScrollEndDrag={handleScrollEnd}
            onMomentumScrollEnd={handleScrollEnd}
            scrollEventThrottle={16}
            onViewableItemsChanged={handleViewableItemsChanged}
            viewabilityConfig={{
              itemVisiblePercentThreshold: 50,
            }}
            onScrollToIndexFailed={info => {
              setTimeout(() => {
                productScrollViewRef.current?.scrollToIndex({
                  index: info.index,
                  animated: true,
                });
              }, 100);
            }}
          />
        </View>
      )}
    </View>
  );
};

export default ProductDetailScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  contentContainer: {
    flex: 1,
  },
  stickyHeaderContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    backgroundColor: '#f5f5f5',
    zIndex: 999,
    padding: 0,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 2,
  },
  contentContainerStyle: {
    paddingBottom: 100,
  },
});
