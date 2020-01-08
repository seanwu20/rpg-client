import React from "react";
import Player from "../player/Player";
import Map from "../components/Map";

import {tiles} from "../data/maps/1";
import {store} from "../store";

export default function Game(props) {
  store.dispatch({
    type: "ADD_TILES",
    payload: {
      tiles
    }
  });

  return (
    <div
      style={{
        position: "relative",
        width: "1260px",
        height: "600px",
        margin: "20px auto"
      }}
    >
      <Map />
      <Player />
    </div>
  );
}
