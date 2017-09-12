import React from "react";
import ReactDOM from "react-dom";

import Component from "./component";

// Import stylesheets.
require("./app-style.css");

class App extends React.Component {
	render() {
		return (
			<div>
				<h1>React App</h1>
				<Component />
			</div>
		)
	}
}

ReactDOM.render(<App />, document.getElementById("react-component"));

export default App;
