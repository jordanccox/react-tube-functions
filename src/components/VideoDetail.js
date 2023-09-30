export default function VideoDetail({video}) {
  if (!video) {
    return <div>Search for a video...</div>
  }

  const url=`https://www.youtube.com/embed/${video.id.videoId}`;

  return (
    <div className="video-detail col-md-8">
      <div className="ratio ratio-16x9">
        <iframe src={url} allow="fullscreen"></iframe>
      </div>
      <div className="details">
        <div><h4>{video.snippet.title}</h4></div>
        <div>{video.snippet.description}</div>
      </div>
    </div>
  );
}