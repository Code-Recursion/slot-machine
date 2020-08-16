import React from "react";
import Data from "./SeriesData";
import Card from "./Card";

const App = () => {
  return (
    <>
      <h1 className="heading">Top Netflix Series 2020</h1>

      {Data.map((val) => {
        // console.log(val);
        return (
          <Card
            key={val.id}
            imgsrc={val.imgsrc}
            title={val.title}
            link={val.link}
          />
        );
      })}
    </>
  );
};

export default App;
