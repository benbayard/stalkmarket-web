import { Colors, colors, ColorLookup } from './color';

export interface BorderProps {
  width?: number | string;
  color?: Colors;
  type?: keyof ColorLookup;
  side?: 'top' | 'bottom' | 'left' | 'right';
}

export function border({
  width,
  color = Colors.Darkest,
  type = 'neutral',
  side,
}: BorderProps) {
  return `
      border${side ? `-${side}` : ''}: ${
    typeof width === 'string' ? width : `${width}px`
  } solid ${colors.light[type][color]};
    `;
}
