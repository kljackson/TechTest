import React, { Component } from 'react';
import SearchResult from "./SearchResult";
import './App.css';

export default class ResultList extends Component
{
    render(){
		let results = this.props.results.map(result => <SearchResult {...result}/>);
		return (
		<div className="App-results">
			{results}
		</div>
		)
	}
}