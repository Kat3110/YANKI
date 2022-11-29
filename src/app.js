import { h } from 'preact';
import { Router } from 'preact-router';


// Code-splitting is automated for `routes` directory
import Main from './routes/main';
import Category from "./routes/category";
import About from "./routes/about";

const App = () => (
	<div id="app">
		<Router>
			<Main path="/" />
			<Category path="/category" />
			<About path='/about' />
		</Router>
	</div>
)

export default App;
