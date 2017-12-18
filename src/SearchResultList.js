import React, { Component } from 'react';
import SearchResult from "./SearchResult";
import './App.css';

export default class ResultList extends Component
{
		renderResults() {
			const start = this.props.page * 10;
			const results = this.props.results.slice(start, start + 10);
			return results.map(result => <SearchResult {...result}/>);
		}

    render(){
			return (
			<div className="App-results">
				{ this.renderResults() }
			</div>
		)
	}
}
