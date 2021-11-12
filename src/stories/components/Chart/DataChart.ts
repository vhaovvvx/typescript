export const dataChartRoot = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
  datasets: [
    {
      type: 'bar',
      label: 'GitHub Commits',
      backgroundColor: '#f87979',
      data: [40, 20, 12, 39, 10, 40, 39, 80, 40],
      order: 1,
    },
    {
      type: 'line',
      label: 'GitHub Commits 2',
      pointBorderColor: 'black',
      backgroundColor: `black !important`,
      data: [30, 11, 20, 60, 22, 20, 21, 40, 50],
      order: 0,
    },
  ],
};
