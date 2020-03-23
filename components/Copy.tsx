import React from 'react';
import { color, Colors, ColorLookup } from '../ui/color';
export enum CopyType {
  Body = 'body',
  Label = 'label',
  Labeled = 'labeled',
  H1 = 'h1',
  H2 = 'h2',
  H3 = 'h3',
  H4 = 'h4',
}

export enum Viewport {
  Xs = 1,
  Sm,
  Md,
  Lg,
}

export type Responsive<T extends string | number, S> = Record<
  Viewport,
  Record<T, S>
>;

export const elementMap: Record<CopyType, string> = {
  [CopyType.Body]: 'p',
  [CopyType.Label]: 'p',
  [CopyType.Labeled]: 'p',
  [CopyType.H1]: 'h1',
  [CopyType.H2]: 'h2',
  [CopyType.H3]: 'h3',
  [CopyType.H4]: 'h4',
};

export const fontSizeMap: Responsive<CopyType, number> = {
  [Viewport.Xs]: {
    [CopyType.Body]: 16,
    [CopyType.Label]: 17,
    [CopyType.Labeled]: 15,
    [CopyType.H1]: 32,
    [CopyType.H2]: 24,
    [CopyType.H3]: 20,
    [CopyType.H4]: 18,
  },
  [Viewport.Sm]: {
    [CopyType.Body]: 16,
    [CopyType.Label]: 17,
    [CopyType.Labeled]: 15,
    [CopyType.H1]: 42,
    [CopyType.H2]: 28,
    [CopyType.H3]: 22,
    [CopyType.H4]: 18,
  },
  [Viewport.Md]: {
    [CopyType.Body]: 16,
    [CopyType.Label]: 18,
    [CopyType.Labeled]: 15,
    [CopyType.H1]: 48,
    [CopyType.H2]: 32,
    [CopyType.H3]: 24,
    [CopyType.H4]: 20,
  },
  [Viewport.Lg]: {
    [CopyType.Body]: 16,
    [CopyType.Label]: 18,
    [CopyType.Labeled]: 15,
    [CopyType.H1]: 48,
    [CopyType.H2]: 32,
    [CopyType.H3]: 24,
    [CopyType.H4]: 20,
  },
};

export const lineHeightMap: Record<CopyType, number> = {
  [CopyType.Body]: 1.5,
  [CopyType.Label]: 1.5,
  [CopyType.Labeled]: 1.5,
  [CopyType.H1]: 1.2,
  [CopyType.H2]: 1.2,
  [CopyType.H3]: 1.3,
  [CopyType.H4]: 1.4,
};

export const colorLookup: Record<CopyType, Colors> = {
  [CopyType.Body]: Colors.Darker,
  [CopyType.Labeled]: Colors.Base,
  [CopyType.Label]: Colors.Darkest,
  [CopyType.H1]: Colors.Darkest,
  [CopyType.H2]: Colors.Darkest,
  [CopyType.H3]: Colors.Darkest,
  [CopyType.H4]: Colors.Darkest,
};

enum Purpose {
  General,
  Marketing,
  Error,
}

export function Copy({
  type,
  children,
  inline,
  colorType = 'neutral',
  color: colorShade,
  purpose = Purpose.General,
  underline,
  weight,
  align,
  el,
}: {
  type: CopyType;
  children: React.ReactNode;
  inline?: boolean;
  colorType?: keyof ColorLookup;
  color?: Colors;
  purpose?: Purpose;
  underline?: boolean;
  weight?: string;
  align?: 'center';
  el?: string;
}) {
  const Element: any = el ?? elementMap[type];

  const colorToUse = colorShade || colorLookup[type] || Colors.Darkest;

  return (
    <>
      <Element className="el">{children}</Element>
      <style jsx>{`
        .el {
          font-family: ${
            purpose === Purpose.Marketing ? 'adelle, serif' : 'inherit'
          };
          font-size: ${fontSizeMap[Viewport.Xs]![type]}px;
          display: ${inline ? 'inline' : 'block'};
          line-height: ${lineHeightMap[type]};
          ${
            purpose === Purpose.Error
              ? 'color: #d70b00;'
              : color({ type: colorType, color: colorToUse })
          }
          text-decoration: ${underline ? 'underline' : 'none'};
          text-align: ${align || 'initial'};
          font-weight: ${
            weight
              ? weight
              : type === CopyType.Label
              ? 'bold'
              : type === CopyType.Body
              ? 'normal'
              : 'revert'
          };
        }

        @media only screen and (min-width: 576px) {
          .el {
            font-size: ${fontSizeMap[Viewport.Xs]![type]}px;
          }
        }

        @media only screen and (min-width: 768px) {
          .el {
            font-size: ${fontSizeMap[Viewport.Sm]![type]}px;
          }
        }

        @media only screen and (min-width: 992px) {
          .el {
            font-size: ${fontSizeMap[Viewport.Md]![type]}px;
          }
        }
      `}</style>
    </>
  );
}

Copy.Type = CopyType;
Copy.Purpose = Purpose;
