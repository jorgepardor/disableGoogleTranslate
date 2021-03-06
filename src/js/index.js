//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components
import Home from "./component/home.jsx";

//render your react application
var counter = 0;

export function start() {
	const fourth = Math.floor(counter / 1000);
	const third = Math.floor(counter / 100);
	const second = Math.floor(counter / 10);
	const first = Math.floor(counter / 1);
	counter++;

	ReactDOM.render(
		<Home
			firstDigit={first}
			secondDigit={second}
			thirdDigit={third}
			fourthDigit={fourth}
		/>,
		document.querySelector("#app")
	);
}

export function reset() {
	counter = 0;

	start();
}

start();
