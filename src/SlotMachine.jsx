import React from "react";

const Slots = (props) => {
  let { x, y, z } = props;

  //   let x = props.x;
  //   let y = props.y;
  //   let z = props.z;

  if (x === y && y === z) {
    return (
      <>
        <div className="output">
          <p>
            {x}
            {y}
            {z}
          </p>
          <p className="match">Match Found</p>
        </div>
      </>
    );
  } else {
    return (
      <div className="output">
        <p>
          {x}
          {y}
          {z}
        </p>
        <p className="notMatch">Don't Match</p>
      </div>
    );
  }
};

export default Slots;
