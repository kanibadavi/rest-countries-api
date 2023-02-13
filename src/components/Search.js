import { useState, useEffect } from "react";
import { Stack } from "react-bootstrap";
function Search() {
  const [search, setSearch] = useState([]);
  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((res) => res.json())
      .then((data) => {
        setSearch(data);
        console.log(data);
      });
  }, []);
  function searchHandler(e) {
    e.preventDefault();
    setSearch(e.target.value);
  }

  return (
    <div>
      <Stack direction="horizontal" className="container">
        <form className="container">
          <input
            type="text"
            placeholder="Search Here..."
            onChange={searchHandler}
          />
        </form>
        <select>
          <option>???</option>
          <option>???</option>
        </select>
      </Stack>
      <div className="container">
        {search.map((t) => {
          return (
            <section className="cards">
              <div>{t.name.official}</div>
            </section>
          );
        })}
      </div>
    </div>
  );
}

export default Search;
