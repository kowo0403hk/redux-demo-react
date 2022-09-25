import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { buyIceCream } from "../redux";

const NewIceCreamContainer = () => {
  const [number, setNumber] = useState(1);

  const numOfIceCreams = useSelector((state) => state.iceCream.numOfIceCreams);

  const dispatch = useDispatch();

  return (
    <div>
      <h2>Number of IceCream - {numOfIceCreams}</h2>
      <input
        type="number"
        value={number < 1 ? 1 : number}
        onChange={(e) => setNumber(e.target.value)}
      />
      <button onClick={() => dispatch(buyIceCream(number))}>
        Buy {number < 1 ? 1 : number} IceCream
      </button>
    </div>
  );
};

export default NewIceCreamContainer;
