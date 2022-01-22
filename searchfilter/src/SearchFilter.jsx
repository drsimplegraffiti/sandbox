import React, { useState } from "react";
import JSONDATA from "./MOCK_DATA.json";

const SearchFilter = () => {
  const [searchTerm, setSearchTerm] = useState("");
  return (
    <div>
      <h1>Search filter page</h1>
      <input
        type="text"
        placeholder="enter search term ....."
        onChange={(event) => {
          setSearchTerm(event.target.value);
        }}
      />
      {JSONDATA.filter((val) => {
        if (searchTerm === "") {
          return val;
        } else if (
          val.first_name
            .toLocaleLowerCase()
            .includes(searchTerm.toLocaleLowerCase())
        ) {
          return val;
        }
      }).map((val, key) => {
        return (
          <div className="user" key={key}>
            <p>{val.first_name}</p>
          </div>
        );
      })}
    </div>
  );
};

export default SearchFilter;
