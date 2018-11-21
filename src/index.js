import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './season_display';
import Spinner from './spinner';


class App extends Component { 
     state = {lat: null, errorMessage: ""};

     componentDidMount() {
         //geolocation API
        window.navigator.geolocation.getCurrentPosition(
			position =>  this.setState({ lat: position.coords.latitude }),
			err => this.setState({ errorMessage: err.message  })
		);
     }

     renderContent() {
     	if (this.state.errorMessage && !this.state.lat) {
			return <div> Error: {this.state.errorMessage}</div>
		}

		if (!this.state.errorMessage && this.state.lat) {
			return <SeasonDisplay lat={this.state.lat} />
		}
			return <div> <Spinner message="Please accept location request"/> </div>

     }

	render () {
		return(
			<div>
				{this.renderContent()}
			</div>
		)
    }
}



ReactDOM.render( <App />, document.querySelector('#root') );

