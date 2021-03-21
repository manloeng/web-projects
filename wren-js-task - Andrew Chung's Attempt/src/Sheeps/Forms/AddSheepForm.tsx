import React, { useState } from "react";
import '../../../styles/Button.css'

interface Sheep {
  name: string;
  gender: string;
  isBranded: boolean;
}

type AppProps = {
  sheeps: Sheep[];
  handleSetSheeps: (data: Sheep[]) => void;
};

function AddSheepForm({ sheeps, handleSetSheeps }: AppProps) {
  const [name, setName] = useState<string>("");
  const [gender, setGender] = useState<string>("male");
  const [isBranded, setIsBranded] = useState<boolean>(false);

  const handleSubmit = (e: any) => {
    e.preventDefault()
    const sheep = { name, gender, isBranded };
    const newSheepsList = [...sheeps, sheep];
    handleSetSheeps(newSheepsList);
  };

  const handleIsBranded = (e: any) => {
    const { value } = e.target;
    if (value === "true") setIsBranded(true);
    if (value === "false") setIsBranded(false);
  };

  // const handleReset = () => {
  //   setName("");
  //   setGender("male");
  //   setIsBranded(false);
  // };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h1 style={{ fontSize: "1.5rem" }}>Add Sheep</h1>
        <div>
          <div>
            <label>Name: </label>
            <input
              placeholder="Enter The Sheep's name"
              name="name"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />

            <label>Select Gender:</label>
            <select name="gender" defaultValue={"male"} onChange={(e) => setGender(e.target.value)} required>
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>

            <label>Is Branded: </label>
            <select name="isBranded" defaultValue={"false"} onChange={handleIsBranded} required>
              <option value={"true"}>Yes</option>
              <option value={"false"}>No</option>
            </select>
          </div>

          <button className="formSubmit" type="submit">Add</button>
          {/* <button className="formCancel" onClick={handleReset}>Reset</button> */}
        </div>
      </form>
    </div>
  );
}

export default AddSheepForm;
