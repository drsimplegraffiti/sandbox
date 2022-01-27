import "./App.css";
import { useState, useEffect } from "react";
import axios from "axios";
import Loader from "./Loader";
import {FaEdit, FaTimes, FaArrowLeft, FaArrowRight, FaPlus} from 'react-icons/fa';

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  const [pageNumber, setPageNumber] = useState(0);
  const [numberOfPages, setNumberOfPages] = useState(0);
  const [loading, setLoading] = useState(false);
  const [item, setItem] = useState({
    title: "",
    description: "",
  });

  // items
  const [items, setItems] = useState([
    {
      title: "",
      description: "",
      _id: "",
    },
  ]);

  //state for update routes

  const [isPut, setIsPut] = useState(false);
  const [updatedItem, setUpdatedItem] = useState({
    title: "",
    description: "",
    id: "",
  });
  const pages = new Array(numberOfPages).fill(null).map((v, i) => i);

  useEffect(() => {
    fetch(`/items?page=${pageNumber}`)
      .then((res) => {
        console.log("loading....");
        if (res.ok && res !== "") {
          console.log(res);
          setLoading(true);
          return res.json();
        }
      })
      .then((jsonRes) => {
        setItems(jsonRes.items);
        setNumberOfPages(jsonRes.totalPages);
      })
      .catch((err) =>
        console.log(err, toast.error("Error, something went wrong"))
      );
  }, [items,pageNumber]);

  const gotoPrevious = () => {
    setPageNumber(Math.max(0, pageNumber - 1));
  };

  const gotoNext = () => {
    setPageNumber(Math.min(numberOfPages - 1, pageNumber + 1));
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setItem((prevInput) => {
      return {
        ...prevInput,
        [name]: value,
      };
    });
    console.log(item);
  };

  // Add Item
  const addItem = (event) => {
    event.preventDefault();
    const newItem = {
      title: item.title,
      description: item.description,
    };
    const headers = {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
    };
    axios.post("/new-item", newItem, {
      headers: headers,
    });
    console.log(newItem);
    toast.success("Success, Items added successfully");

    // alert("item added");
    setItem({
      title: "",
      description: "",
    });
  };

  // delete item
  const deleteItem = (id) => {
    axios.delete("/delete/" + id);
    alert("item deleted");
    console.log(`Deleted Item with : ${id}`);
  };

  const openUpdate = (id) => {
    setIsPut(true);
    setUpdatedItem((prevInput) => {
      return {
        ...prevInput,
        id: id,
      };
    });
  };

  const updateItem = (id) => {
    axios.put("/put/" + id, updatedItem);
    alert("item updated successfully");
    console.log(`item with id ${id} updated`);
    toast.success("Success, Items updated successfully");
// navigate ('/')
  };

  const handleUpdate = (event) => {
    const { name, value } = event.target;
    setUpdatedItem((prevInput) => {
      return {
        ...prevInput,
        [name]: value,
      };
    });
    console.log(updatedItem);
  };
  return (
    <div className="App">
      <h1>
        <a href="/">ProgreX</a>
      </h1>
      
      {!isPut ? (
        <div>
          <input
            name="title"
            onChange={handleChange}
            value={item.title}
            placeholder="Enter a title here...."
          />
          <br />
          <input
            onChange={handleChange}
            name="description"
            value={item.description}
            placeholder="Enter description here...."
          />
          <br />
          <h3>Page of: {pageNumber + 1}</h3>
          <button className="add_btn" onClick={addItem}>Add<FaPlus /> </button>
          <ToastContainer />
        </div>
      ) : (
        <div className="container">
          <input
            type="text"
            name="title"
            onChange={handleUpdate}
            value={updatedItem.title}
            placeholder="enter a title here...."
          />
          <br />
          <input
            type="text"
            onChange={handleUpdate}
            name="description"
            value={updatedItem.description}
            placeholder="enter a description here...."
          />
          <br />
          <button onClick={() => updateItem(updatedItem.id)}>Update</button>
          <ToastContainer />
        </div>
      )}


      {loading ? (
        items.map((item) => {
          return (
            <div key={item._id} className="container">
              <table id="tableContainer" className="table_container">
                <tr>
                  <th>Title</th>
                  <th>Description</th>
                  <th> Id</th>
                </tr>
                <tr>
                  <td>{item.title}</td>
                  <td>{item.description}</td>
                  <td>{item._id.slice(0,6)}</td>
                </tr>
              </table>
              <button
                className="deleteBtn"
                onClick={() => deleteItem(item._id)}
              >
                <FaTimes />
              </button>
              <button onClick={() => openUpdate(item._id)}><FaEdit /></button>
            </div>
          );
        })
      ) : (
        <Loader />
      )}
      <div className="button-styles">
      <button onClick={gotoPrevious}><FaArrowLeft /></button>
      {pages.map((pageIndex) => (
        <button key={pageIndex} onClick={() => setPageNumber(pageIndex)}>
          {pageIndex + 1}
        </button>
      ))}
      <button onClick={gotoNext}><FaArrowRight /></button>
      </div>
    </div>
  );
};

export default App;
