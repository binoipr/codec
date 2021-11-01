/*----Filtering countries from list----*/
import "./countryStyle.css";

const Filter = ({ search, setSearch, setFiltered, countries }) => {
  /* filter countries from typed i/p */
  const handleChange = (searchvalue) => {
    setSearch(searchvalue);
    if (search) {
      const filteredCountries = countries.filter((country) =>
        Object.values(country)
          .join("")
          .toLowerCase()
          .includes(search.toLowerCase())
      );
      setFiltered(filteredCountries);
    } else {
      setFiltered(countries);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <form className="filter__form" id="filter__form" onSubmit={handleSubmit}>
        <input
          type="search"
          name="search"
          id="search"
          autoComplete="off"
          placeholder="Search Country"
          onChange={(e) => handleChange(e.target.value)}
        />
      </form>
    </>
  );
};

export default Filter;
