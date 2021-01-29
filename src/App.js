import React, { useState } from "react";
import "./app.scss";
import axios from "axios";
import MovieList from "./MovieList";
function App() {
  const [data, setData] = useState([]);
  const [value, setValue] = useState("");
  const searchHandler = async (e) => {
    setValue(e.target.value);
    const searchData = await axios.get(
      `https://api.themoviedb.org/3/search/movie?api_key=d426d6313a2fa8be90e8499b017bdfe4&language=en-US&query=${value}&page=1&include_adult=false`
    );
    setData(searchData.data.results);
    console.log(data);
  };
  return (
    <div className="searchdiv">
      <input
        type="text"
        value={value}
        onChange={(e) => searchHandler(e)}
        placeholder="Search movies.."
        className="search"
      />
      <div className="movieContainer">
        {data.length > 0 &&
          data.map((obj) => (
            <MovieList
              poster_path={obj.poster_path}
              title={obj.original_title}
              release_date={obj.release_date}
              vote_average={obj.vote_average}
              overview={obj.overview}
            />
          ))}
      </div>
    </div>
  );
}

export default App;
