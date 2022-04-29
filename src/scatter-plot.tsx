import React from "react";
import Plot from "react-plotly.js";
import { UserDetails } from "./mock-interface";

interface IScatterPlot {
  X: any;
  Y: any;
  names: any;
  selection: any;
  highlighted: number;
}

const ScatterPlot = (props: IScatterPlot) => {
  let x: string[] = [];
  let y: number[] = [];
  if (props.selection) {
    console.log(props.selection);
  }

  //   const plotData: ISelDetail = {
  //     maths: selDetail.maths,
  //     science: selDetail.science,
  //     computer: selDetail.computer,
  //   };
  //   x = Object.keys(plotData);
  //   y = Object.values(plotData);
  return (
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
          //   {
          //     // x: props.selection ? props.selection.maths : null,
          //     // y: props.selection ? props.selection.science : null,
          //     // text: props.selection ? props.selection.userName : null,
          //     x: props.X[props.highlighted],
          //     y: props.Y[props.highlighted],
          //     text: props.names,

          //     type: "scatter",
          //     mode: "markers",
          //     marker: { color: "blue", symbol: "circle-open", size: 15 },
          //   },
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
        style={{ width: "100%", height: "100%" }}
      />
    </div>
  );
};

export default ScatterPlot;
