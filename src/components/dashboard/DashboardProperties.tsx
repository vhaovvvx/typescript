import { CCol, CContainer, CRow } from '@coreui/react';
import React from 'react';
import ArrowUp from '../../assets/image/caret-arrow-up.svg';

type DashProps = {};

const DashboardProperties = () => {
  return (
    <React.Fragment>
      <CContainer fluid>
        <CRow>
          <CCol sm='8' className='mt-5'>
            <div className='mx-3 px-4 bg-danger'>
              <div
                className='dashboard-content__title'
                style={{ display: 'flex', justifyContent: 'space-between' }}
              >
                <h2>My Properties</h2>
                <img src={ArrowUp} style={{ width: '18px' }} />
              </div>
            </div>
          </CCol>
          <CCol sm='4'>
            <div className='mx-3 px-4 bg-warning'>asdsadasd 2</div>
          </CCol>
        </CRow>
      </CContainer>
    </React.Fragment>
  );
};

export default DashboardProperties;
