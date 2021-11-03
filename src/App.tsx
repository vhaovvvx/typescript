import React from 'react';
import { FormProvider } from 'react-hook-form';
import ValidateTest from './components/form/input/ValidateTest';
import ValidateTest2 from './components/form/input/ValidateTest2';

function App() {
  return (
    <div>
      {/* <ValidateTest2 name='passemail' type='text'></ValidateTest2> */}
      <ValidateTest name='username' type='text'></ValidateTest>
      <ValidateTest name='password' type='password'></ValidateTest>
      <ValidateTest name='test1' type='date'></ValidateTest>
      <input type='submit' />
    </div>
  );
}

export default App;
