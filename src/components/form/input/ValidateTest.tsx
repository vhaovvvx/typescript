import './style.scss';

import React from 'react';
import {
  useForm,
  SubmitHandler,
  FormProvider,
  useFormContext,
} from 'react-hook-form';

function ValidateTest(props: { name: string; type: string }) {
  type FormValues = {
    [name: string]: any;
    // name: string;
    username: string;
    firstName: string;
    lastName: string;
    age: number;
    gender: string;
    developer: boolean;
  };
  const { name, type } = props;

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>();

  console.log('errors', errors);

  return (
    <form
      onSubmit={handleSubmit((data) => {
        console.log(data);
      })}
    >
      <label htmlFor='username' className='input--text-title'>
        First Name
      </label>
      <input
        type={type}
        name-data={name}
        data-name='abcxyz'
        {...register(
          //   `${name}`,
          name,
          {
            required: 'This is required',
            pattern: {
              value:
                /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i,
              message: 'email required',
            },
          }
          // , { pattern: /^[A-Za-z]+$/i }
        )}
        defaultValue='test'
        id={name}
      />
      {errors[name] && <span>{errors[name]?.message}</span>}

      {/* <label htmlFor='lastName' className='input--text-title'>
        Last Name
      </label>
      <input
        id='lastName'
        {...register('lastName', {
          required: 'This is required',
          maxLength: { value: 4, message: 'You exceeded the max' },
        })}
      />
      {errors.lastName && <span>{errors.lastName?.message}</span>}

      <label htmlFor='age' className='input--text-title'>
        Age
      </label>

      <input
        type='number'
        id='age'
        {...register('age', {
          required: 'nhap tuoi chua ?',
          validate: {},
        })}
      />
      {errors.age && <span>{errors.age?.message}</span>}

      <select {...register('gender')}>
        <option value=''>--Select--</option>
        <option value='Male'>Male</option>
        <option value='Female'>Female</option>
      </select>

      <label htmlFor='developer' className='input--text-title'>
        Are you a Developer?
      </label>
      <input
        type='checkbox'
        id='developer'
        {...register('developer', {
          required: 'chua tich ma doi submit',
        })}
      />
      {errors.developer && <span>{errors.developer?.message}</span>} */}

      <input type='submit' />
    </form>
  );
}

export default ValidateTest;
