export type Percent = string;
function hsl(hue: number, saturation: Percent, lightness: Percent): string {
  return `hsl(${hue}, ${saturation}, ${lightness})`;
}
export enum Colors {
  Darkest = 1,
  DarkerEmphasis,
  Darker,
  Dark,
  Base,
  Light,
  LightEmphasis,
  Lighter,
  LighterEmphasis,
  Lightest,
}
type ColorImplementation = Record<Colors, string>;

const primary: ColorImplementation = {
  [Colors.Lightest]: '#F8FFED',
  [Colors.LighterEmphasis]: '#E6FFBF',
  [Colors.Lighter]: '#CAFF84',
  [Colors.LightEmphasis]: '#AFF75C',
  [Colors.Light]: '#8DED2D',
  [Colors.Base]: '#6CD410',
  [Colors.Dark]: '#5CB70B',
  [Colors.Darker]: '#399709',
  [Colors.DarkerEmphasis]: '#2E7B06',
  [Colors.Darkest]: '#1E5303',
};

const secondary: ColorImplementation = {
  [Colors.Lightest]: '#FFFBEA',
  [Colors.LighterEmphasis]: '#FFF3C4',
  [Colors.Lighter]: '#FCE588',
  [Colors.LightEmphasis]: '#FADB5F',
  [Colors.Light]: '#F7C948',
  [Colors.Base]: '#F0B429',
  [Colors.Dark]: '#DE911D',
  [Colors.Darker]: '#CB6E17',
  [Colors.DarkerEmphasis]: '#B44D12',
  [Colors.Darkest]: '#8D2B0B',
};

const neutral: ColorImplementation = {
  [Colors.Lightest]: '#FDFDFE',
  [Colors.LighterEmphasis]: '#E1E1E1',
  [Colors.Lighter]: '#CFCFCF',
  [Colors.LightEmphasis]: '#B1B1B1',
  [Colors.Light]: '#9E9E9E',
  [Colors.Base]: '#7E7E7E',
  [Colors.Dark]: '#626262',
  [Colors.Darker]: '#515151',
  [Colors.DarkerEmphasis]: '#3B3B3B',
  [Colors.Darkest]: '#111',
};

export type ColorLookup = Record<
  'neutral' | 'primary' | 'secondary',
  ColorImplementation
>;

export const colors: Record<'light', ColorLookup> = {
  light: { neutral, primary, secondary },
};

interface ColorProps {
  color?: Colors;
  type?: keyof ColorLookup;
  schemePreference?: keyof typeof colors;
}

export function color({
  type = 'neutral',
  color: colorShade = Colors.Light,
  schemePreference = 'light',
}: ColorProps) {
  return `
      color: ${colors[schemePreference][type][colorShade]};
    `;
}
