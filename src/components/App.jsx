
  class App extends React.Component {

    constructor(props) {
      super(props);

      this.state = {
        currentVideo: window.exampleVideoData[0],
        videoList: window.exampleVideoData
      };
    }
    
    componentDidMount() {
      this.getYouTubeVideos('cute kittens');    
    }

  
    getYouTubeVideos(query) {
      var options = {
        key: this.props.API_KEY,
        query: query
      };
  
      this.props.searchYouTube(options, (videos) => {
        this.setState({
          videoList: videos,
          currentVideo: videos[0]        
        });

      });
    }
    
    onItemClick(url) {
      for (var i = 0; i < exampleVideoData.length; i++) {
        if (exampleVideoData[i].id.videoId === url) {
          this.setState({currentVideo: this.state.videoList[i]});
        }
      }
    }



    render() { 
      // this.index = this.place;
      return (
        <div>
          <nav className="navbar">
            <div className="col-md-6 offset-md-3">
              <Search handleSearchInputChange={this.getYouTubeVideos.bind(this)}/>
            </div>
          </nav>
          <div className="row">
            <div className="col-md-7">
              <VideoPlayer video={this.state.currentVideo}/>
            </div>
            <div className="col-md-5">
              <VideoList onClick={this.onItemClick.bind(this)} videos={this.state.videoList}/>
            </div>
          </div>
        </div>
      );
    }
}

// var App = () => (
//   <div>
//     <nav className="navbar">
//       <div className="col-md-6 offset-md-3">
//         <Search />
//       </div>
//     </nav>
//     <div className="row">
//       <div className="col-md-7">
//         <VideoPlayer video={exampleVideoData[0]}/>
//       </div>
//       <div className="col-md-5">
//         <VideoList videos={exampleVideoData} />
//       </div>
//     </div>
//   </div>
// );

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
  window.App = App;
