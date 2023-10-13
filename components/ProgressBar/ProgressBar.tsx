import React from 'react';
import {View} from 'react-native';

export default function ProgressBar({progress}) {
  const barWidth = 230;
  const progressWidth = (progress / 100) * barWidth;

  return <View />;
}
