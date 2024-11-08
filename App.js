import React from 'react';
import { View, Text } from 'react-native';

const Name = () => <Text>Hafiz Muhammad Danial</Text>;

const Show = () => {
  return (
    <View>
        {Array.from({ length: 10 }).map((_, i) => (
          <Name key = {i} />
  ))}
    </View>
  );
};

export default Show;
