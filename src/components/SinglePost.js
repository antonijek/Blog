import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
const SinglePost = (props) => {
  const [data, setData] = useState([]);
  const { id } = useParams();

  const getPostById = () => {
    let arr = props.data.filter((item) => item.id === Number(id));
    setData(arr[0]);
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
