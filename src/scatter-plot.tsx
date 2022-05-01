import React, { useState } from "react";
import Plot from "react-plotly.js";
import { UserDetails } from "./mock-interface";
import PieChart from "./pie-chart";

interface IScatterPlot {
  X: any;
  Y: any;
  names: any;
  selection: any;
  hoverDataName: string;
  setHoverDataName: any;
  detailData: UserDetails[];
}

const ScatterPlot = (props: IScatterPlot) => {
  let x: string[] = [];
  let y: number[] = [];

  const onScatterPlotHover = (e: any) => {
    console.log(e.points[0].text);
    props.setHoverDataName(e.points[0].text);
  };

  return (
    <div className="container div-relative">
      <div className="mt-2">
        <Plot
          data={[
            {
              x: props.X,
              y: props.Y,
              type: "scatter",
              text: props.names,
              selectedpoints: props.selection,
              mode: "markers",
              marker: { color: "red" },
            },
          ]}
          layout={{
            autosize: true,
            yaxis: { title: "Science" },
            xaxis: { title: "Maths" },
            title: "visualization chart Maths Vs. Science",
            dragmode: "lasso",
          }}
          config={{ responsive: true }}
          useResizeHandler={true}
          style={{ width: "60%", height: "60%" }}
          onHover={onScatterPlotHover}
        />
      </div>
      <div className="div-absolute">
        <PieChart
          data={props.detailData}
          selData={props.hoverDataName}
        ></PieChart>
      </div>
    </div>
  );
};

export default ScatterPlot;
