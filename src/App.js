import React, { Fragment } from 'react';
import {
	BrowserRouter as Router,
	Route,
	Link,
	Switch,
	Redirect,
	useHistory,
	useParams,
	useLocation,
} from 'react-router-dom';

import './App.css';

const name = 'John Doe';
//const isAuthenticated = true;

export default function App() {
	return (
		<Router>
			<main>
				<nav>
					<ul>
						<li>
							<Link to='/'>Home</Link>
						</li>
						<li>
							<Link to={`/about/${name}`}>About</Link>
						</li>
						<li>
							<Link to='/contact'>Contact</Link>
						</li>
					</ul>
				</nav>

				<Switch>
					<Route path='/' exact component={Home} />
					{/*  The error route won't render with this.
					{isAuthenticated ? (
						<> */}
					<Route path='/about/:name' component={About} />
					<Route path='/contact' component={Contact} />
					{/* </>
					) : (
						<Redirect to='/' />
					)} */}
					<Route component={NotFound} />
				</Switch>
			</main>
		</Router>
	);
}

// ERROR PAGE
const NotFound = () => <h1>404: page not found</h1>;

// HOME PAGE
const Home = () => (
	<Fragment>
		<h1>Home</h1>
		<FakeText />
	</Fragment>
);

const About = () => {
	const { name } = useParams();

	return (
		<Fragment>
			{/* props.history.replace('/') in case of button usage */}
			{name !== 'John Doe' && <Redirect to='/' />}
			<h1>About {name}</h1>
			<FakeText />
		</Fragment>
	);
};

const Contact = () => {
	const { pathname } = useLocation();
	const history = useHistory();

	return (
		<Fragment>
			<h1>Contact</h1>
			<p>Current URL: {pathname}</p>
			<button onClick={() => history.push('/')}>Go to home</button>
			<FakeText />
		</Fragment>
	);
};

const FakeText = () => (
	<p>
		Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus non
		consequuntur voluptatibus voluptas recusandae? Culpa explicabo ea,
		magnam perspiciatis sunt neque maxime eum porro est error nulla
		molestias excepturi odio?
	</p>
);
