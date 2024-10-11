import React, { useMemo } from 'react';
import { View, Dimensions, StyleSheet } from 'react-native';
import Confetti from './confetti.component';

const NUM_CONFETTI = 100;
const COLORS = ['#00e4b2', '#09aec5', '#107ed5'];
const CONFETTI_SIZE = 16;

const createConfetti = () => {
  const { width: screenWidth } = Dimensions.get('screen');

  return [...new Array(NUM_CONFETTI)].map((_, i) => {
    return {
      key: i,
      x: screenWidth * 0.5 - CONFETTI_SIZE / 2,
      y: 0,
      angle: Math.PI * 2 * Math.random(),
      color: COLORS[i % COLORS.length],
      xVel: Math.random() * 400 - 200,
      yVel: Math.random() * 150 + 150,
      angleVel: (Math.random() * 3 - 1.5) * Math.PI,
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
