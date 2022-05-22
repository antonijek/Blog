import { BrowserRouter, Route, Routes } from "react-router-dom";
import Form from "./components/Form";
import Page404 from "./components/Page404";
import Header from "./components/Header";
import "./App.css";
import axios from "axios";
import React, { useState, useEffect } from "react";
import Home from "./components/Home";
import SinglePost from "./components/SinglePost";

function App(props) {
  const [data, setData] = useState([]);

  const addPostToState = (post) => {
    setData([...data, post]);
  };

  const removeFromState = (id) => {
    let arr = data.filter((item) => item.id !== id);
    setData(arr);
  };

  const getData = () => {
    console.log("poziva se getData");
    axios({ method: "get", url: "http://localhost:3500/post" })
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    console.log("AppMount");
    getData();
  }, []);

  return (
    <BrowserRouter>
      <div className="container">
        <Header />
        <Routes>
          <Route
            exact
            path="/"
            element={
              <Home
                data={data}
                getData={getData}
                removeFromState={removeFromState}
              ></Home>
            }
          />
          <Route
            path="/add-post"
            element={
              <Form getData={getData} addPostToState={addPostToState}></Form>
            }
          />
          <Route
            path="/posts/:id"
            element={<SinglePost data={data}></SinglePost>}
          />
          <Route path="*" element={<Page404></Page404>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
