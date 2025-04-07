import {useEffect} from 'react';
import {getAnalytics} from '@react-native-firebase/analytics';
import appsFlyer from 'react-native-appsflyer';

export const useAnalytics = ({
  screenName,
  screenClass,
  slug,
}: {
  screenName: string;
  screenClass: string;
  slug?: string;
}) => {
  useEffect(() => {
    getAnalytics().logScreenView({
      screen_name: screenName,
      screen_class: screenClass,
      slug: slug,
    });

    appsFlyer.logEvent(screenName, {
      screenName: screenName,
      screenClass: screenClass,
      slug: slug,
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
};
