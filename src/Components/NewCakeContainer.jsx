import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { buyCake } from "../redux"; // import the action creator

const NewCakeContainer = () => {
  const [number, setNumber] = useState(1);

  const numOfCakes = useSelector((state) => state.cake.numOfCakes); // as we already provided store at the Provider level, we can directly access the state

  const dispatch = useDispatch();

  return (
    <div>
      <h2>Num of Cakes - {numOfCakes} </h2>
      <input
        type="number"
        value={number < 1 ? 1 : number}
        onChange={(e) => setNumber(e.target.value)}
      />
      <button onClick={() => dispatch(buyCake(number))}>
        Buy {number < 1 ? 1 : number} Cake(s)
      </button>
    </div>
  );
};

export default NewCakeContainer;
