import React, { useState } from 'react';
import { useFormContext } from 'react-hook-form';

import './CheckBox.scss';
import ShowPopup from './ShowPopup';

type TCheckBoxProps = {
  nameCheckBox: string;
  errorMessage?: string;
  required?: boolean;
  contentCheckMark?: string;
};

const CheckBox: React.FC<TCheckBoxProps> = ({
  nameCheckBox,
  errorMessage = 'Trường này bắt buộc em ơi 2',
  required = true,
  contentCheckMark,
}) => {
  const [statePopup, setStatePopup] = useState(false);
  const {
    register,
    formState: { errors },
  } = useFormContext();

  // const StatePopup = (data: boolean) => {
  //   setStatePopup(data);
  // };
  // console.log(errors['ahihi']);

  const showAlert = (data: any) => {
    console.log(data);
    alert(data);
  };

  return (
    <div className='container__input--checkbox'>
      <input
        // disabled={false}
        // value={value}
        value='asdasdasd'
        autoComplete='off'
        className='Input__input'
        id='Input__checkbox'
        type='checkbox'
        // id={id}
        {...register(nameCheckBox, {
          required: {
            value: required,
            message: errorMessage || 'Trường này bắt buộc em ơi1',
          },
        })}
      />
      <label htmlFor='Input__checkbox' className='input__content '>
        {contentCheckMark}
      </label>
      <label
        htmlFor='Input__checkbox'
        className='checkmark label__checkbox input__content'
      ></label>
      <label htmlFor='Input__checkbox' className='radio '></label>
      {/* {(errors[nameCheckBox] || errorMessage) && (
        <span className='Input__errMsg'>{errors[nameCheckBox]?.message}</span>
      )} */}
      {errors[nameCheckBox] ? (
        <ShowPopup title={errorMessage} name='test' openPopup={true} />
      ) : null}
    </div>
  );
};
export default CheckBox;
