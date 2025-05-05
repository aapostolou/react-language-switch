import { LanguageSwitchDirection } from './constants/types';
import { LanguageSwitchProps } from './LanguageSwitch';

export const createDirectionalMovement = ({
  width,
  height,
  gap,
  flagsPerGroup = 9999,
}: Required<Pick<LanguageSwitchProps, "width" | "height" | "gap">> &
  Pick<LanguageSwitchProps, "flagsPerGroup">): {
  [key in LanguageSwitchDirection]: (index: number) => {
    dx: number;
    dy: number;
  };
} => ({
  down: (index) => ({
    dx: 0,
    dy: (index + 1) * (height + gap),
  }),
  up: (index) => ({
    dx: 0,
    dy: (index + 1) * (height + gap) * -1,
  }),
  right: (index) => ({
    dx: (index + 1) * (width + gap),
    dy: 0,
  }),
  left: (index) => ({
    dx: (index + 1) * (width + gap) * -1,
    dy: 0,
  }),

  "down-left": (index) => ({
    dx: Math.floor(index / flagsPerGroup) * (width + gap) * -1,
    dy: ((index % flagsPerGroup) + 1) * (height + gap),
  }),
  "down-right": (index) => ({
    dx: Math.floor(index / flagsPerGroup) * (width + gap),
    dy: ((index % flagsPerGroup) + 1) * (height + gap),
  }),
  "up-left": (index) => ({
    dx: Math.floor(index / flagsPerGroup) * (width + gap) * -1,
    dy: ((index % flagsPerGroup) + 1) * (height + gap) * -1,
  }),
  "up-right": (index) => ({
    dx: Math.floor(index / flagsPerGroup) * (width + gap),
    dy: ((index % flagsPerGroup) + 1) * (height + gap) * -1,
  }),

  "left-down": (index) => ({
    dx: ((index % flagsPerGroup) + 1) * (width + gap) * -1,
    dy: Math.floor(index / flagsPerGroup) * (height + gap),
  }),
  "left-up": (index) => ({
    dx: ((index % flagsPerGroup) + 1) * (width + gap) * -1,
    dy: Math.floor(index / flagsPerGroup) * (height + gap) * -1,
  }),
  "right-down": (index) => ({
    dx: ((index % flagsPerGroup) + 1) * (width + gap),
    dy: Math.floor(index / flagsPerGroup) * (height + gap),
  }),
  "right-up": (index) => ({
    dx: ((index % flagsPerGroup) + 1) * (width + gap),
    dy: Math.floor(index / flagsPerGroup) * (height + gap) * -1,
  }),
});
