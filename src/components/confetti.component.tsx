import Animated from 'react-native-reanimated';
import ConfettiIcon from '../svg/confetti.svg';

type ConfettiProps = {
  x: number;
  y: number;
  angle: number;
  size: number;
  color: string;
};

const Confetti = ({ x, y, angle, color, size }: ConfettiProps) => {
  return (
    <Animated.View
      style={[
        {
          position: 'absolute',
          top: 0,
          left: 0,
        },
        {
          transform: [
            { translateX: x },
            { translateY: y },
            { rotate: `${angle}rad` },
          ],
        },
      ]}>
      <ConfettiIcon width={size} height={size} color={color} />
    </Animated.View>
  );
};

export default Confetti;
