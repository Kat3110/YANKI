import { h } from 'preact';
import { Router } from 'preact-router';
import Main from './routes/main';
import Category from "./routes/category";
import About from "./routes/about";
import Catalog from "./routes/catalog";

const App = () => (
	<div id="app">
		<Router>
			<Main path="/" />
			<Category path="/category" />
			<About path='/about' />
			<Catalog path='/catalog' />
		</Router>
	</div>
)

export default App;
