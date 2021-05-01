import { ToastContainer } from 'react-toastify';
import Login from './modules/login';
import Library from './modules/library';
import Borrowed from './modules/borrowed';
import './App.css';
import { Route, Switch, Redirect } from 'react-router';

const toast = (
	<ToastContainer
		position="bottom-left"
		autoClose={5000}
		hideProgressBar
		newestOnTop={false}
		closeOnClick
		rtl={false}
		pauseOnFocusLoss
		draggable
		pauseOnHover
	/>
);

function App() {
	return (
		<main>
			<Switch>
				<Route exact path="/" component={Login} />
				<Route exact path="/lib" component={Library} />
				<Route exact path="/borrowed" component={Borrowed} />
				<Redirect to="/" />
			</Switch>
			{toast}
		</main>
	);
}

export default App;
