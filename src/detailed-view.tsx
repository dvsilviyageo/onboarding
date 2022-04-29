import React, { useState } from "react";
import Split from "react-split";
import { userDetails } from "./mock-data";
import { UserDetails } from "./mock-interface";
import ScatterPlot from "./scatter-plot";

const DetailedView = () => {
  const [details] = useState<UserDetails[]>(userDetails);
  const [selDetail, setSelectedDetail] = useState<UserDetails | null>(null);

  const [highlighted, setHighlighted] = useState(-1);

  const x = details.map((detail) => detail.maths);
  const y = details.map((detail) => detail.science);
  const names = details.map((detail) => detail.userName);

  const onDetailSelected = (detail: UserDetails) => {
    setSelectedDetail(detail);
    // setHighlighted
  };
  return (
    <Split direction="vertical" style={{ height: "calc(100vh - 4rem)" }}>
      <Split className="d-flex" minSize={[350]}>
        <div className="container">
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
        <div>
          <ScatterPlot
            X={x}
            Y={y}
            names={names}
            selection={selDetail}
            highlighted={highlighted}
          />
        </div>
        <div></div>
      </Split>
      <div></div>
    </Split>
  );
};

export default DetailedView;
