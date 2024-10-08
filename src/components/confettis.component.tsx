import React, { useMemo } from 'react';
import { View, Dimensions, StyleSheet } from 'react-native';
import Confetti from './confetti.component';

const NUM_CONFETTI = 100;
const COLORS = ['#00e4b2', '#09aec5', '#107ed5'];
const CONFETTI_SIZE = 16;

const createConfetti = () => {
  const { width: screenWidth, height: screenHeight } = Dimensions.get('screen');

  return [...new Array(NUM_CONFETTI)].map((_, i) => {
    return {
      key: i,
      x: screenWidth * Math.random(),
      y: screenHeight * Math.random(),
      angle: Math.PI * 2 * Math.random(),
      color: COLORS[i % COLORS.length],
    };
  });
};

const Confettis = () => {
  const confetti = useMemo(createConfetti, []);

  return (
    <View pointerEvents="none" style={StyleSheet.absoluteFill}>
      {confetti.map(({ key, ...rest }) => {
        return <Confetti key={key} {...rest} size={CONFETTI_SIZE} />;
      })}
    </View>
  );
};

export default Confettis;
