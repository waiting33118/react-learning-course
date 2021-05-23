import ChartBar from './ChartBar'
import './Chart.css'

const Chart = (props) => {
  const dataPointValues = props.dataPoints.map((dataPoint) => dataPoint.value)
  const totalMaximun = Math.max(...dataPointValues)

  return (
    <div className="chart">
      {props.dataPoints.map((dataPoint) => (
        <ChartBar
          value={dataPoint.value}
          maxValue={totalMaximun}
          label={dataPoint.label}
          key={dataPoint.label}
        />
      ))}
    </div>
  )
}

export default Chart
