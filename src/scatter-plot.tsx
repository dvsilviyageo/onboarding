import React, { useState, useContext } from "react";
import Plot from "react-plotly.js";
import { UserDetails } from "./mock-interface";
import PieChart from "./pie-chart";
// import { DragContext } from "./userContext";
// import DragContext from './userContext';

interface IScatterPlot {
  X: any;
  Y: any;
  names: any;
  selection: number[];
  hoverDataName: string;
  setHoverDataName: any;
  detailData: UserDetails[];
  dragSelectNames: string[];
  setDragSelectNames: (dragSelectNames: string[]) => void;
}

// const [dragSelectNames, setDragSelectNames] = useContext(DragContext);

const ScatterPlot = (props: IScatterPlot) => {
  const [dragSelectNames, setDragSelectNames] = useState<string[]>([]);
  const [showHoverPieChart, setShowHoverPieChart] = useState(false);
  const [showLineUpPieChart, setShowLineUpPieChart] = useState(false);

  const selectedData: UserDetails = props.detailData[props.selection[0]];

  let x: string[] = [];
  let y: number[] = [];

  const onScatterPlotHover = (e: any) => {
    setShowHoverPieChart(true);
    props.setHoverDataName(e.points[0].text);
  };

  const onScatterPlotUnHover = () => {
    setShowHoverPieChart(false);
    setShowLineUpPieChart(true);
  };

  const onDragSelect = (e: any) => {
    console.log(e.points);
    const dragSelNames = e.points.map((b: any) => b.text);
    setDragSelectNames(dragSelNames);
    console.log(dragSelectNames);
  };

  // const onSelectFromLineUp = (e: any) => {
  //   console.log(e);
  // };

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
          onUnhover={onScatterPlotUnHover}
          onSelected={onDragSelect}
        />
      </div>

      <div className="div-absolute">
        <PieChart
          data={props.detailData}
          selData={props.hoverDataName}
          showHoverPieChart={showHoverPieChart}
        ></PieChart>

        <PieChart
          data={props.detailData}
          selData={selectedData?.userName}
          showHoverPieChart={showLineUpPieChart}
        ></PieChart>
      </div>
    </div>
  );
};

export default ScatterPlot;
