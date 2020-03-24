import React from 'react';
import { useForm } from 'react-hook-form';
import { logAnalytics } from '../utils/logAnalytics';
import { Button } from './Button';
import { firebase } from '../utils/firebase';
import { Field } from './Field';

interface Values {
  email: string;
  password: string;
}

export function CreateAccountForm() {
  const { register, handleSubmit, errors } = useForm<Values>();
  const onSubmit = (data: Values) => {
    logAnalytics('auth.account.created');
    firebase.auth().createUserWithEmailAndPassword(data.email, data.password);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Field<Values>
        ref={register({ required: true, pattern: /\S+@\S+\.\S+/i })}
        type="email"
        fieldName="email"
        label="Email"
        error={errors.email}
      />
      <Field<Values>
        ref={register({ required: true, pattern: /\S+@\S+\.\S+/i })}
        type="password"
        fieldName="password"
        label="Password"
        error={errors.password}
      />
      <Button solid type="submit" icon={<i className="fa fa-lock"></i>}>
        Create Account
      </Button>
    </form>
  );
}
