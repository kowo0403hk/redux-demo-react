import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { buyCake } from "../redux"; // import the action creator

const HooksCakeContainer = () => {
  const numOfCakes = useSelector((state) => state.cake.numOfCakes); // as we already provided store at the Provider level, we can directly access the state

  const dispatch = useDispatch();

  return (
    <div>
      <h2>Num of Cakes - {numOfCakes} </h2>
      <button onClick={() => dispatch(buyCake())}>Buy Cake</button>
    </div>
  );
};

export default HooksCakeContainer;
