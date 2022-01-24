import "./App.css";
import { useState, useEffect } from "react";
import axios from "axios";

const App = () => {
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

  useEffect(() => {
    fetch("http://localhost:3001/items")
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
      })
      .then((jsonRes) => setItems(jsonRes))
      .catch((err) => console.log(err));
  }, [items]);

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
    axios.post("http://localhost:3001/new-item", newItem, {
      headers: headers,
    });
    console.log(newItem);
    alert("item added");
    setItem({
      title: "",
      description: "",
    });
  };

  // delete item
  const deleteItem = (id) => {
    axios.delete("http://localhost:3001/delete/" + id);
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
    axios.put("http://localhost:3001/put/" + id, updatedItem);
    alert("item updated successfully");
    console.log(`item with id ${id} updated`);
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
      <h1>CRUD</h1>
      {!isPut ? (
        <div>
          <input
            name="title"
            onChange={handleChange}
            value={item.title}
            placeholder="enter a title here...."
          />
          <br />
          <input
            onChange={handleChange}
            name="description"
            value={item.description}
            placeholder="enter a description here...."
          />
          <br />
          <button onClick={addItem}> Add Item</button>
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
          <button onClick={() => updateItem(updatedItem.id)}>Edit Item</button>
        </div>
      )}

      {/*  */}

      {/*  */}
      {items.map((item) => {
        return (
          <div key={item._id} className="container">
            {/* <p>{item.title}</p>
            <p>{item.description}</p> */}
            <table id="tableContainer">
              <tr>
                <th>Title</th>
                <th>Description</th>
                <th>Item Id</th>
              </tr>
              <tr>
                <td>{item.title}</td>
                <td>{item.description}</td>
                <td>{item._id}</td>
              </tr>
            </table>
            <button className="deleteBtn" onClick={() => deleteItem(item._id)}>
              Delete
            </button>
            <button onClick={() => openUpdate(item._id)}>Update</button>
          </div>
        );
      })}
    </div>
  );
};

export default App;
