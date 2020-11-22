import React from 'react';

const Map = () => {
    return(
      <div>
           <iframe  className = "map"
                src="https://covid-19.clevermaps.io/#"
            >
            </iframe>
            <iframe id="iframed-map" src="https://ourworldindata.org/grapher/total-cases-covid-19?tab=map&region=Africa"></iframe>
      </div>
    )   
}
export default Map;