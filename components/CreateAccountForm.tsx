import React from 'react';
import { useForm } from 'react-hook-form';
import { logAnalytics } from '../utils/logAnalytics';
import { Button } from './Button';
import { Copy } from './Copy';
import { margin, Size, padding } from '../ui/spacing';
import { border } from '../ui/border';
import { Colors } from '../ui/color';
import { firebase } from '../utils/firebase';

interface Values {
  email: string;
  password: string;
}

export function CreateAccountForm() {
  const { register, handleSubmit, errors } = useForm<Values>();
  const onSubmit = (data: Values) => {
    logAnalytics('auth.createAccount.clicked');
    firebase.auth().createUserWithEmailAndPassword(data.email, data.password);
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <Copy type={Copy.Type.Label} el="label">
            Email
            {errors?.email && (
              <Copy purpose={Copy.Purpose.Error} type={Copy.Type.Body}>
                {errors.email.type === 'required'
                  ? 'Please enter your email'
                  : errors.email.type === 'pattern'
                  ? 'The email entered is invalid.'
                  : 'Please try again.'}
              </Copy>
            )}
            <input
              type="email"
              placeholder="your@email.com"
              name="email"
              ref={register({ required: true, pattern: /\S+@\S+\.\S+/i })}
            />
          </Copy>
        </div>
        <div>
          <Copy type={Copy.Type.Label} el="label">
            Password
            {errors?.password && (
              <Copy purpose={Copy.Purpose.Error} type={Copy.Type.Body}>
                {errors.password.type === 'required'
                  ? 'Please enter a password'
                  : 'Please try again.'}
              </Copy>
            )}
            <input
              type="text"
              placeholder="********"
              name="password"
              ref={register({ required: true, min: 5 })}
            />
          </Copy>
        </div>
        <div>
          <Button solid type="submit" icon={<i className="fa fa-lock"></i>}>
            Create Account
          </Button>
        </div>
      </form>
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
