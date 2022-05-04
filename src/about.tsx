import React, { useState } from "react";
import { userDetails } from "./mock-data";
import { UserDetails, ISelDetail } from "./mock-interface";
import Plot from "react-plotly.js";
import LineUpComponent from "./line-up";

const About = () => {
  const [details] = useState<UserDetails[]>(userDetails);

  const [selDetail, setSelectedDetail] = useState<UserDetails | null>(null);

  const [lineUpSelection, setLineUpSelection] = useState([]);

  const onDetailSelected = (detail: UserDetails) => {
    setSelectedDetail(detail);
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
                    {/* <th scope="row">
                      <input
                        type="radio"
                        name="radio-id"
                        onChange={() => onDetailSelected(detail)}
                      ></input>
                    </th> */}
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
      </div>
    </div>
  );
};

export default About;
