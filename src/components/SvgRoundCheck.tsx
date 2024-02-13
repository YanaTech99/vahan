import * as React from 'react';
import Svg, {
  Rect,
  Path,
  Defs,
  LinearGradient,
  Stop,
  SvgProps,
} from 'react-native-svg';

const SvgRoundCheck: React.FC<SvgProps> = props => {
  return (
    <Svg width={60} height={60} viewBox="0 0 60 60" fill="none" {...props}>
      <Rect
        width={60}
        height={60}
        rx={30}
        fill="url(#paint0_linear_5315_32421)"
      />
      <Path
        d="M38 25L27.687 36 23 31"
        stroke="#000900"
        strokeWidth={4}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Defs>
        <LinearGradient
          id="paint0_linear_5315_32421"
          x1={60}
          y1={29.7744}
          x2={0.683756}
          y2={36.1429}
          gradientUnits="userSpaceOnUse">
          <Stop stopColor="#F2ED6A" />
          <Stop offset={1} stopColor="#C1991D" />
        </LinearGradient>
      </Defs>
    </Svg>
  );
};

export default SvgRoundCheck;
