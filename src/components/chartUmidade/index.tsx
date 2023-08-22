'use client'

import ReactApexChart from 'react-apexcharts';
import style from './chartUmidade.module.scss'

const state = {
  series: [{
    name: 'Inflation',
    data: [2.3, 3.1, 4.0, 10.1, 4.0, 3.6]
  }],
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
    plotOptions: {
      bar: {
        borderRadius: 0,
        dataLabels: {
          position: 'top', // top, center, bottom
        },
      }
    },
    dataLabels: {
      enabled: true,
      formatter: function (val) {
        return val + "%";
      },
      offsetY: -20,
      style: {
        fontSize: '12px',
        colors: ["#001C05"]
      }
    },
    colors: ['#001C05'],
    xaxis: {
      categories: [
        "20:00",
        "20:00",
        "20:00",
        "20:00",
        "20:00",
        "20:00"
      ],
      position: 'bottom',
      axisBorder: {
        show: false
      },
      axisTicks: {
        show: false
      },
      crosshairs: {
        fill: {
          type: 'gradient',
          gradient: {
            colorFrom: '#fff',
            colorTo: '#fff',
            stops: [0, 100],
            opacityFrom: 0.4,
            opacityTo: 0.5,
          }
        }
      },
      tooltip: {
        enabled: true,
      }
    },
    yaxis: {
      axisBorder: {
        show: false
      },
      axisTicks: {
        show: false,
      },
      labels: {
        show: false,
        formatter: function (val) {
          return val + "%";
        }
      }
    
    }
  },
};

export function ChartUmidade() {

  return (
    <div id="chart" className={style['chart']}>
      <ReactApexChart
        options={state.options}
        series={state.series}
        type="bar"
        height={107}
      />
    </div>
  )
}