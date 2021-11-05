import './style.scss';

import React, { useState } from 'react';
import {
  useForm,
  SubmitHandler,
  FormProvider,
  useFormContext,
} from 'react-hook-form';

type TInputProps = {
  type: 'text' | 'number' | 'textarea' | 'password';
  name: string;
  id?: string;
  errorMessage?: string;
  keyValue?: string;
  value?: string | number;
  required?: boolean;
  requiredEmail?: RegExp;
  pattern?: boolean;
};

const ValidateEmail: React.FC<TInputProps> = ({
  name,
  type,
  keyValue = '',
  id,
  errorMessage = '',
  value,
  required = true,
}) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <div className='Input'>
      <label htmlFor={name}>{name}</label>

      <input
        value={value}
        autoComplete='off'
        className='Input__input'
        key={keyValue}
        type={type}
        id={name}
        {...register(name, {
          required: {
            value: required,
            message: errorMessage || 'Trường này bắt buộc em ơi',
          },
          pattern: {
            value:
              /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
            message: errorMessage || 'invalid email address',
          },
        })}
      />
      {(errors[name] || errorMessage) && (
        <span className='Input__errMsg'>{errors[name]?.message}</span>
      )}
      {/* {errorMessage && <span className='Input__errMsg'>{errorMessage}</span>} */}
    </div>
  );
};

export default ValidateEmail;
