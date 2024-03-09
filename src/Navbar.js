import './Navbar.css';
import { Link } from "react-router-dom"

const Navbar =()=>{
	return (
		<div className="sidebar-container">
		<button className="menu-button">Hover Me</button>
		<div className="sidebar-content">
		<div className="menu-content">
			<Link to="/">Home</Link>
		</div>
		</div>
		</div>
	)
}
export default Navbar;