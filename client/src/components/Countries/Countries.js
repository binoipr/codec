/*-----For displaying all countries received from API call---- */

import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchCountries } from "../../actions/coutryActions";
import Filter from "./Filter";

import "./countryStyle.css";

const Countries = () => {
  const [countries, setCountries] = useState([]);
  const [search, setSearch] = useState("");
  const [filtered, setFiltered] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCountries());
    setCountries(Countries);
    setIsLoading(false);
  });

  const Countries = useSelector((state) => state.countries.Countries);

  return (
    <>
      {/* filter component */}
      <Filter
        search={search}
        setSearch={setSearch}
        setFiltered={setFiltered}
        countries={countries}
      />
      {/* check for search and display accordingly */}
      {isLoading ? (
        <h1 className="loading">Loading...</h1>
      ) : search.length > 1 ? (
        <section className="countries__list">
          {filtered.map((country) => {
            const {
              numericCode,
              name,
              flag,
              population,
              region,
              capital,
            } = country;

            return (
              <Link to={`/countries/${name}`} key={numericCode}>
                <article>
                  <div className="countries__list-flag">
                    <img src={flag} alt={name} />
                  </div>
                  <div className="countries__list-details">
                    <h4>
                      Name: <span>{name}</span>
                    </h4>
                    <h4>
                      Population: <span>{population.toLocaleString()}</span>
                    </h4>
                    <h4>
                      Region: <span>{region}</span>
                    </h4>
                    <h4>
                      Capital: <span>{capital}</span>
                    </h4>
                  </div>
                </article>
              </Link>
            );
          })}
        </section>
      ) : (
        <section className="countries__list">
          {countries.map((country) => {
            const {
              numericCode,
              name,
              flag,
              population,
              region,
              capital,
            } = country;

            return (
              <Link to={`/countries/${name}`} key={numericCode}>
                <article>
                  <div className="countries__list-flag">
                    <img src={flag} alt={name} />
                  </div>
                  <div className="countries__list-details">
                    <h4>
                      Name: <span>{name}</span>
                    </h4>
                    <h4>
                      Population: <span>{population}</span>
                    </h4>
                    <h4>
                      Region: <span>{region}</span>
                    </h4>
                    <h4>
                      Capital: <span>{capital}</span>
                    </h4>
                  </div>
                </article>
              </Link>
            );
          })}
        </section>
      )}
    </>
  );
};

export default Countries;
