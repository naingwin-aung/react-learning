import ChartBar from "./ChartBar";
import "./Chart.css";

function Chart(props) {
  return (
    <div className="chart">
      {props.dataPoints.map((dataPoint, index) => (
        <ChartBar
          key={index}
          value={dataPoint.value}
          maxValue={null}
          label={dataPoint.label}
        />
      ))}
    </div>
  );
}

export default Chart;
