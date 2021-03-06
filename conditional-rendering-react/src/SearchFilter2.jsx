import React, { useState } from "react";

import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import data from "./data";

const SearchFilter2 = () => {
  const [filter, setFilter] = useState("");
  const searchText = (event) => {
    setFilter(event.target.value);
  };
  //   console.warn(filter);
  let dataSearch = data.cardData.filter((item) => {
    return Object.keys(item).some((key) =>
      item[key]
        .toString()
        .toLowerCase()
        .includes(filter.toString().toLowerCase())
    );
  });
  return (
    <div>
      <h1 className="text-center text-info">Search Filter Ex</h1>
      <section className="py-4 container">
        <div className="row justify-content-center">
          <div className="col-12 mb-5">
            <div className="mb3 col-4 mx-auto text-center">
              <label className="form-lable h4">search</label>
              <input
                className="from-control"
                type="text"
                value={filter}
                onChange={searchText.bind(this)}
              />
            </div>
          </div>

          {/* print data here */}
          {dataSearch.map((item, index) => {
            return (
              <div className="col-11 col-md-6 col-lg-3 mx-0 mb-4">
                <div className="card p-0 overflow-hidden h-100 shadow">
                  <img src={item.img} className="card-img-top" alt="" />
                  <div className="card-body">
                    <h5 className="card-title">{item.title}</h5>
                    <p className="card-text">{item.desc}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
};

export default SearchFilter2;
