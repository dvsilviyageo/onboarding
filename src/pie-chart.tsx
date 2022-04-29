import * as React from "react";
import Plot from "react-plotly.js";
import { UserDetails } from "./mock-interface";

interface IPlotData {
  data: UserDetails[];
  selData: string;
}

const PieChart = (props: IPlotData) => {
  const data: UserDetails[] = props.data;
  console.log(props);
  // const pieData = data((pieData: { userName: string; }) => {
  //   pieData.userName === props.selData
  // })
  if (props.data && props.selData) {
    const pieData: any = data.find((value) => value.userName === props.selData);
    delete pieData.id;
    const pieDataValue: number[] = Object.values(pieData);
    const pieDataLabel: string[] = Object.keys(pieData);
    console.log(pieData);
    return (
      <div>
        {/* <h5 className="mb-5">pie chart</h5> */}
        <Plot
          data={[
            {
              values: pieDataValue,
              labels: pieDataLabel,
              type: "pie",
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
};

export default PieChart;
