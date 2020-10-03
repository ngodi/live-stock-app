import React from "react";
import Chart from "react-google-charts";


class MyChart extends React.Component {
  render() {
    return (
      <div className="chart">
        <Chart
          chartType="ColumnChart"
          width="600px"
          height="400px"
          data={this.props.data}
        />
      </div>
    );
  }
}

export default MyChart;