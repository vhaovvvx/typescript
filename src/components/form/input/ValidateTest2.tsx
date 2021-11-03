import React from 'react';
import { useForm, useFormContext } from 'react-hook-form';

type TInputProps = {
  type: 'text' | 'number' | 'textarea';
  name: string;
  id?: string;
  errorMessage?: string;
  keyValue?: string;
  value?: string | number;
  required?: boolean;
};

const ValidateTest2: React.FC<TInputProps> = ({
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
  } = useForm();
  return (
    <div className='Input'>
      <input
        value={value}
        autoComplete='off'
        className='Input__input'
        key={keyValue}
        type={type}
        id={id}
        {...register(name, {
          required: { value: required, message: 'Bắt buộc' },
        })}
      />
      {(errors[name] || errorMessage) && (
        <span className='Input__errMsg'>{errors[name].message}</span>
      )}
      {errorMessage && <span className='Input__errMsg'>{errorMessage}</span>}
    </div>
  );
};

export default ValidateTest2;
