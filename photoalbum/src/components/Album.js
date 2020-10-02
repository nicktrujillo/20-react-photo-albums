import React, { useState, useEffect, useRef } from "react";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  useParams,
} from "react-router-dom";
import axios from "axios";

function Album(props) {
  const { id } = useParams();

  const [albumList, setAlbumList] = useState([]);

  const [album, setAlbum] = useState([]);

  useEffect(() => {
    axios.get(`http://localhost:3000/albums/${id}`).then((item) => {
      setAlbum(item.data.photos);
      setAlbumList(item.data);
    });
  }, [id]);

  //   MODAL
  const [activePhoto, setActivePhoto] = useState(null);

  console.log(activePhoto);

  return (
    <div>
      <div>
        {activePhoto ? (
          <div id="modalContainer" onClick={() => setActivePhoto(null)}>
            <h3 className="activePhotoName">{activePhoto.name}</h3>
            <img className="activePhoto" src={activePhoto.thumbnail}></img>
          </div>
        ) : null}

        <div id="photo-grid">
          <h1 id="albumName">{albumList.name}</h1>
          <div id="albumSidebar">
            <p id="back" className="albumSidebarList">
              <Link className="link" to="/">
                Albums
              </Link>
            </p>
            <p className="albumSidebarList">
              <Link className="link" to="/album/1">
                Baseball
              </Link>
            </p>
            <p className="albumSidebarList">
              <Link className="link" to="/album/2">
                Football
              </Link>
            </p>
            <p className="albumSidebarList">
              <Link className="link" to="/album/3">
                Tennis
              </Link>
            </p>
            <p className="albumSidebarList">
              <Link className="link" to="/album/4">
                Soccer
              </Link>
            </p>
            <p className="albumSidebarList">
              <Link className="link" to="/album/5">
                Golf
              </Link>
            </p>
            <p className="albumSidebarList">
              <Link className="link" to="/album/6">
                Basketball
              </Link>
            </p>
          </div>
          {album.map((item) => (
            <div
              className="photo"
              key={item.id}
              onClick={() => setActivePhoto(item)}
            >
              <img
                className="photoThumbnail"
                src={item.fullpic}
                key={item.id}
              ></img>
              <h3 className="photoLabel">{item.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Album;
