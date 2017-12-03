import React, { Component } from 'react';
import './App.css';
import SearchResultList from "./SearchResultList";
var $ = require('jquery');

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      results: [],
      region: 'uk'
    };
  }

  componentWillMount() {
    // this will run before your component is mounted
  }
  
  search(event) {
	  event.preventDefault();
	  this.getData(this.refs.searchBox.value);
  }
  
  getData(query)
  {
	  $.ajax({
        url: "https:/help-search-api-prod.herokuapp.com/search?query=" + query,
		success: function (data)
		{
			let newResultsList = data.results;
			this.setState({ results: newResultsList });
		}.bind(this)
	})
  }
  
  render() {	  
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">help-tech-test</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
		<form onSubmit={this.search.bind(this)}>			
			<div className="col-lg-6">
				<div className="input-group">
					<input className="form-control" ref="searchBox"/>
					<span className="input-group-btn">
						<button type="submit" className="btn btn-primary">Search</button>
					</span>
				</div>
			</div>
		</form>
		<div className="App-Results">
		<SearchResultList results={this.state.results}/>
		</div>
	  </div>
    );
  }
}

export default App;
