

// class VideoListEntry extends React.Component {

//   constructor(props) {
//     super(props);
//     console.log('we are here', props);
//     console.log('Mr Meeseeks', this.props);
//   }

//   render() {
//     console.log(this.props);
//     return (
//       <div className="video-list-entry media">
//         <div className="media-left media-middle">
//           <img className="media-object" src={this.props.thumbnail} alt="" />
//         </div>
//       <div className="media-body">
//         <div onClick={this.props.click.bind(this)} className="video-list-entry-title">{this.props.title}</div>
//           <div className="video-list-entry-detail">{this.props.description}</div>
//         </div>
//       </div>
//     );
//   }
  
// }
// title={item.snippet.title} description={item.snippet.description} thumbnail={item.snippet.thumbnails.default.url}


var VideoListEntry = (props) => {

  return (
      <div className="video-list-entry media">
        <div className="media-left media-middle">
          <img className="media-object" src={props.video.snippet.thumbnails.default.url} alt="" />
        </div>
        <div className="media-body">
          <div onClick={function() { props.click(props.video.id.videoId); } } className="video-list-entry-title">{props.video.snippet.title}</div>
          <div className="video-list-entry-detail">{props.video.snippet.description}</div>
        </div>
      </div>
  );
};

// PropTypes tell other developers what `props` a component expects
// Warnings will be shown in the console when the defined rules are violated
VideoListEntry.propTypes = {
  video: React.PropTypes.object.isRequired
};

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.VideoListEntry = VideoListEntry;

//onClick={this.onItemClick.bind(this)} 