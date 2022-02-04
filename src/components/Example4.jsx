import React, { Component } from 'react';
import ReactPlayer from 'react-player';
import { Layout } from './Layout';
import { VideoList } from './VideoList/VideoList';
import videos from '../../videos.json';

export class Example4 extends Component {
  state = {
    selectedVideo: null,
  };

  selectVideo = link => {
    this.setState({ selectedVideo: link });
  };

  render() {
    const { selectedVideo } = this.state;
    return (
      <Layout>
        <h1>Selected video: {selectedVideo}</h1>
        <VideoList videos={videos} onSelect={this.selectVideo} />
        {selectedVideo && <ReactPlayer url={selectedVideo} />}
      </Layout>
    );
  }
}
