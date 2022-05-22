import axios from "axios";
import Button from "@mui/material/Button";
import { Link, useNavigate } from "react-router-dom";

const Home = (props) => {
  const navigate = useNavigate();

  const removeItem = (id) => {
    axios({ method: "delete", url: `http://localhost:3500/post/${id}` })
      .then((res) => {
        props.removeFromState(id);
        navigate("/");
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="main">
      <h2>All posts</h2>
      <div className="posts-container">
        {props.data.map((item, i) => (
          <Link to={`posts/${item.id}`} key={i}>
            <div className="post">
              <div className="col s12 m4">
                <div className="card">
                  <div className="card-image">
                    <img src={item.url} alt="img" />
                  </div>
                  <div className="card-content">
                    <span className="card-title">{item.title}</span>
                    <p>{item.author}</p>
                  </div>
                  <div className="card-action">
                    <Button
                      onClick={(e) => removeItem(item.id)}
                      variant="contained"
                    >
                      Remove
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Home;
