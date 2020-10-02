import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  useParams,
} from "react-router-dom";
import axios from "axios";

function List() {
  const [albumList, setAlbumList] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3000/albums").then((item) => {
      setAlbumList(item.data);
    });
  }, []);

  return (
    <div id="homePage">
      <div className="album-grid">
        <h1 id="albumsHeader">My Albums</h1>
        {albumList.map((item) => (
          <div className="album" key={item.id}>
            <Link className="link" to={`/album/${item.id}`} key={item.id}>
              <img
                className="albumThumbnail"
                src={item.thumbnail}
                key={item.id}
              ></img>
              <h3 id="albumLabel">{item.name}</h3>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default List;
