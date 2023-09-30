import { useState } from "react";
import SearchBar from "./components/SearchBar";
import VideoDetail from './components/VideoDetail';
import VideoList from './components/VideoList';
import axios from "axios";

function App() {
  const [video, setVideo] = useState(null);
  const [videoList, setVideoList] = useState([]);

  function videoSearch(term) {
    const API_KEY = process.env.REACT_APP_YOUTUBE_API_KEY;

    const url = "https://www.googleapis.com/youtube/v3/search";

    const params = {
      part: "snippet",
      key: API_KEY,
      q: term,
      type: "video",
    };

    axios
      .get("./data.json")
      // .get(url, { params: params })
      .then((response) => {
        addVideos(response);
      })
      .catch((error) => {
        console.error(error);
      });
  }

  function addVideos(searchResults) {
    const videos = [];

    searchResults.data.items.forEach((item) => {
      videos.push(item);
    });

    setVideoList(videos);
    setVideo(videos[0]);
  }

  function selectVideo(input) {
    setVideo(input);
  }

  return (
    <div>
      <SearchBar onSearchTermChange={videoSearch} />
      <div className="container">
        <div className="row">
          <VideoDetail video={video} />
          <VideoList videos={videoList} selectVideo={selectVideo} />
        </div>
      </div>
    </div>
  );
}

export default App;
