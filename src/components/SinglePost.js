import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
const SinglePost = (props) => {
  const [data, setData] = useState([]);
  const { id } = useParams();

  const getPostById = () => {
    axios({ method: "get", url: `http://localhost:3500/post/${id}` })
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    getPostById();
  }, []);

  return (
    <div className="id-post">
      <h2>{data.title ? data.title.toUpperCase() : null}</h2>
      <p className="author">By: {data.author}</p>
      <img src={data.url} alt="img" />
      <p>{data.content}</p>
    </div>
  );
};

export default SinglePost;
