import { CCard, CCardBody, CCol, CContainer, CRow } from '@coreui/react';
import React, { useEffect, useState } from 'react/';
import Chart from 'react-chartjs-2';
import { PathRouteProps } from 'react-router';
import ArrowUp from '../../assets/image/caret-arrow-up.svg';
import Charts from '../../views/charts/chartjs';
import { Link } from 'react-router-dom';

interface IRouteProps extends PathRouteProps {
  component: React.FC;
}

type DashProps = {
  path?: string;
  component?: any;
};
const rand = () => Math.round(Math.random() * 20);

const labels = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
];

export const dataSet = {
  labels,
  datasets: [
    {
      type: 'line' as const,
      label: 'Dataset 1',
      borderColor: 'rgb(255, 99, 132)',
      backgroundColor: 'red',
      borderWidth: 2,
      fill: false,
      order: 1,

      data: [
        rand(),
        rand(),
        rand(),
        rand(),
        rand(),
        rand(),
        rand(),
        rand(),
        rand(),
        rand(),
        rand(),
      ],
    },
    {
      type: 'bar' as const,
      label: 'Dataset 2',
      backgroundColor: 'rgb(75, 192, 192)',
      data: [
        rand(),
        rand(),
        rand(),
        rand(),
        rand(),
        rand(),
        rand(),
        rand(),
        rand(),
        rand(),
        rand(),
      ],
      borderColor: 'white',
      borderWidth: 2,
      order: 1,
    },
    {
      order: 0,
      type: 'line' as const,
      label: 'Dataset 3',
      backgroundColor: 'rgb(53, 162, 235)',
      borderColor: 'rgb(53, 162, 235)',

      data: [
        rand(),
        rand(),
        rand(),
        rand(),
        rand(),
        rand(),
        rand(),
        rand(),
        rand(),
        rand(),
        rand(),
      ],
    },
  ],
};

const DashboardProperties: React.FC<DashProps> = ({}) => {
  // const [scroll, setScroll] = useState(() => {
  //   const initScroll = localStorage.getItem("scroll") || "0";
  //   return initScroll;
  // });

  useEffect(() => {
    const initScroll = parseInt(sessionStorage.getItem('scroll') || 'asdas');
    console.log(initScroll);
    window.scrollTo(0, initScroll);
  }, []);

  const handelScroll = (e: any) => {
    console.log('co chay vao');
    const numberScroll = window.scrollY;

    sessionStorage.setItem('scroll', `${numberScroll}`);
  };
  window.addEventListener('scroll', handelScroll);

  return (
    <React.Fragment>
      <CContainer fluid style={{ height: 5000 }} onScroll={handelScroll}>
        <CRow>
          <CCol sm='8' className='mt-5'>
            <div className='dashboard-content mx-3 p-4 border'>
              <div
                className='dashboard-content__title '
                style={{ display: 'flex', justifyContent: 'space-between' }}
              >
                <h2 style={{ fontSize: '38px', fontWeight: 'bold' }}>
                  My Properties (3)
                </h2>
                <img src={ArrowUp} style={{ width: '18px' }} />
              </div>

              <div className='dashboard-content__details  my-4 d-flex'>
                <div style={{ maxWidth: '420px' }}>
                  <h3
                    className='details--title my-4'
                    style={{ fontSize: '24px' }}
                  >
                    3 properties
                  </h3>

                  <div className='details--price d-flex my-4'>
                    <CRow>
                      <CCol xl={6}>
                        <div className='my-3 fs-5 fw-bold'>Average equity</div>
                        <div style={{ color: '#7d32f4', fontSize: '45px' }}>
                          XX.X%
                        </div>
                      </CCol>
                      <CCol xl={6}>
                        <div className='my-3 fs-5 fw-bold'>
                          Average net yield
                        </div>
                        <div style={{ color: '#7d32f4', fontSize: '45px' }}>
                          XX.X%
                        </div>
                      </CCol>
                      <CCol xl={6}>
                        <div className='my-3 fs-5 fw-bold'>
                          Average growth yield
                        </div>
                        <div style={{ color: '#7d32f4', fontSize: '45px' }}>
                          XX.X%
                        </div>
                      </CCol>
                      <CCol xl={6}>
                        <div className='my-3 fs-5 fw-bold'>
                          Projected cash flow
                        </div>
                        <div style={{ color: '#7d32f4', fontSize: '45px' }}>
                          $XXX
                        </div>
                      </CCol>
                      <Charts></Charts>
                    </CRow>
                  </div>
                </div>
                <div
                  className='dashboard-content__chart'
                  style={{ width: '100%' }}
                >
                  <CCard
                    className=''
                    style={{ border: '1px solid black', borderRadius: '0' }}
                  >
                    <CCardBody>
                      <Chart
                        type='line'
                        data={dataSet}
                        options={{
                          responsive: true,
                          plugins: {
                            legend: {
                              display: true,
                            },
                            tooltip: {
                              enabled: true,
                            },
                          },
                        }}
                      />
                    </CCardBody>
                  </CCard>
                </div>
              </div>
            </div>
          </CCol>
          <CCol sm='4'>
            <div className='m-3 px-4 bg-warning'>
              <Link to='/WishList' style={{ position: 'fixed' }}>
                asdas
              </Link>
            </div>
          </CCol>
        </CRow>
      </CContainer>
    </React.Fragment>
  );
};

export default DashboardProperties;
