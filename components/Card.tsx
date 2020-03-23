import React from 'react';
import { Size, padding, margin } from '../ui/spacing';
import { color, Colors } from '../ui/color';
import { backgroundColor } from '../ui/bg';
import { Copy } from './Copy';

export interface CardProps {
  heading: React.ReactNode;
  headingIcon: React.ReactNode;
}

export const Card: React.FC<CardProps> = props => (
  <>
    <section>
      <Copy purpose={Copy.Purpose.Marketing} type={Copy.Type.H3}>
        <span>{props.headingIcon}</span>
        {props.heading}
      </Copy>
      <article>{props.children}</article>
    </section>
    <style jsx>{`
        section {
          ${backgroundColor({ bg: Colors.Lightest })}
          ${padding({ p: Size.Medium })}
          border-radius: 25px;
          box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.1);
          ${margin({ mb: Size.Medium })}
        }
        span {
          ${margin({ mr: Size.ExtraSmall })}
          ${padding({ p: Size.ExtraSmall })}
          ${backgroundColor({ bg: Colors.Dark })}
          ${color({ color: Colors.LighterEmphasis })}
          border-radius: 15px;
          display: inline-flex;
          width: 28px;
          height: 28px;
          align-items: center;
          justify-content: center;
        }
      `}</style>
  </>
);
