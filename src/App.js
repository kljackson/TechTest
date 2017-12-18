import React, { Component } from 'react';
import './App.css';
import SearchResultList from "./SearchResultList";
var $ = require('jquery');

const RESULTS_PER_PAGE = 10;

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      results: [],
      region: 'uk',
      currentPage: 0
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
			this.setState({ results: newResultsList, currentPage: 0 });
		}.bind(this)
	})
  }

  numberOfPages() {
    return Math.round(this.state.results.length / 10);
  }

  changePage(pageNumber) {
    this.setState({
      currentPage: pageNumber
    });
  }

  renderPager() {
    const pageButtons = [];
    for (let i = 0; i < this.numberOfPages(); i++) {
      pageButtons.push(<li className="page-item"><a className="page-link" onClick={(() => this.changePage(i)).bind(this)}>{ i + 1 }</a></li>);
    }
    return pageButtons;
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
		<SearchResultList results={this.state.results} page={this.state.currentPage} />
    <nav aria-label="Page navigation example">
      <ul className="pagination">
        { this.renderPager() }
      </ul>
    </nav>
		</div>
	  </div>
    );
  }
}

export default App;
