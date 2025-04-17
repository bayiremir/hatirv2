import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {COLORS} from '../../../../constants/COLORS';
import {Fonts} from '../../../../interfaces/fonts.enum';
import {ChevronRightIcon} from 'react-native-heroicons/outline';

interface ProfileFieldProps {
  text?: string;
  uri?: string;
  image?: boolean;
  icon?: string;
  onPress?: () => void;
}

const ProfileFieldComponents = ({
  text,
  uri,
  icon,
  image = false,
  onPress,
}: ProfileFieldProps) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.profileContent}>
      {image && uri && <Image source={{uri}} style={styles.image} />}
      {icon && <Image source={{uri: icon}} style={styles.icon} />}
      <Text style={styles.text}>{text}</Text>
      {icon && (
        <View style={styles.chevronContainer}>
          <ChevronRightIcon color={COLORS.dark} size={20} />
        </View>
      )}
    </TouchableOpacity>
  );
};

export default ProfileFieldComponents;

const styles = StyleSheet.create({
  profileContent: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 20,
    justifyContent: 'space-between',
  },
  image: {
    width: 64,
    height: 64,
    marginRight: 20,
    marginVertical: 10,
  },
  text: {
    fontSize: 16,
    color: COLORS.dark,
    fontFamily: Fonts.Light,
    marginVertical: 12,
    flex: 1,
  },
  icon: {
    width: 24,
    height: 24,
    marginRight: 20,
    marginVertical: 10,
  },
  chevronContainer: {
    marginLeft: 10,
  },
});
