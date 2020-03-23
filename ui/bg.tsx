import { Colors, ColorLookup, colors } from './color';

export interface BackgroundColorProps {
  bg?: Colors;
  schemePreference?: keyof typeof colors;
  type?: keyof ColorLookup;
}

export function backgroundColor({
  type = 'neutral',
  bg,
  schemePreference = 'light',
}: BackgroundColorProps) {
  return `
      background-color: ${
        bg !== undefined ? colors[schemePreference][type][bg] : 'transparent'
      };
    `;
}
