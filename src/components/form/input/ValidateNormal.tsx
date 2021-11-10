import './style.scss';

import React, { useState } from 'react';
import {
  useForm,
  SubmitHandler,
  FormProvider,
  useFormContext,
} from 'react-hook-form';

type TInputProps = {
  type: 'text' | 'number' | 'textarea' | 'password' | 'file';
  name: string;
  id?: string;
  errorMessage?: string;
  keyValue?: string;
  value?: string | number;
  required?: boolean;
  requiredEmail?: RegExp;
  disabled?: boolean;
  accept?: string;
};

const ValidateEmail: React.FC<TInputProps> = ({
  name,
  type,
  keyValue = '',
  id,
  errorMessage = '',
  value,
  required = true,
  disabled = false,
  accept = '',
}) => {
  const {
    register,
    formState: { errors },
  } =
    useFormContext();
    //   {
    //   mode:'onBlur'
    // }

  return (
    <div className='Input'>
      <label htmlFor={name}>{name}</label>
      <input
        // onChange={ahihiTest.onChange}
        disabled={false}
        value={value}
        autoComplete='off'
        className='Input__input'
        key={keyValue}
        type={type}
        id={name}
        accept={accept || ''}
        {...register(name, {
          required: {
            value: required,
            message: errorMessage || 'Trường này bắt buộc em ơi',
          },
        })}
        // style={{ opacity: 0 }}
      />
      {(errors[name] || errorMessage) && (
        <span className='Input__errMsg'>{errors[name]?.message}</span>
      )}
      {/* {errorMessage && <span className='Input__errMsg'>{errorMessage}</span>} */}
    </div>
  );
};

export default ValidateEmail;
