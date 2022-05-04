import React, { useContext } from "react";
import Plot from "react-plotly.js";
import { ISelDetail, UserDetails } from "./mock-interface";

interface IBarChart {
  detailData: UserDetails;
  hoverDataName: string;
}

const BarChart = (props: IBarChart) => {
  const plotData: ISelDetail = {
    maths: props.detailData?.maths,
    science: props.detailData?.science,
    computer: props.detailData?.computer,
  };

  const x = Object.keys(plotData);
  const y = Object.values(plotData);

  if (props.detailData) {
    return (
      <div className="mt-2">
        <Plot
          data={[
            {
              x: x,
              y: y,
              type: "bar",
            },
          ]}
          layout={{
            width: 500,
            height: 500,
            yaxis: { title: "Marks" },
            xaxis: { title: "Subjects" },
            title: `Bar chart: ${props.detailData.userName}`,
          }}
        />
      </div>
    );
  } else {
    return null;
  }
};

export default BarChart;
