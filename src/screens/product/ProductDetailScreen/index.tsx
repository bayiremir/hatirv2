import React, {useRef, useState, useCallback} from 'react';
import {FlatList, StyleSheet, View} from 'react-native';
import {useRoute} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';
import {useTranslation} from 'react-i18next';

// Redux
import {setCart} from '../../../redux/slices/userSlice';
import {useGetResturantByCodeQuery} from '../../../redux/services/mobileApi';

// Components
import Lottie from '../../../components/other_components/Lottie';
import CategoryItem from '../../../components/product_components/CategoryItem';
import GoBackCartTabBar from '../../../components/tab_components/GoBackCartTabBar';
import ProductDetailContainer from '../../../components/product_components/ProductDetailContainer';
import HorizontalCategoryTabs from '../../../components/product_components/HorizontalCategoryTabs';
import {useCustomModal} from '../../../components/other_components/Modal/CustomModal/CustomModalProvider';

// Constants & Interfaces
import {COLORS} from '../../../constants/COLORS';
import {MenuCategory, Product} from '../../../interfaces/brand.interface';
import {userSliceInitialStateType} from '../../../interfaces/user.interface';

const ProductDetailScreen = () => {
  // Hooks
  const route = useRoute();
  const {showModal, hideModal} = useCustomModal();
  const {t} = useTranslation();
  const dispatch = useDispatch();
  const {code} = route.params as {code: string};
  const {data, isLoading} = useGetResturantByCodeQuery(code);
  const user = useSelector(
    (state: {userSlice: userSliceInitialStateType}) => state.userSlice,
  );

  // Refs
  const productScrollViewRef = useRef<FlatList<MenuCategory>>(null);

  // State
  const [selectedCategory, setSelectedCategory] = useState(0);
  const [tabsPosition, setTabsPosition] = useState(0);
  const [isTabsSticky, setIsTabsSticky] = useState(false);
  const [userScrolling, setUserScrolling] = useState(false);
  const [autoScrolling, setAutoScrolling] = useState(false);

  // Handlers
  const addCart = (item: Product) => {
    if (!user.authLogin) {
      showModal({
        type: 'info',
        description: t('login_required_for_basket'),
        buttons: [
          {
            text: t('cancel'),
            onPress: () => hideModal(),
            isFocused: false,
          },
          {
            text: t('login'),
            onPress: () => {
              hideModal();
              // Navigate to login screen
            },
            isFocused: true,
          },
        ],
      });
    } else {
      dispatch(setCart(item));
    }
  };

  const scrollToCategory = useCallback(
    (index: number) => {
      setSelectedCategory(index);
      setAutoScrolling(true);

      const offset = isTabsSticky ? 50 : 0;

      productScrollViewRef.current?.scrollToIndex({
        index,
        animated: true,
        viewOffset: offset,
      });

      setTimeout(() => {
        setAutoScrolling(false);
      }, 500);
    },
    [isTabsSticky],
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
        setSelectedCategory(viewableItems[0].index);
      }
    },
    [userScrolling, autoScrolling],
  );

  // Render functions
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

  // Main render
  return (
    <View style={styles.container}>
      <GoBackCartTabBar header={''} color="black" />
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
          {user.cart.length > 0 && (
            <View>
              <View style={styles.cartBottomSpace} />
            </View>
          )}
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
  contentContainer: {
    flex: 1,
  },
  stickyHeaderContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    backgroundColor: COLORS.background,
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
  cartBottomSpace: {
    height: 100,
    backgroundColor: COLORS.background,
  },
});

export default ProductDetailScreen;
