import React from "react";
import Actions from "./Actions";
import "../../styles/Sheep.css";

interface Sheep {
  name: string;
  gender: string;
  isBranded: boolean;
}

function Table() {
  const [sheeps, setSheeps] = React.useState<Sheep[]>([]);

  const handleSetSheeps = ( data: Sheep[]): void => {
    setSheeps(data);
  };

  return (
    <div className="fieldContainer">
      <Actions sheeps={sheeps} handleSetSheeps={handleSetSheeps}></Actions>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Gender</th>
            <th>Can Breed?</th>
          </tr>
        </thead>
        <tbody>
          {sheeps.map((sheep, index) => (
            <tr key={sheep.name + index} className={sheep.isBranded ? "canBreed" : ""}>
              <th>{sheep.name}</th>
              <th>{sheep.gender}</th>
              <th>{sheep.isBranded ? "False" : "True"}</th>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
