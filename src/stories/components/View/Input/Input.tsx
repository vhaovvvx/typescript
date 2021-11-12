import React, { ReactNode } from 'react';
import styles from './Input.module.scss';
import './Input3.scss';

interface InputProps {
  type: 'text' | 'number' | 'password';
  name: string;
}

function Input({ type, name }: InputProps) {
  return (
    <div className='input-container mt-1'>
      <label htmlFor='test-input'>{name}</label>
      <input
        type={type}
        defaultValue={name}
        name={name}
        id='test-input1111'
        className={styles.abcxyz}
      />
      <span>{name}</span>
    </div>
  );
}

export default Input;
