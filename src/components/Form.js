import axios from "axios";
import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
const Form = (props) => {
  const [title, setTitle] = useState("");
  const [url, setUrl] = useState("");
  const [author, setaAuthor] = useState("");
  const [content, setContent] = useState("");
  const navigate = useNavigate();
  const createData = (e) => {
    axios({
      method: "post",
      url: "http://localhost:3500/post",
      data: { title, url, author, content },
    })
      .then((res) => {
        props.getData();
        navigate("/");
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="form">
      <div className="row">
        <form className="col s12">
          <div className="row">
            <div className="input-field col s6">
              <input
                maxLength={20}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Title"
                id="title"
                type="text"
              />
            </div>
          </div>

          <div className="row">
            <div className="input-field col s6">
              <input
                onChange={(e) => setUrl(e.target.value)}
                placeholder="Url"
                id="url"
                type="text"
              />
            </div>
          </div>
          <div className="row">
            <div className="input-field col s6">
              <input
                maxLength={20}
                id="author"
                type="text"
                placeholder="Author"
                onChange={(e) => setaAuthor(e.target.value)}
              />
            </div>
          </div>
          <div className="row">
            <div className="col s6">
              <div>
                <textarea
                  maxLength={250}
                  id="text"
                  type="text"
                  placeholder="Content"
                  onChange={(e) => setContent(e.target.value)}
                />
              </div>
            </div>
          </div>
        </form>
        <button className="btn-submit" type="submit" onClick={createData}>
          Submit
        </button>
      </div>
    </div>
  );
};

export default Form;
