/*----for listing names received from CountrySearch component----*/
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

import "./searchStyle.css";

const SearchCountries = (props) => {
  const [newarr, setNewarr] = useState([]);

  const loweredProps = props.list.map((e) => e.toLowerCase());

  const Countries = useSelector((state) => state.countries.Countries);

  useEffect(() => {
    /* creating new array with names using countries */
    Countries.map((country) => {
      if (loweredProps.includes(country.name.replace(/\s+/g, "").toLowerCase()))
        setNewarr((oldArray) => [...oldArray, country]);
    });
  }, []);

  return (
    <div>
      <section className="countries-list">
        <table className="list-table-heading">
          <thead>
            <tr>
              <th style={{ width: "40px" }}>#</th>
              <th style={{ width: "100px" }}>Flag</th>
              <th style={{ width: "150px" }}>Name</th>
              <th style={{ width: "150px" }}>Population</th>
              <th style={{ width: "150px" }}>Capital</th>
              <th style={{ width: "150px" }}>Region</th>
              <th style={{ width: "100px" }}>Calling Code</th>
            </tr>
          </thead>
        </table>
        {newarr.map((country, index) => {
          const {
            name,
            population,
            region,
            capital,
            flag,
            callingCodes,
          } = country;
          return (
            <>
              <table className="list-table-body">
                <tbody>
                  <tr>
                    <td style={{ width: "40px", textAlign: "center" }}>
                      {index + 1}
                    </td>
                    <td style={{ width: "100px", textAlign: "center" }}>
                      <img src={flag} alt={name} className="list-flag" />
                    </td>
                    <td style={{ width: "150px", textAlign: "center" }}>
                      {name}
                    </td>

                    <td style={{ width: "150px", textAlign: "center" }}>
                      {population}
                    </td>

                    <td style={{ width: "150px", textAlign: "center" }}>
                      {capital}
                    </td>

                    <td style={{ width: "150px", textAlign: "center" }}>
                      {region}
                    </td>

                    <td style={{ width: "100px", textAlign: "center" }}>
                      {callingCodes}
                    </td>
                  </tr>
                </tbody>
              </table>
            </>
          );
        })}
      </section>

      {/* isLoading */}
    </div>
  );
};

export default SearchCountries;
