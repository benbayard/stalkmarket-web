import React from 'react';
import { Copy } from './Copy';
import { FieldError } from 'react-hook-form';
import { margin, Size, padding } from '../ui/spacing';
import { border } from '../ui/border';
import { Colors, color } from '../ui/color';

interface Option {
  value: string | number;
  label?: string;
}

interface BaseProps<T> {
  error?: FieldError;
  label: string;
  fieldName: keyof T;
  inputRef: any;
  placeholder?: string;
}

interface FieldProps<T> extends BaseProps<T> {
  type?: 'text' | 'email' | 'password' | 'select';
  options?: Option[];
}

export function ForwardedField<T>(props: FieldProps<T>) {
  const {
    label,
    error,
    inputRef,
    type = 'text',
    fieldName,
    placeholder,
    options,
  } = props;
  if (type === 'select' && !options) {
    throw new Error('Well, you shouldnt do that');
  }

  return (
    <>
      <div className="field">
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
          {type === 'select' ? (
            <select name={fieldName.toString()} ref={inputRef}>
              {placeholder && (
                <option value="" disabled selected>
                  {placeholder}
                </option>
              )}
              {options?.map(option => (
                <option value={option.value} key={option.value}>
                  {option.label ?? option.value}
                </option>
              ))}
            </select>
          ) : (
            <input
              type={type}
              placeholder={placeholder}
              name={fieldName.toString()}
              ref={inputRef}
            />
          )}
          {type === 'select' && <i className="fad fa-angle-down"></i>}
        </Copy>
      </div>
      <style jsx>{`
        .field :global(label) {
            display: flex;
            flex-direction: column;
            position: relative;
        }
        i {
          position: absolute;
          right: 22px;
          bottom: calc(11px + 1rem + 5px);
          ${color({ color: Colors.Base })}
          font-size: 22px;
        }
        input, select {
          display: block;
          ${margin({ mt: Size.ExtraSmall, mb: Size.Medium })}
          ${border({ width: 1, color: Colors.LighterEmphasis })}
          ${padding({
            pv: Size.ExtraSmall,
            ph: Size.Medium,
          })}
          font-size: 16px;
          border-radius: 25px;
          appearance: none;
        }
        select:invalid { color: gray; }
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
