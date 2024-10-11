import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
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
  const sharedX = useSharedValue(x);
  const sharedY = useSharedValue(y);
  const sharedAngle = useSharedValue(angle);

  // const dt = useDerivedValue(() => clock.value / 1000);

  // const dx = useDerivedValue(() => dt.value * xVel);
  // const dy = useDerivedValue(() => dt.value * yVel);
  // const dAngle = useDerivedValue(() => dt.value * angleVel);

  const animatedStyle = useAnimatedStyle(() => {
    // Simulate confetti falling and bouncing
    sharedX.value = withTiming(sharedX.value + xVel * 0.01, { duration: 16 });

    sharedY.value = withTiming(sharedY.value + yVel * 0.01, { duration: 16 });
    sharedAngle.value = withTiming(sharedAngle.value + angleVel * 0.01, {
      duration: 16,
    });

    return {
      transform: [
        { translateX: sharedX.value },
        { translateY: sharedY.value },
        { rotate: `${sharedAngle.value}rad` },
      ],
    };
  });

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
