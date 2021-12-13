import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import About from "./Components/About";
import Dashboard from "./Components/Dashboard";
import Home from "./Components/Home";
import Login from "./Components/Login";
import Register from "./Components/Register";
import PrivateRoute from './Components/PrivateRoute';

function App() {
	return (
		<Router>
			<Switch>
				<Route path='/login' component={Login} />
				<Route path='/register' component={Register} />
				<PrivateRoute path='/dashboard'>
					<Dashboard />
				</PrivateRoute>
				<Route path='/' component={Home} />
				<Route path='/about' component={About} />
			</Switch>
		</Router>
	);
}

export default App;
