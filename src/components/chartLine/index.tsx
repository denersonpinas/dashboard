'use client'

import ReactApexChart from 'react-apexcharts';
import style from './chartLine.module.scss'

const state = {
  series: [
    {
      name: "Umidade",
      data: [2, 3, 4, 10, 40, 36, 80]
    },
    {
      name: "Temperatura",
      data: [10, 41, 35, 51, 49, 62, 69]
    }
  ],
  options: {
    chart: {
      width: "100%",
      zoom: {
        enabled: false
      }
    },
    colors: ['#4894FF', '#FF4848'],
    dataLabels: {
      enabled: false
    },
    stroke: {
      curve: 'straight'
    },
    grid: {
      show: false,
      row: {
        colors: ['transparent'],
        opacity: 0
      },
    },
    yaxis: {
      show: false,
    },
    xaxis: {
      axisBorder: {
        show: false
      },
      axisTicks: {
        show: false
      },
      labels: {
        show: false,
      }
      // categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug'],
    }
  },
};

export default function ChartLine() {

  return (
      <div id="chart" className={style['chart-mobile']}>
        <ReactApexChart
          options={state.options}
          series={state.series}
          type="line"
          height={200}
        />
      </div>
  )
}