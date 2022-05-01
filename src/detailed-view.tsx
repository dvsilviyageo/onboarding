import React, { useState } from "react";
import Split from "react-split";
import { userDetails } from "./mock-data";
import { UserDetails } from "./mock-interface";
import PieChart from "./pie-chart";
import ScatterPlot from "./scatter-plot";
import Plot from "react-plotly.js";
import BarChart from "./barChart";

const Chart1 = () => {
  let x: string[] = [];
  let y: number[] = [];

  x = ["one", "two", "three"];

  y = [1, 2, 3];
  return (
    <div className="div-wrapper mt-2">
      <Plot
        data={[
          {
            x: x,
            y: y,
            type: "bar",
          },
          { type: "bar", x: ["four", "five", "six"], y: [4, 5, 6] },

          { type: "bar", x: ["seven", "eight", "nine"], y: [7, 8, 9] },
        ]}
        layout={{
          width: 400,
          height: 300,
          yaxis: { title: "Marks" },
          xaxis: { title: "Subjects" },
          title: "visualization chart",
        }}
      />
    </div>
  );
};

const DetailedView = () => {
  const [details] = useState<UserDetails[]>(userDetails);
  const [selDetail, setSelectedDetail] = useState<UserDetails | null>(null);
  const [hoverDataName, setHoverDataName] = useState("");

  const x = details.map((detail) => detail.maths);
  const y = details.map((detail) => detail.science);
  const names = details.map((detail) => detail.userName);

  const onDetailSelected = (detail: UserDetails) => {
    setSelectedDetail(detail);
    // setHighlighted
  };
  return (
    <Split
      direction="vertical"
      style={{ height: "calc(100vh - 4rem)" }}
      minSize={[600]}
    >
      <Split className="d-flex" minSize={[450, 500]}>
        <div className="container">
          <BarChart
            detailData={details}
            selection={selDetail}
            hoverDataName={hoverDataName}
          ></BarChart>
        </div>
        <div>
          <ScatterPlot
            X={x}
            Y={y}
            names={names}
            selection={selDetail}
            hoverDataName={hoverDataName}
            setHoverDataName={setHoverDataName}
            detailData={details}
          />
        </div>
        {/* <div>
          <PieChart data={details} selData={hoverDataName} />
        </div> */}
      </Split>
      <div></div>
    </Split>
  );
};

export default DetailedView;
