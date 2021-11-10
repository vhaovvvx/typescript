import { copyFileSync } from 'fs';
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

  const [isShowPopup, setIsShowPopup] = useState(true);

  const show = (data: boolean) => {
    {
      data ? setIsShowPopup(!data) : setIsShowPopup(data);
    }
    // console.log(data);
    // setIsShowPopup(data);
  };

  // const StatePopup = (data: boolean) => {
  //   setStatePopup(data);
  // };
  // console.log(errors['ahihi']);

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
      {errors[nameCheckBox] && isShowPopup && (
        <ShowPopup title={errorMessage} name='test' openPopup={show} />
      )}
    </div>
  );
};
export default CheckBox;
