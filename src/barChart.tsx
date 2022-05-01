import React from "react";
import Plot from "react-plotly.js";
import { UserDetails } from "./mock-interface";

interface IBarChart {
  detailData: UserDetails[];
  selection: any;
  hoverDataName: string;
}

const BarChart = (props: IBarChart) => {
  let name: string[] | any = [];
  let maths: number[] | any = [];
  let science: number[] | any = [];
  let computer: number[] | any = [];

  name = props.detailData.map((detail) => detail.userName);

  maths = props.detailData.map((detail) => detail.maths);
  science = props.detailData.map((detail) => detail.science);
  computer = props.detailData.map((detail) => detail.computer);

  return (
    <div className="mt-2">
      <Plot
        data={[
          {
            x: name,
            y: maths,
            type: "bar",
          },
          { type: "bar", x: name, y: science },

          { type: "bar", x: name, y: computer },
          //   {
          //     x: name,
          //     y: pieDataValue,
          //     type: "scatter",
          //     mode: "lines+markers",
          //     marker: { color: "red" },
          //   },
        ]}
        layout={{
          width: 500,
          height: 500,
          yaxis: { title: "Subjects" },
          xaxis: { title: "Names" },
          title: "visualization chart",
        }}
      />
    </div>
  );
};

export default BarChart;
