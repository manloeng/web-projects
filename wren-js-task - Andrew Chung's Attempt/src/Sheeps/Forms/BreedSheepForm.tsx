import React, { useState } from "react";
const faker = require("faker");

interface Sheep {
  name: string;
  gender: string;
  isBranded: boolean;
}

type AppProps = {
  sheeps: Sheep[];
  handleSetSheeps: (data: Sheep[]) => void;
};

function BreedSheepForm({ sheeps, handleSetSheeps }: AppProps) {
  const [maleSheep, setMaleSheep] = useState<Sheep>({ name: "", gender: "male", isBranded: false });
  const [femaleSheep, setFemaleSheep] = useState<Sheep>({ name: "", gender: "female", isBranded: false });

  let sheepOptionsMale = sheeps.filter((sheep) => sheep.gender === "male" && sheep.isBranded === false);
  let sheepOptionsFemale = sheeps.filter((sheep) => sheep.gender === "female" && sheep.isBranded === false);

  const handleBreeding = (e: any) => {
    e.preventDefault();
    if (maleSheep && femaleSheep) {
      const newSheepList = breedSheeps(sheeps);
      handleSetSheeps(newSheepList);
    }
  };

  return (
    <div>
      <form onSubmit={handleBreeding}>
        <h1 style={{ fontSize: "1.5rem" }}>Breed Sheeps</h1>
        <div>
          <div>
            <label>Select Sheeps to Breed:</label>

            <label>Male:</label>
            <select
              name="sheep1"
              defaultValue={""}
              onChange={(e) => setMaleSheep({ name: e.target.value, gender: "male", isBranded: false })}
              required
            >
              {sheepOptionsMale.map((sheep, index) => (
                <option key={sheep.name + index} value={sheep.name}>
                  {sheep.name}
                </option>
              ))}
            </select>

            <label>Female:</label>
            <select
              name="sheep2"
              defaultValue={""}
              onChange={(e) => setFemaleSheep({ name: e.target.value, gender: "female", isBranded: false })}
              required
            >
              {sheepOptionsFemale.map((sheep, index) => (
                <option key={sheep.name + index} value={sheep.name}>
                  {sheep.name}
                </option>
              ))}
            </select>
          </div>

          <button type="submit">Begin Breeding</button>
        </div>
      </form>
    </div>
  );
}

export default BreedSheepForm;

function breedSheeps(sheeps: Sheep[]) {
  const successRate = 0.5;
  const breedChance = Math.random();

  if (breedChance >= successRate) {
    const newSheep = {
      name: faker.name.firstName(),
      gender: faker.random.arrayElement(["male", "female"]),
      isBranded: false,
    };

    const newSheepList = [...sheeps, newSheep];
    return newSheepList;
  }

  return sheeps;
}
