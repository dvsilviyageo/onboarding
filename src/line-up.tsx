import LineUp, {
  LineUpCategoricalColumnDesc,
  LineUpStringColumnDesc,
  LineUpNumberColumnDesc,
  LineUpAllColumns,
  LineUpRanking,
  LineUpSupportColumn,
} from "lineupjsx";
import React, { useState } from "react";
import { soccerData, userDetails } from "./mock-data";
import { ISoccerData, UserDetails } from "./mock-interface";

interface ILineUpProps {
  data: UserDetails[];
}

const LineUpComponent = (props: ILineUpProps) => {
  // const [details] = useState<UserDetails[]>(userDetails);
  const [soccer, setSoccer] = useState<ISoccerData[]>(soccerData);

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

  console.log(props.data);
  return (
    <div>
      <h5 className="mb-5">LineUp view</h5>
      <LineUp data={arr} aggregationStrategy={"group+top+item"}>
        {/* <LineUpStringColumnDesc column="userName" />
        <LineUpNumberColumnDesc column="maths" color="green" />
        <LineUpNumberColumnDesc column="science" color="blue" />
        <LineUpNumberColumnDesc column="science" color="orange" /> */}
      </LineUp>
      {/* <LineUp data={soccer}>
        <LineUpStringColumnDesc column="Name" width={160} />
        <LineUpCategoricalColumnDesc column="Club" width={100} />
        <LineUpCategoricalColumnDesc
          column="Preffered_Foot"
          label="Foot"
          width={100}
        />
        <LineUpNumberColumnDesc column="Age" color="green" />
        <LineUpNumberColumnDesc
          column="Height"
          domain={[160, 210]}
          color="orange"
        />
        <LineUpNumberColumnDesc column="Speed" color="blue" />
        <LineUpNumberColumnDesc column="Stamina" color="blue" />
        <LineUpStringColumnDesc column="Nationality" width={150} />
        <LineUpCategoricalColumnDesc column="Club_Position" label="Position" />

        <LineUpRanking sortBy="Club:asc">
          <LineUpSupportColumn type="*" />
          <LineUpAllColumns />
        </LineUpRanking>
      </LineUp> */}
    </div>
  );
};

export default LineUpComponent;
