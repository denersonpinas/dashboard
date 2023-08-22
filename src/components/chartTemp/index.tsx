'use client'

import ReactApexChart from 'react-apexcharts';
import style from './chartTemp.module.scss'

const state = {
  series: [
    {
      name: "Temperatura",
      data: [
        29,
        9,
        13,
        30,
        5,
        25
      ],
    }
  ],
  options: {
    chart: {
      zoom: {
        enabled: false
      },
    },
    grid: {
      show: false,
      row: {
        colors: ['transparent'],
        opacity: 0
      },
    },
    colors: ['#001C05'],
    dataLabels: {
      enabled: true,
    },
    stroke: {
      width: 0,
      curve: 'smooth'
    },
    labels:[
      "20:00",
      "20:00",
      "20:00",
      "20:00",
      "20:00",
      "20:00"
    ],
    yaxis: {
      show: false,
    },
    xaxis: {
      type: "time",
    },
    tooltip: {
      x: {
        format: "HH:mm",
      },
    },
  },
};

export default function ChartTemp() {

  return (
    <div id="chart" className={style['chart']}>
      <ReactApexChart
        options={state.options}
        series={state.series}
        type="area"
        height={107}
      />
    </div>
  )
}