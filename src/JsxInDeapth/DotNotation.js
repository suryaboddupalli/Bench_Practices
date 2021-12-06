import React from "react"

const MyComponents = {
	Greeting: function Greeting(props) {
		return <div>hello {userName} </div>;
		// return React.createElement(div, null, hello{username});
	}
}

function Greet() {
	return <MyComponents.Greeting userName="surya" />;
}

export default Greet
