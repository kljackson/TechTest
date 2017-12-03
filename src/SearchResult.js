import React, { Component } from 'react';

export default class ResultList extends Component
{
  render(){
	  return (
		<div>
			<a href={this.props.url}>{this.props.title}</a>
			<p>{this.props.description}</p>
		</div>
	  )
	}
}