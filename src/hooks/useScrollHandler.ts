import {useSharedValue} from 'react-native-reanimated';
import {NativeScrollEvent, NativeSyntheticEvent} from 'react-native';

const useScrollHandler = () => {
  const scrollY = useSharedValue(0);

  // Standart onScroll handler olarak tanımlıyoruz
  const scrollHandler = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    scrollY.value = event.nativeEvent.contentOffset.y;
  };

  return {scrollY, scrollHandler};
};

export default useScrollHandler;
