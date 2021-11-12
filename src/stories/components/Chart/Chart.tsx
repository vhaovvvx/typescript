import React from 'react';
import Chart from 'react-chartjs-2';

import { CCard, CCardBody, CCol, CCardHeader, CRow } from '@coreui/react';
import {
  CChartBar,
  CChartDoughnut,
  CChartLine,
  CChartPie,
  CChartPolarArea,
  CChartRadar,
} from '@coreui/react-chartjs';
import { Legend, Tooltip } from 'chart.js';

type TChart = {
  dataChart: any;
};

const Chart2: React.FC<TChart> = ({ dataChart }) => {
  const random = () => Math.round(Math.random() * 100);

  return (
    <CRow>
      <CCol xs={12}></CCol>
      <CCol xs={6}>
        <CCard className='mb-4'>
          <CCardHeader>Bar Chart</CCardHeader>
          <CCardBody>
            <Chart type='line' data={dataChart} />
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  );
};

export default Chart2;
