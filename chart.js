import { colors } from './colors.js'
export const createChart = ({ container, chartType, min, chartLib, data }) => {
  if (chartLib === 'ChartJS') {
    createChartJSChart({
      container,
      data,
      chartType
    })
  } else if (chartLib === 'HiCharts') {
    createHiChartsChart({
      container,
      data: filteredData,
      chartType
    })
  }
}

const removeChart = container => {
  const containerDiv = document.querySelector(`#${container}`)
  const canvas = containerDiv.querySelector('canvas')
  const div = containerDiv.querySelector('div')
  if (canvas) {
    canvas.parentNode.removeChild(canvas)
  }
  if (div) {
    div.parentNode.removeChild(div)
  }
}

const createCanvas = container => {
  const canvas = document.createElement('canvas')
  canvas.setAttribute('width', '800')
  canvas.setAttribute('height', '500')
  canvas.style.margin = 'auto'
  container.appendChild(canvas)
  return canvas
}

const getFilteredData = (datas, min) =>
  datas.reduce(
    (acc, current) => {
      if (current.value >= min) {
        acc.label.push(current.label)
        acc.data.push(current.value)
        acc.backgroundColor.push(`rgba(${current.color}, 0.2)`)
        acc.borderColor.push(`rgba(${current.color}, 1)`)
      }
      return acc
    },
    {
      label: [],
      data: [],
      backgroundColor: [],
      borderColor: []
    }
  )

const sortData = datas =>
  datas.concat().sort((a, b) => {
    if (a.value < b.value) return -1
    if (a.value > b.value) return 1
    return 0
  })

const createChartJSChart = ({ container, data, chartType }) => {
  const chartContainer = document.querySelector(`#${container}`)
  removeChart(container)
  const canvas = createCanvas(chartContainer)
  if (chartType === 'bubble') {
    return createChartJSBubbleChart({ canvas, data })
  }
  return new Chart(canvas.getContext('2d'), {
    type: chartType,
    data: {
      labels: Object.keys(data[0].rain),
      datasets: data.map((item, index) => {
        return {
          label: item.district,
          data: Object.values(item.rain),
          borderWidth: 1,
          backgroundColor: `#${colors[index]}`
        }
      })
    },
    options: {
      legend: {
        display: true
      },
      responsive: false,
      scales: {
        yAxes: [
          {
            ticks: {
              beginAtZero: true
            }
          }
        ]
      }
    }
  })
}

const createHiChartsChart = ({ container, data, chartType }) => {
  let type = chartType
  if (chartType === 'bar') type = 'column'
  removeChart(container)
  return Highcharts.chart(container, {
    plotOptions: {
      column: {
        pointPadding: 0,
        borderWidth: 10,
        groupPadding: 0,
        shadow: false
      }
    },
    chart: {
      type
    },
    title: {
      text: '# of votes'
    },
    xAxis: {
      categories: data.label
    },
    yAxis: {
      title: {
        text: '# of votes'
      }
    },
    series: [
      {
        name: null,
        data: data.data
      }
    ]
  })
}

const createChartJSBubbleChart = ({ canvas, data = [] }) => {
  console.log(
    data.data.map((item, index, arr) => {
      return {
        x: ((index + 1) * canvas.width) / (arr.length * 2),
        y: item.value,
        r: 10
      }
    })
  )
  return new Chart(canvas.getContext('2d'), {
    type: 'bubble',
    data: {
      datasets: [
        {
          data: data.data.map((item, index, arr) => {
            return {
              x: ((index + 1) * canvas.width) / (arr.length * 2),
              y: item,
              r: 10
            }
          }),
          backgroundColor: data.backgroundColor,
          borderColor: data.borderColor
        }
      ]
    },
    options: {
      responsive: false
    }
  })
}
