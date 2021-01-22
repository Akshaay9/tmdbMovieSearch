import React from "react";

function Countries({
  name,
  flag,
  region,
  languages,
  timezones,
  capital,
  currencies,
  regionalBlocs,
  callingCodes,
}) {
  return (
    <div className="country">
      <div className="header">
              <h3>{name?name:""}</h3>
              <div className="subHeading">
       { capital?<h5>
          {" "}
          <span> Capital : </span>
          {capital}
        </h5>:""}
        {region?<h5>
          {" "}
          <span> Region : </span>
          {region}
                  </h5>:""}
                  </div>
      </div>
     {flag? <div className="countryBody">
        <img src={flag} alt="" />
          </div> : ""}
          <div className="footer">
              {languages&&<div className="language" > <span>Languages :</span>
                  {languages.length > 0 && languages.map((ele) => (
                      <h5>{ ele.name}</h5>
                  ))}
              </div>}
              {timezones &&
                  <div className="timezone">
                  <span>TimeZones : </span>
                  <h5>{timezones[0] }</h5>
              </div>}
              {currencies &&
                  <div className="currencies">
                  <span>currencies : </span>
                  <h5>{currencies[0].name}</h5>
                  </div>}
              
              {regionalBlocs   ? regionalBlocs[0] ?regionalBlocs[0].name? 
                  <div className="regionalBlocs">
                      <span>regionalBlocs: </span>
                      <h5>{regionalBlocs[0].name }</h5>
                  </div> : "" : "" : ""}
                  {callingCodes &&
                  <div className="callingCodes">
                  <span>callingCodes : </span>
                  <h5>{callingCodes[0]}</h5>
                  </div>}
            
    </div>
    </div>
  );
}

export default Countries;
