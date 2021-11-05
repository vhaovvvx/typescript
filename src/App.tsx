import React, { useState } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import CheckBox from './components/form/CheckBox/CheckBox';
import ValidateEmail from './components/form/input/ValidateEmail';
import ValidateNormal from './components/form/input/ValidateNormal';

import './App.css';
import ShowPopup from './components/form/CheckBox/ShowPopup';

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const methods = useForm();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = methods;
  console.log(errors);
  const getDataForm = (data: any) => {
    console.log(data);
  };

  const clickHandlerInput = (data: boolean) => {
    setIsOpen(data);
  };

  return (
    <FormProvider {...methods}>
      <form onSubmit={handleSubmit((data) => getDataForm(data))}>
        <ValidateEmail
          // errorMessage='chua nhap username nay '
          name='username'
          type='text'
          required={true}
        ></ValidateEmail>

        <ValidateNormal
          name='password'
          type='password'
          required={true}
        ></ValidateNormal>

        <ValidateNormal
          name='test'
          type='text'
          required={false}
        ></ValidateNormal>
        <CheckBox
          nameCheckBox='ahihi'
          contentCheckMark='đây là nội dung checkmark'
        ></CheckBox>

        <input type='submit' onClick={() => setIsOpen(true)} />
        {/* {errors.ahihi?.message && isOpen && (
          <ShowPopup openPopup={clickHandlerInput} />
        )} */}
      </form>
    </FormProvider>
  );
}

export default App;
