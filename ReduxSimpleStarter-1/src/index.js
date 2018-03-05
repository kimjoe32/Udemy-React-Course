import _ from 'lodash'
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';

import SearchBar from './components/search_bar';

const API_KEY = "AIzaSyAnWD_iejv2StTOGuM62JShb5900BK9E9c";



// Create a new component. This component should produce some HTML

/*
	div is JSX - looks like HTML but is JS
	App wass a functional component - has no concept of state
		- only for returning JSX
	App is responsible for fetching data, because it is the top-most component
*/
class App extends Component {
	constructor(props) {
		super(props);

		this.state = { 
			videos: [],
			selectedVideo: null
		 };

		this.videoSearch('surfboards');		
	}

	videoSearch(term) {
		YTSearch({ key: API_KEY, term: term }, (videos) => {
			// Show some videos when website accessed
			this.setState({
				videos:videos,
				selectedVideo: videos[0]
			});
		});
	}
	render() {
		/* 
			Passing props (data) from parent (App) to child (VideoList)
			Use lodash to throttle onSearchTermChange, so that typing in search is not laggy
		*/

		const videoSearch = _.debounce((term) => {this.videoSearch(term) }, 300);
		return (
			<div>
				<SearchBar onSearchTermChange={videoSearch} />
				<VideoDetail video={this.state.selectedVideo} />
				<VideoList 
					onVideoSelect={selectedVideo => this.setState({selectedVideo})}
					videos={this.state.videos} />
			</div>
		);
	}
}
// Take this component's generated HTML and put it on the page (in the DOM)
// Render component, and place it in document
ReactDOM.render(<App />, document.querySelector('.container'));