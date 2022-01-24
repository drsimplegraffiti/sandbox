import React, { useEffect, useState } from "react";
import axios from "axios";
import ListItem from "./ListItem";
import Loader from "./Loader";

const Loading = () => {
  const [studentList, setStudentList] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    axios
      .get(`https://5f7146ed64a3720016e603e1.mockapi.io/api/student`)
      .then((res) => {
        setStudentList(res.data);
        setLoading(true);
      });
  }, []);
  console.log(loading);
  console.log(studentList);
  return (
    <div>
      {loading ? (
        studentList.map((studentList) => {
          return <ListItem key={studentList.id} studentList={studentList} />;
        })
      ) : (
        <Loader />
      )}
    </div>
  );
};

export default Loading;
