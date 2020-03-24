import React from 'react';

import { Colors, color } from '../ui/color';
import { Size, padding, margin } from '../ui/spacing';
import { backgroundColor } from '../ui/bg';
import { border } from '../ui/border';

export enum ButtonPurpose {
  Primary,
  Google,
}

export interface ButtonProps {
  size?: Size;
  purpose?: ButtonPurpose;
  solid?: boolean;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  icon?: React.ReactNode;
  children?: React.ReactNode;
  hue?: string;
  type?: 'submit';
}

export function Button({
  children,
  size = Size.Small,
  purpose = ButtonPurpose.Primary,
  solid,
  icon,
  hue,
  ...props
}: ButtonProps) {
  const fontColor =
    purpose === ButtonPurpose.Google
      ? solid
        ? Colors.Lightest
        : Colors.Darkest
      : solid
      ? Colors.Lightest
      : Colors.Darker;
  const shade = purpose === ButtonPurpose.Google ? 'neutral' : 'primary';
  return (
    <>
      <button {...props}>
        {icon}
        {children}
      </button>
      <style jsx>{`
        button :global(i) {
          ${margin({ mr: Size.Small })}
        }
        button {
          cursor: pointer;
          ${padding({ ph: size + 2, pv: size })}
          ${
            solid
              ? 'border: 0; border-bottom: calc(.2rem + .0625rem) solid rgba(0,0,0,.2);'
              : hue
              ? `border: 1px solid ${hue}; border-bottom: 2px solid ${hue};`
              : `${border({
                  width: 1,
                  type: shade,
                  color: fontColor,
                })} ${border({
                  width: 'calc(.2rem + .0625rem)',
                  type: shade,
                  color: Colors.DarkerEmphasis,
                  side: 'bottom',
                })}`
          }
          ${
            hue
              ? `color: ${hue};`
              : color({ type: solid ? 'neutral' : shade, color: fontColor })
          }
          ${backgroundColor({
            bg: solid
              ? purpose === ButtonPurpose.Google
                ? Colors.Darkest
                : Colors.Dark
              : Colors.Lightest,
            type: solid ? shade : 'neutral',
          })};
          font-family: inherit;
          position: relative;
          font-size: 1rem;
          border-radius: 4rem;
          font-weight: bold;
          transition: all .25s ease;
        }

        button:hover {
          ${color({ type: 'primary', color: Colors.Lightest })}
          ${backgroundColor({
            bg: Colors.DarkerEmphasis,
            type: shade,
          })};
        }
      `}</style>
    </>
  );
}

Button.Purpose = ButtonPurpose;
