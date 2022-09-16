import ChartBar from './ChartBar'
import './Chart.css'

const Chart = (props) => {
	const values = props.chartData.map(data => data.value)
	const maxTotal = Math.max(...values)
	return (
		<div className='chart'>
			{props.chartData.map(data => (
				<ChartBar
					key={data.label}
					value={data.value}
					max={maxTotal}
					label={data.label}
				/>
			))}
		</div>
	)
}

export default Chart