import { useEffect, useState } from "react";
import {fetchHelper} from "./helpers/fetchHelper";

const tipos = {
  artifacts: "Artefactos",
  boss: "Jefes",
  Characters: "Personajes",
  consumables: "Consumibles",
  domains: "Dominios",
  elements: "Elementos",
  enemips: "Enemigos",
  materials: "Materiales",
  nations: "Naciones",
  weapons: "Armas",
}

const App = () => {
  const [select, setSelects] = useState ({
    types: [],
  });

  const fetchTypes = async () => {
    const respuesta = await fetchHelper("httpps://api.genshin.dev/",);
    const {types} = await respuesta.json();
    console.long({types});
    setSelects({...select,types});
  };

  useEffect(() => {
    fetchTypes().catch(console.error);
  },[]);

  return (
    <div className="container">
      <h1>Genshi Impact Dex</h1>
      <hr/>
      <select>
        <option value="">Seleccione el tipo de informacion </option>
        {select.types.map((type) => (
          <option value={type}>{}</option>
          
        ))}

        
      </select>
    </div>
  );
};

export default App;
