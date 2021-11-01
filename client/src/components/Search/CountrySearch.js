/*-----For searching country name/names------ */
import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { fetchCountry, fetchCountries } from "../../actions/coutryActions";
import { useDispatch } from "react-redux";
import { SearchCountriesList } from "..";

import "./searchStyle.css";

const Country = () => {
  const [name, setName] = useState("");
  const [call, setCall] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();

  const Country = useSelector((state) => state.country.Country);

  useEffect(() => {
    dispatch(fetchCountries());
  }, []);

  const handleChange = (e) => {
    setName(e.target.value);
  };

  /*----search by name----- */
  const handleSubmit = (e) => {
    e.preventDefault();
    /*---- if search contains "," then considered it as array with names----*/
    if (name.includes(",")) {
      let nameArr = name.replace(/\s+/g, "").split(",");
      setName(nameArr);
      setCall((v) => !v);
    } else {
      dispatch(fetchCountry(name));
      setIsLoading(true);
    }
  };

  if (call) {
    /*----array names, pass it to following component-----*/
    return <SearchCountriesList list={name} />;
  } else {
    return (
      <>
        <div className="country__search">
          <input
            type="search"
            className="country__search-input"
            onChange={handleChange}
            placeholder="please enter a country name / names (separated by comma)"
          />
          {name ? (
            <button onClick={handleSubmit} className="country__search-button">
              <i className="fa fa-search"></i>
            </button>
          ) : (
            ""
          )}
        </div>

        {isLoading ? (
          <section className="country__list">
            {Country.map((c) => {
              const {
                numericCode,
                flag,
                name,
                nativeName,
                population,
                region,
                subregion,
                capital,
                topLevelDomain,
                currencies,
                languages,
                borders,
              } = c;
              return (
                <article key={numericCode}>
                  <div className="country__list-inner">
                    <div className="country__list-flag">
                      <img src={flag} alt={name} />
                    </div>
                    <div className="country__list-details">
                      <div>
                        <h2>{name}</h2>
                        <h5>
                          Native Name: <span>{nativeName}</span>
                        </h5>
                        <h5>
                          Population: <span>{population}</span>
                        </h5>
                        <h5>
                          Region: <span>{region}</span>
                        </h5>
                        <h5>
                          Sub Region: <span>{subregion}</span>
                        </h5>
                        <h5>
                          Capital: <span>{capital}</span>{" "}
                        </h5>
                      </div>
                      <div>
                        <h5>
                          Top Level Domain: <span>{topLevelDomain}</span>
                        </h5>
                        <h5>
                          Currencies:
                          <span>{currencies[0].name}</span>
                        </h5>
                        <h5>
                          Languages: <span>{languages[0].name}</span>
                        </h5>
                      </div>
                    </div>
                  </div>
                  <div>
                    <h3>Border Countries: </h3>
                    <div className="country__list-borders">
                      {borders
                        ? borders.map((border) => {
                            return (
                              <ul key={border}>
                                <li>{border}</li>
                              </ul>
                            );
                          })
                        : ""}
                    </div>
                  </div>
                </article>
              );
            })}
          </section>
        ) : (
          ""
        )}
      </>
    );
  }
};

export default Country;
