import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Chart2 from './Chart';
import { dataChartRoot } from './DataChart';

export default {
  title: 'Example/Charts',
  component: Chart2,
} as ComponentMeta<typeof Chart2>;

const Template: ComponentStory<typeof Chart2> = (args) => <Chart2 {...args} />;

export const Chart = Template.bind({});
Chart.args = {
  dataChart: dataChartRoot,
  //   user: {},
};
