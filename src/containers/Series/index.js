import React, { Component } from 'react';

class Series extends Component {
    state = {
        series: []
      }
    
      componentDidMount(){
        fetch('http://api.tvmaze.com/shows/1/episodes?specials=1')
          .then(response => response.json())
          .then(json =>this.setState({ series: json}))
      }
    render() {
        return (
            <div>
            The length of series array - {this.state.series.length}</div>
        )
    }
}

export default Series;