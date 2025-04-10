import React from 'react';
import {Text, View} from 'react-native';
import {styles} from './styles';

interface Props {
  openingTime: string;
  closingTime: string;
  minimumAmount: number;
  deliveryTime: number;
}

const WorkingHoursCardContainer = ({
  openingTime,
  closingTime,
  minimumAmount,
  deliveryTime,
}: Props) => {
  return (
    <View
      style={[
        styles.rowcontainer,
        {marginTop: 16, justifyContent: 'space-between'},
      ]}>
      <View>
        <Text style={styles.workingTitle}>Çalışma Saatleri</Text>
        <Text style={styles.workingValue}>
          {openingTime} - {closingTime}
        </Text>
      </View>
      <View>
        <Text style={styles.workingTitle}>Min Tutar</Text>
        <Text style={styles.workingValue}>{minimumAmount} TL</Text>
      </View>
      <View>
        <Text style={styles.workingTitle}>Teslimat Süresi</Text>
        <Text style={styles.workingValue}>{deliveryTime} dk</Text>
      </View>
    </View>
  );
};

export default WorkingHoursCardContainer;
