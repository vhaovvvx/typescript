import React, { useEffect, useState } from 'react';
import CheckBox from './components/form/CheckBox/CheckBox';
import ValidateEmail from './components/form/input/ValidateEmail';
import ValidateNormal from './components/form/input/ValidateNormal';
import title from './assets/image/navi_title.png';
import {
  useForm,
  SubmitHandler,
  FormProvider,
  useFormContext,
} from 'react-hook-form';
import {
  CCard,
  CCardBody,
  CCol,
  CCardHeader,
  CRow,
  CContainer,
} from '@coreui/react';
import {
  CChartBar,
  CChartDoughnut,
  CChartLine,
  CChartPie,
  CChartPolarArea,
  CChartRadar,
} from '@coreui/react-chartjs';
// import { DocsCallout } from 'src/components';

import './App.css';
import ShowPopup from './components/form/CheckBox/ShowPopup';
import Charts from './views/charts/chartjs';
import { Button } from 'reactstrap';
import Buttons from './views/buttons/Button';
import PopupYoutube from './components/Popup/Youtube/PopupYoutube';
import { Brand, Hexagon } from './assets/Icon/Icon';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link,
  BrowserRouter,
} from 'react-router-dom';


function App() {
  const [isOpen, setIsOpen] = useState(false);
  const methods = useForm({
    mode: 'onBlur',
  });

  console.log(methods);
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

  const postRequest = (data: any) => {
    console.log(data);
  };

  const api = 'https://608619ffd14a870017578a86.mockapi.io/persona/email';

  // useEffect(() => {
  //   fetch(api, {
  //     method: 'POST',

  //     headers: {
  //       'Content-type': 'application/json; charset=UTF-8',
  //     },
  //   })
  //     .then((res) => res.json())
  //     .then((data) => console.log(data));
  // });

  return (
    <Router>
      <div className='' style={{ backgroundColor: 'white' }}>
        <div style={{ display: 'flex' }}>
          <div className='navigation-container'>
            <img src={title} className='navigation-container__title' />
            <ul
              style={{ textAlign: 'left' }}
              className='navigation-container__ul-items'
            >
              <li>
                <Hexagon></Hexagon>
                <Link to='/' className='ul-item'>
                  Dashboard
                </Link>
              </li>
              <li>
                <Hexagon></Hexagon>

                <Link to='/Portfolio' className='ul-item'>
                  My portfolio
                </Link>
              </li>
              <li>
                <Hexagon></Hexagon>

                <Link to='/Pending' className='ul-item'>
                  Pending properties
                </Link>
              </li>
              <li>
                <Hexagon></Hexagon>

                <Link to='/Search' className='ul-item'>
                  Search
                </Link>
              </li>

              <li>
                <Hexagon></Hexagon>

                <Link to='/Notifications' className='ul-item'>
                  Notifications
                </Link>
              </li>
              <li>
                <Hexagon></Hexagon>

                <Link to='/WishList' className='ul-item'>
                  WishList
                </Link>
              </li>
            </ul>
          </div>
         
          <Routes>
            <Route path='/' element={<div>Dashboard</div>}></Route>
            <Route path='/portfolio' element={<div>My portfolio</div>}></Route>
            <Route
              path='/Pending'
              element={<div>Pending properties</div>}
            ></Route>
            <Route path='/Search' element={<div>Search</div>}></Route>
            <Route
              path='/Notifications'
              element={<div>Notifications</div>}
            ></Route>
            <Route path='/WishList' element={<div>WishList</div>}></Route>
          </Routes>
        </div>
      </div>

      {/* <PopupYoutube hrefLink='https://www.youtube.com/embed/nihTJrochFI'></PopupYoutube> */}
      {/* <Buttons></Buttons> */}
      {/* <Charts></Charts> */}
      {/* <div className='App'>
         {errors && isOpen && <ShowPopup openPopup={clickHandlerInput} />} 
        <FormProvider {...methods}>
          <form onSubmit={handleSubmit((data) => getDataForm(data))}>
            <ValidateEmail
              // errorMessage='chua nhap username nay '
              name='username'
              type='text'
              required={true}
              value='vhaovvvx@gmail.com'
            ></ValidateEmail>

            <ValidateNormal
              name='password'
              type='password'
              required={true}
              value='sadasd'
            ></ValidateNormal>

            <ValidateNormal
              name='test'
              type='text'
              required={false}
            ></ValidateNormal>

            <ValidateNormal
              name='checkfile'
              type='file'
              required={true}
              accept='image/png'
            ></ValidateNormal>

            <CheckBox
              nameCheckBox='ahihi'
              contentCheckMark='đây là nội dung checkmark'
            ></CheckBox>

            <input type='submit' onClick={() => !isOpen} />
          </form>
        </FormProvider>
      </div> */}
    </Router>
  );
}

export default App;
