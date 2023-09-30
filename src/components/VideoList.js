import VideoListItem from './VideoListItem';

export default function VideoList(props) {
  const videoList = props.videos.map((video, index) => {
    return <VideoListItem key={index} video={video} selectVideo={props.selectVideo}/>;
  });

  return (
    <ul className="col-md-4 list-group">
      {videoList}
    </ul>
  )
}