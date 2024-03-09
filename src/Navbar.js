import './Navbar.css';
import UnderlinedButton from './components/UnderlinedButton';
import { Link } from "react-router-dom"

const Navbar =()=>{
	return (
		<div className="navbarDiv">
			<UnderlinedButton><Link className="navbarItem" to="/">About</Link></UnderlinedButton>
			<UnderlinedButton><Link className="navbarItem" to="/projects">Projects</Link></UnderlinedButton>
			<UnderlinedButton><Link className="navbarItem" to="/contact">Contact</Link></UnderlinedButton>
		</div>
	)
}
export default Navbar;