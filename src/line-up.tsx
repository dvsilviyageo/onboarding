import LineUp, {
  LineUpStringColumnDesc,
  LineUpNumberColumnDesc,
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
        <LineUpNumberColumnDesc column="computer" color="orange" />
      </LineUp>
    </div>
  );
};

export default LineUpComponent;
