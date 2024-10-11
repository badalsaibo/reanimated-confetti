import React, { useEffect } from 'react';
import { Animated } from 'react-native';
import ConfettiIcon from '../svg/confetti.svg';

type ConfettiProps = {
  x: number;
  y: number;
  xVel: number;
  yVel: number;
  angle: number;
  size: number;
  color: string;
  angleVel: number;
};

const Confetti = ({
  x,
  y,
  angle,
  color,
  size,
  angleVel,
  xVel,
  yVel,
}: ConfettiProps) => {
  const animatedX = new Animated.Value(x);
  const animatedY = new Animated.Value(y);
  const animatedAngle = new Animated.Value(angle);

  useEffect(() => {
    const animate = () => {
      Animated.parallel([
        Animated.timing(animatedX, {
          toValue: animatedX._value + xVel * 0.01,
          duration: 16,
          useNativeDriver: true, // Using native driver for performance
        }),
        Animated.timing(animatedY, {
          toValue: animatedY._value + yVel * 0.01,
          duration: 16,
          useNativeDriver: true, // Using native driver for performance
        }),
        Animated.timing(animatedAngle, {
          toValue: animatedAngle._value + angleVel * 0.01,
          duration: 16,
          useNativeDriver: true, // Using native driver for performance
        }),
      ]).start(() => animate()); // Start the animation again when it finishes
    };

    animate(); // Start the animation loop

    return () => {
      animatedX.stop(); // Stop the animation on unmount
      animatedY.stop();
      animatedAngle.stop();
    };
  }, [animatedX, animatedY, animatedAngle, xVel, yVel, angleVel]);

  const animatedStyle = {
    transform: [
      { translateX: animatedX },
      { translateY: animatedY },
      {
        rotate: animatedAngle.interpolate({
          inputRange: [0, 2 * Math.PI],
          outputRange: ['0rad', '2rad'],
        }),
      },
    ],
  };

  return (
    <Animated.View
      style={[
        {
          position: 'absolute',
          top: 0,
          left: 0,
        },
        animatedStyle,
      ]}>
      <ConfettiIcon width={size} height={size} color={color} />
    </Animated.View>
  );
};

export default Confetti;
