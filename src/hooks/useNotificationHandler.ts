import {useEffect} from 'react';
import {useNavigation} from '@react-navigation/native';
import {getMessaging} from '@react-native-firebase/messaging';

const NotificationHandler = () => {
  const navigation = useNavigation<any>();

  useEffect(() => {
    const handleNotification = (remoteMessage: any) => {
      let target, slug;

      if (remoteMessage?.data && Object.keys(remoteMessage.data).length > 0) {
        target = remoteMessage.data.target;
        slug = remoteMessage.data.slug;
      } else if (remoteMessage?.notification) {
        // Eğer `data` boşsa `notification` içeriğini logla
      }

      if (target) {
        navigation.navigate(target, {slug: slug});
      }
    };

    const messaging = getMessaging();

    const requestNotificationPermission = async () => {
      try {
      } catch (error) {
        console.error('Notification permission request failed:', error);
      }
    };

    requestNotificationPermission();

    const unsubscribeOnMessage = messaging.onMessage(async remoteMessage => {
      handleNotification(remoteMessage);
    });

    const unsubscribeOnNotificationOpenedApp =
      messaging.onNotificationOpenedApp(remoteMessage => {
        handleNotification(remoteMessage);
      });

    messaging.getInitialNotification().then(remoteMessage => {
      if (remoteMessage) {
        handleNotification(remoteMessage);
      }
    });

    return () => {
      unsubscribeOnMessage();
      unsubscribeOnNotificationOpenedApp();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return null;
};

export default NotificationHandler;
