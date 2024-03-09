import './App.css';
import './assets/css/fonts.css';
import { Routes, Route} from "react-router-dom";
import Navbar from './Navbar';
import About from "./routes/About";
import Projects from "./routes/Projects";
import Contact from "./routes/Contact";

function App() {
	return (
		<>
		<Navbar />
			<div class="appDiv">
				<Routes>
					<Route path="/" element={<About />} />
					<Route path="/projects" element={<Projects />} />
					<Route path="/contact" element={<Contact />} />
				</Routes>
			</div>
		</>
	);
}

export default App;
