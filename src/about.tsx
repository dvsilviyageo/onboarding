import React, { useState } from "react";
import { userDetails } from "./mock-data";
import { UserDetails, ISelDetail } from "./mock-interface";
import Plot from "react-plotly.js";
import LineUpComponent from "./line-up";

const About = () => {
  const [details] = useState<UserDetails[]>(userDetails);

  const [selDetail, setSelectedDetail] = useState<UserDetails | null>(null);

  const onDetailSelected = (detail: UserDetails) => {
    setSelectedDetail(detail);
  };

  const Chart = () => {
    let x: string[] = [];
    let y: number[] = [];

    if (selDetail) {
      const plotData: ISelDetail = {
        maths: selDetail.maths,
        science: selDetail.science,
        computer: selDetail.computer,
      };

      x = Object.keys(plotData);

      y = Object.values(plotData);
      return (
        <div className="div-wrapper mt-2">
          <Plot
            data={[
              {
                x: x,
                y: y,
                type: "scatter",
                mode: "lines+markers",
                marker: { color: "red" },
              },
              { type: "bar", x: x, y: y },
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
    } else {
      return null;
    }
  };

  const SelectedUserDetail = () => {
    if (selDetail) {
      return (
        <div className="col md-4 mt-2 ms-3 ">
          <div className="text-wrapper">
            <p className="fst-italic"> Selected user:</p>
            <p className="fw-light">
              Username:{" "}
              <span className="fw-lighter">{selDetail?.userName}</span>
            </p>
            <p className="fw-light">
              Id: <span className="fw-lighter">{selDetail?.id}</span>
            </p>
            {/* <button>LineView</button> */}
          </div>
        </div>
      );
    } else {
      return null;
    }
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col md-6">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat
            necessitatibus nobis asperiores reiciendis quas eum voluptates,
            repudiandae harum ratione hic omnis rem ipsa est eos unde corporis
            quam eius voluptatibus.
          </p>
          <table className="table">
            <thead className="thead-dark">
              <tr>
                <th scope="col">#</th>
                <th scope="col">Name</th>
                <th scope="col">Maths</th>
                <th scope="col">Science</th>
                <th scope="col">Computer</th>
              </tr>
            </thead>
            <tbody>
              {details.map((detail) => {
                return (
                  <tr key={detail.id}>
                    <th scope="row">
                      <input
                        type="radio"
                        name="radio-id"
                        onChange={() => onDetailSelected(detail)}
                      ></input>
                    </th>
                    <td>{detail.userName}</td>
                    <td>{detail.maths}</td>
                    <td>{detail.science}</td>
                    <td>{detail.computer}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>

        <div className="col md-4">
          <SelectedUserDetail />
          <Chart />
          {/* <LineUpComponent /> */}
        </div>
      </div>

      <div className="row mt-5">
        <hr />
        <div className="mt-5">
          <LineUpComponent data={details} />
        </div>
      </div>
    </div>
  );
};

export default About;
