import React from 'react';
import { Copy } from './Copy';
import { FieldError } from 'react-hook-form';
import { margin, Size, padding } from '../ui/spacing';
import { border } from '../ui/border';
import { Colors } from '../ui/color';

export interface FieldProps<T> {
  error?: FieldError;
  label: string;
  fieldName: keyof T;
  inputRef: any;
  type?: string;
  placeholder?: string;
}

export function ForwardedField<T>({
  label,
  error,
  inputRef,
  type = 'text',
  fieldName,
  placeholder,
}: FieldProps<T>) {
  return (
    <>
      <div>
        <Copy type={Copy.Type.Label} el="label">
          {label}
          {error && (
            <Copy purpose={Copy.Purpose.Error} type={Copy.Type.Body}>
              {error.type === 'required'
                ? 'Please enter a value'
                : error.type === 'pattern'
                ? 'The value entered is invalid.'
                : 'Please try again.'}
            </Copy>
          )}
          <input
            type={type}
            placeholder={placeholder}
            name={fieldName.toString()}
            ref={inputRef}
          />
        </Copy>
      </div>
      <style jsx>{`
        input {
          display: block;
          ${margin({ mt: Size.ExtraSmall, mb: Size.Medium })}
          border: 0;
          ${border({ side: 'bottom', width: 1, color: Colors.LighterEmphasis })}
          ${padding({ pb: Size.ExtraSmall })}
            font-size: 16px;
          width: 100%;
        }
      `}</style>
    </>
  );
}

export const Field = React.forwardRef(function fieldForwarder<Values>(
  props: Omit<FieldProps<Values>, 'inputRef'>,
  ref: any
) {
  return <ForwardedField<Values> {...props} inputRef={ref} />;
}) as <Values>(
  props: Omit<FieldProps<Values>, 'inputRef'> &
    React.RefAttributes<HTMLInputElement>
) => JSX.Element;
