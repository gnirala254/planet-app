import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { RemoveFavorite } from "./store/action";
import "./Favorite.css";

function Favorite() {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();

  console.log(state);

  return (
    <div>
      {state.favourite.map((planet) => {
        return (
          <div className="favorite">
            <div className="favourite__left">
              <p>Planet Id: {planet.id}</p>
              <p>Planet is favourite?: {!planet.favourite ? `Yes` : `No`}</p>
              <p>Planet name: {planet.name}</p>
            </div>
            <div className="favourite__right">
              <p>Planet {planet.index}</p>
              <button onClick={() => dispatch(RemoveFavorite(planet.id))}>
                Remove from favorite
              </button>
            </div>

            <br />
          </div>
        );
      })}
    </div>
  );
}

export default Favorite;
