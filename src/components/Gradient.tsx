import React from 'react';
import {Stop, LinearGradient} from 'react-native-svg';

export const PrimaryGradient = () => (
  <LinearGradient
    id="primary_linear_gradient"
    x1="300"
    y1="24.812"
    x2="87.9833"
    y2="161.391"
    gradientUnits="userSpaceOnUse">
    <Stop stopColor="#f2ed6a" />
    <Stop offset="1" stopColor="#c1991d" />
  </LinearGradient>
);

export const PrimaryGradientLight = () => (
  <LinearGradient
    id="primary_light_linear_gradient"
    x1="300"
    y1="24.812"
    x2="87.9833"
    y2="161.391"
    gradientUnits="userSpaceOnUse">
    <Stop stopColor="#f2ed6a" stopOpacity={0.33}/>
    <Stop offset="1" stopColor="#c1991d" stopOpacity={0.33}/>
  </LinearGradient>
);

export const SecondaryGradient = () => (
  <LinearGradient
    id="secondary_linear_gradient"
    x1="0"
    y1="25"
    x2="300"
    y2="25"
    gradientUnits="userSpaceOnUse">
    <Stop stopColor="#18E094" />
    <Stop offset="1" stopColor="#18E094" stopOpacity="0.33" />
  </LinearGradient>
);

export const TertiaryGradient = () => (
  <LinearGradient
    id="tertiary_linear_gradient"
    x1="77"
    y1="-8"
    x2="77"
    y2="22"
    gradientUnits="userSpaceOnUse">
    <Stop stopColor="#02d5c1" />
    <Stop offset="1" stopColor="#5e6eff" />
  </LinearGradient>
);

export const DangerGradient = () => (
  <LinearGradient
    id="danger_linear_gradient"
    x1="0"
    y1="25"
    x2="300"
    y2="25"
    gradientUnits="userSpaceOnUse">
    <Stop stopColor="#FF4021" />
    <Stop offset="1" stopColor="#FF4021" stopOpacity="0.33" />
  </LinearGradient>
);
