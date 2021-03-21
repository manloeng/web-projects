import React from "react";
import AddSheepForm from "./Forms/AddSheepForm";
import BreedSheepForm from "./Forms/BreedSheepForm";

interface Sheep {
  name: string;
  gender: string;
  isBranded: boolean;
}

type AppProps = {
  sheeps: Sheep[];
  handleSetSheeps: (data: Sheep[]) => void;
};

function Actions({ sheeps, handleSetSheeps }: AppProps) {
  const [isAddSheepFormOpen, setIsAddSheepFormOpen] = React.useState(false);
  const [isBreedSheepFormOpen, setIsBreedSheepFormOpen] = React.useState(false);

  const handleBrandSheep = () => {
    if (!sheeps.length) {
      console.log("No sheeps to brand");
    } else {
      const newSheepsList = brandSheep(sheeps);
      handleSetSheeps(newSheepsList);
    }
  };

  return (
    <>
      {isAddSheepFormOpen && <AddSheepForm sheeps={sheeps} handleSetSheeps={handleSetSheeps}></AddSheepForm>}
      {isBreedSheepFormOpen && <BreedSheepForm sheeps={sheeps} handleSetSheeps={handleSetSheeps}></BreedSheepForm>}

      <div>
        <button
          onClick={() => {
            setIsAddSheepFormOpen(!isAddSheepFormOpen);
            if (isBreedSheepFormOpen) setIsBreedSheepFormOpen(false);
          }}
        >
          Add Sheep
        </button>

        <button
          onClick={() => {
            setIsBreedSheepFormOpen(!isBreedSheepFormOpen);
            if (isAddSheepFormOpen) setIsAddSheepFormOpen(false);
          }}
        >
          Breed Sheeps
        </button>

        <button onClick={handleBrandSheep}>Brand Sheep</button>
      </div>
    </>
  );
}

export default Actions;

function brandSheep(sheeps: Sheep[]) {
  const indexOfSheepToBrand = Math.floor(Math.random() * Math.floor(sheeps.length));
  let selectedSheep = sheeps[indexOfSheepToBrand];

  if (selectedSheep.isBranded) {
    return sheeps;
  }

  selectedSheep.isBranded = true;

  let copySheeps = [...sheeps];
  copySheeps.splice(indexOfSheepToBrand, 1, selectedSheep);
  return copySheeps;
}
