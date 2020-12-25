import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Favorite } from "./store/action";
import "./Planets.css";

function Planets() {
  const dispatch = useDispatch();
  const [disable, setDisable] = useState(false);

  // const [isFavorite, setIsFavorite] = useState(false);

  const [planets, setPlanets] = useState([]);

  const apiUrl = "https://assignment-machstatz.herokuapp.com/planet";

  useEffect(() => {
    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => setPlanets(data));
  }, []);

  const handleCLick = (index, id, isFavourite, name) => {
    dispatch(
      Favorite({
        index: index + 1,
        id: id,
        favorite: isFavourite,
        name: name,
      })
    );
    // setDisable(!disable);
  };

  return (
    <div>
      {planets.map((planet, index) => {
        return (
          <div className="planets">
            <div className="planets__left">
              <p>Planet Id: {planet.id}</p>
              <p>Planet is favourite?: {planet.isFavourite ? `Yes` : `No`}</p>
              <p>Planet name: {planet.name}</p>
            </div>
            <div className="planets__right">
              <p>Planet {index + 1}</p>
              <button
                disabled={disable}
                onClick={() =>
                  handleCLick(index, planet.id, planet.isFavourite, planet.name)
                }
              >
                Add to Favorite
              </button>
            </div>

            <br />
          </div>
        );
      })}
    </div>
  );
}

export default Planets;
