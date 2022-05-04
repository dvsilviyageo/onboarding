import React, { useState } from "react";
import Split from "react-split";
import { userDetails } from "./mock-data";
import { UserDetails } from "./mock-interface";
import ScatterPlot from "./scatter-plot";
import Plot from "react-plotly.js";
import BarChart from "./barChart";
import { DragContext } from "./userContext";
import LineUpComponent from "./line-up";

const DetailedView = () => {
  const [details] = useState<UserDetails[]>(userDetails);
  const [selDetail, setSelectedDetail] = useState<UserDetails | null>(null);
  const [hoverDataName, setHoverDataName] = useState("");
  const [dragSelectNames, setDragSelectNames] = useState<string[]>([]);
  const [lineUpSelection, setLineUpSelection] = useState([]);

  const x = details.map((detail) => detail.maths);
  const y = details.map((detail) => detail.science);
  const names = details.map((detail) => detail.userName);

  // const selectedIndex = lineUpSelection[0];
  const selectedData: UserDetails = details[lineUpSelection[0]];

  return (
    <Split
      direction="vertical"
      style={{ height: "calc(100vh - 4rem)" }}
      minSize={[600]}
    >
      <Split className="d-flex" minSize={[450, 500]}>
        <DragContext.Provider value={{ dragSelectNames, setDragSelectNames }}>
          <div className="container">
            <ScatterPlot
              X={x}
              Y={y}
              names={names}
              selection={lineUpSelection}
              // selection={selDetail}
              hoverDataName={hoverDataName}
              setHoverDataName={setHoverDataName}
              detailData={details}
              dragSelectNames={dragSelectNames}
              setDragSelectNames={setDragSelectNames}
            />
          </div>

          <div>
            <BarChart
              detailData={selectedData}
              hoverDataName={hoverDataName}
            ></BarChart>
          </div>
        </DragContext.Provider>
      </Split>

      <div>
        <div className="container mt-5">
          <LineUpComponent
            data={details}
            selection={lineUpSelection}
            onSelectionChange={setLineUpSelection}
          />
        </div>
      </div>
    </Split>
  );
};

export default DetailedView;
