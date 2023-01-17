import { Link } from 'react-router-dom';
import '../Style/Components/navbar-style.scss';

export const Navbar = () => {
	return (
		<>
			<nav className="navbar-main-container">
				<span>
					<Link to="/">Home</Link>
				</span>
				<span>
					<Link to="/favorites">Favorites</Link>
				</span>
			</nav>
		</>
	);
};
