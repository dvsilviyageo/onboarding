import LineUp, {
  LineUpCategoricalColumnDesc,
  LineUpStringColumnDesc,
  LineUpNumberColumnDesc,
  LineUpAllColumns,
  LineUpRanking,
  LineUpSupportColumn,
} from "lineupjsx";
import React, { useState } from "react";
import { userDetails } from "./mock-data";
import { UserDetails } from "./mock-interface";

interface ILineUpProps {
  data: UserDetails[];
  selection?: number[];
  onSelectionChange?: any;
}

const LineUpComponent = (props: ILineUpProps) => {
  const [details] = useState<UserDetails[]>(userDetails);

  const arr = [];
  const cats = ["c1", "c2", "c3"];
  for (let i = 0; i < 100; ++i) {
    arr.push({
      a: Math.random() * 10,
      d: "Row " + i,
      cat: cats[Math.floor(Math.random() * 3)],
      cat2: cats[Math.floor(Math.random() * 3)],
    });
  }

  return (
    <div className="d-flex" style={{ height: "500px" }}>
      <h5 className="mb-5">LineUp view</h5>
      <LineUp
        className="d-flex h-100 mt-5"
        data={details}
        selection={props.selection}
        onSelectionChanged={props.onSelectionChange}
        aggregationStrategy={"group+top+item"}
      >
        <LineUpStringColumnDesc column="userName" />
        <LineUpNumberColumnDesc column="maths" color="green" />
        <LineUpNumberColumnDesc column="science" color="blue" />
        <LineUpNumberColumnDesc column="science" color="orange" />
      </LineUp>
    </div>
  );
};

export default LineUpComponent;
