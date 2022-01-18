import Hotels from "./components/HotelDetails/Hotels";
import Login from "./components/Login/Login";
import Navbar from "./components/Navbar/Navbar";
import Register from "./components/Register/Register";

function App() {
	return (
		<div>
			{/* <Login/>
			<Register/> */}
			<Navbar /><br/><br/>
			<Hotels />
			<Hotels />
			<Hotels />

		</div>
	);
}

export default App;
