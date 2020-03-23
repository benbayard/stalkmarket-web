export enum Size {
  ExtraSmall = 1,
  Small,
  Medium,
  Large,
  ExtraLarge,
  ExtraExtraLarge,
}

export const sizeLookup: Record<Size, number> = {
  [Size.ExtraSmall]: 12,
  [Size.Small]: 16,
  [Size.Medium]: 20,
  [Size.Large]: 32,
  [Size.ExtraLarge]: 48,
  [Size.ExtraExtraLarge]: 64,
};

export interface PaddingOptions {
  pr?: false | Size;
  pl?: false | Size;
  pb?: false | Size;
  pt?: false | Size;
  ph?: false | Size;
  pv?: false | Size;
  p?: false | Size;
}

export function padding({ pr, pl, pb, pt, ph, pv, p }: PaddingOptions) {
  const topPadding = pt || pv || p;
  const bottomPadding = pb || pv || p;
  const leftPadding = pl || ph || p;
  const rightPadding = pr || ph || p;
  return `
    padding-top: ${
      topPadding === undefined || topPadding === false
        ? 0
        : sizeLookup[topPadding]
    }px;
    padding-bottom: ${
      bottomPadding === undefined || bottomPadding === false
        ? 0
        : sizeLookup[bottomPadding]
    }px;
    padding-left: ${
      leftPadding === undefined || leftPadding === false
        ? 0
        : sizeLookup[leftPadding]
    }px;
    padding-right: ${
      rightPadding === undefined || rightPadding === false
        ? 0
        : sizeLookup[rightPadding]
    }px;
  `;
}

export interface MarginOptions {
  mr?: false | Size;
  ml?: false | Size;
  mb?: false | Size;
  mt?: false | Size;
  mh?: false | Size;
  mv?: false | Size;
  m?: false | Size;
}

export function margin({ mr, ml, mb, mt, mh, mv, m }: MarginOptions) {
  const topPadding = mt || mv || m;
  const bottomPadding = mb || mv || m;
  const leftPadding = ml || mh || m;
  const rightPadding = mr || mh || m;
  return `
    margin-top: ${
      topPadding === undefined || topPadding === false
        ? 0
        : sizeLookup[topPadding]
    }px;
    margin-bottom: ${
      bottomPadding === undefined || bottomPadding === false
        ? 0
        : sizeLookup[bottomPadding]
    }px;
    margin-left: ${
      leftPadding === undefined || leftPadding === false
        ? 0
        : sizeLookup[leftPadding]
    }px;
    margin-right: ${
      rightPadding === undefined || rightPadding === false
        ? 0
        : sizeLookup[rightPadding]
    }px;
  `;
}
