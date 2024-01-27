import { useState } from "react";
import AngolModel from "../model/AngolModel";
import KivalasztoMondat from "./KivalasztoMondat";
const angolModel = new AngolModel();

export default function Kivalaszto() {
  const [mondat, setMondat] = useState(angolModel.getMondat());
  const [pont, setPont] = useState(0);
  function kovMondat(p) {
    console.log("Következő mondat");
    angolModel.setAktIndex();
    setMondat(angolModel.getMondat());
    setPont(pont + p);
  }

  return (
    <div className="jatekter">
      <div className="cim">{angolModel.getCim()}</div>
      <KivalasztoMondat mondat={mondat} kovMondat={kovMondat} />
      <div className="pontok">
        <p>Elért pont: {pont}</p>
      </div>
    </div>
  );
}
