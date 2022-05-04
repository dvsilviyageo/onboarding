import * as React from "react";
import Plot from "react-plotly.js";
import { UserDetails } from "./mock-interface";

interface IPlotData {
  data: UserDetails[];
  selData: string | undefined;
  showHoverPieChart?: boolean;
}

const PieChart = (props: IPlotData) => {
  const data: UserDetails[] = props.data;

  if (props.data && props.selData) {
    const pieData: any = data.find((value) => value.userName === props.selData);
    delete pieData.id;
    const pieDataValue: number[] = Object.values(pieData);
    const pieDataLabel: string[] = Object.keys(pieData);
    console.log(pieData);
    if (props.showHoverPieChart === true) {
      return (
        <div>
          <Plot
            data={[
              {
                values: pieDataValue,
                labels: pieDataLabel,
                type: "pie",
                // textinfo: "none",
              },
            ]}
            layout={{
              height: 280,
              width: 280,
              title: props.selData,
            }}
          ></Plot>
        </div>
      );
    } else {
      return null;
    }
  } else {
    return null;
  }
};

export default PieChart;
