import React from 'react';
import {Text, View} from 'react-native';
import {StarIcon} from 'react-native-heroicons/solid';
import {styles} from './styles';

interface RatingItemProps {
  label: string;
  score: number;
  showStar?: boolean;
  reviewCount?: number;
}

const RatingItem = ({label, score, showStar, reviewCount}: RatingItemProps) => {
  return (
    <View style={styles.topic_rating_topic_container}>
      <View
        style={[
          styles.second_topic_rating_topic_container,
          showStar && {flexDirection: 'row'},
        ]}>
        {showStar && <StarIcon color="#344E41" size={12} />}
        {label !== '' && <Text style={styles.topic_rating_topic}>{label}</Text>}
        <Text style={styles.topic_rating_score}>{score}</Text>
      </View>
      {reviewCount !== undefined && (
        <Text style={styles.review_number}>({reviewCount})+</Text>
      )}
    </View>
  );
};

export default RatingItem;
