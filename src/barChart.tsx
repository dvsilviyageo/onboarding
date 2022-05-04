import React, { useContext, useEffect } from "react";
import Plot from "react-plotly.js";
import { ISelDetail, UserDetails } from "./mock-interface";
import { DragContext } from "./userContext";

interface IBarChart {
  detailData: UserDetails;
  hoverDataName: string;
}

const BarChart = (props: IBarChart) => {
  const { dragSelectNames, setDragSelectNames } = useContext(DragContext);

  console.log(props.detailData);
  const plotData: ISelDetail = {
    maths: props.detailData?.maths,
    science: props.detailData?.science,
    computer: props.detailData?.computer,
  };
  const x = Object.keys(plotData);

  const y = Object.values(plotData);
  console.log(y);

  // name = props.detailData.map((detail) => detail.userName);

  // maths = props.detailData.map((detail) => detail.maths);
  // science = props.detailData.map((detail) => detail.science);
  // computer = props.detailData.map((detail) => detail.computer);
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
